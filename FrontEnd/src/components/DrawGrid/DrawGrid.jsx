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

const DrawGrid = ({ setFridayGroups, setIsLoading }) => {
  const date = new Date();
  const today = new Date();
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState("");
  const [onEdit, setOnEdit] = useState(null);
  const [currentDate, setCurrentDate] = useState(date);
  const [allFridays, setAllFridays] = useState([]);

  const handleChange = (e) => setNames(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddParticipant(names);
      setNames("");
    }
  };

  function getAllFridays(year, startMonth = 0, endMonth = 11) {
    const fridays = [];
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    for (let month = startMonth; month <= endMonth; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);

        if (date.getDay() === 5) {
          if (month < currentMonth || (month === currentMonth && day < currentDay)) {
            continue;
          }
          fridays.push(date);
        }
      }
    }
    return fridays;
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080");
      setUsers(res.data)
    } catch (error) {
      toast.error(error);
    }
  };

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
  };

  const handleSaveTeams = async (teams) => {
    const teamsWithDate = teams.map((team, index) => {
      const date = allFridays[index];
      return [...team, date];
    });

    try {
      const res = await axios.post("http://localhost:8080/saveTeams", { teams: teamsWithDate });
      toast.success("Duplas salvas com sucesso.");
    } catch (error) {
      toast.error(error);
    }
  };

  const sortParticipantsIntoTeams = () => {
    const shuffledParticipants = [...users].sort(() => Math.random() - 0.5);
    const teams = [];

    while (shuffledParticipants.length > 0) {
      if (shuffledParticipants.length > 1) {
        teams.push([shuffledParticipants.pop(), shuffledParticipants.pop()].map(user => user.nome));
      } else {
        teams.push([shuffledParticipants.pop().nome]);
      }
    }

    handleSaveTeams(teams);

    return teams;
  };

  const getFridayGroups = async () => {
    try {
      const res = await axios.get("http://localhost:8080/getTeams");
      const data = res.data.reduce((acc, item, index) => {
        const dayIndex = Math.floor(index / 1);
        if (!acc[dayIndex]) {
          acc[dayIndex] = [];
        }
        acc[dayIndex].push({
          funcionario1: item.funcionario1,
          funcionario2: item.funcionario2
        });
        return acc;
      }, []);
      setFridayGroups(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setAllFridays(getAllFridays(currentDate.getFullYear(), 0, 11));
  }, [currentDate]);

  useEffect(() => {
    getUsers();
  }, [setUsers, users]);

  useEffect(() => {
    getFridayGroups();
  }, []);

  return (
    <>
      <StyledToastContainer autoClose={2000} position="bottom-right" />
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