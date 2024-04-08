import {
  Title, DivInput, TextLabel, Input,
  ButtonInput, DivList, TextUl, ButtonList,
  DivNames, ListNames, DivNamesList,
  StyledToastContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DrawGrid = ({ setFridayGroups, theme }) => {
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState("");
  const [onEdit, setOnEdit] = useState(null);

  const handleChange = (e) => setNames(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddParticipant(names);
      setNames("");
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080");
      setUsers(res.data)
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers, users]);

  const handleAddParticipant = async (name) => {
    if (!name.trim()) {
      toast.error("Insira o nome do funcionário.");
      return;
    } else {
      try {
        const res = await axios.post("http://localhost:8080/add", { name });
        setUsers([...users, res.data]);
        toast.success("Usuário adicionado com sucesso.");
        setNames('');
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8080/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  }

  const sortParticipantsIntoTeams = () => {
    const shuffledParticipants = [...users].sort(() => Math.random() - 0.5);
    const teams = [];

    while (shuffledParticipants.length > 0) {
      if (shuffledParticipants.length > 1) {
        teams.push([shuffledParticipants.pop(), shuffledParticipants.pop()]);
      } else {
        teams.push([shuffledParticipants.pop()]);
      }
    }

    return teams;
  };

  return (
    <>
      <StyledToastContainer autoClose={3000} position="bottom-right" />
      <Title>Calendário de Limpeza</Title>
      <DivInput>
        <TextLabel>Insira o nome</TextLabel>
        <Input type="text" value={names} onChange={handleChange} onKeyPress={handleKeyPress} />
        <ButtonInput onClick={() => handleAddParticipant(names)}>Adicionar</ButtonInput>
      </DivInput>
      <DivList>
        <TextUl>Lista de participantes</TextUl>
        <ButtonList onClick={() => setFridayGroups(sortParticipantsIntoTeams())}>Sortear</ButtonList>
      </DivList>
      <DivNames>
        {users.map((user) => (
          <ListNames key={user.id}>
            <DivNamesList>
              <BsDot size={40} />
              {user.nome}
            </DivNamesList>
            <IoCloseSharp onClick={() => handleDelete(user.id)} size={20} />
          </ListNames>
        ))}
      </DivNames>
    </>
  );
}

export default DrawGrid;