import {
    Title, DivInput, TextLabel, Input,
    ButtonInput, DivList, TextUl, ButtonList, DivNames, ListNames, DivNamesList
} from "../Pages/styles";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

function DrawGrid() {
    const [names, setNames] = useState("");
    const [participants, setParticipants] = useState([]);

    const handleChange = (event) => {
        setNames(event.target.value);
    };

    const handleAddParticipant = () => {
        if (names.trim() !== '') {
            setParticipants([...participants, names]);
            setNames("");
        }
    };

    const handleDeleteParticipant = (index) => {
        const DeletePartcipants = participants.filter((partcipant, i) => i !== index);
        setParticipants(DeletePartcipants);
    };

    const generateTeams = (players, numTeams) => {
        const tempArray = [...players];
        const shuffledPlayers = tempArray.sort(() => Math.random() - 0.5);
        const playerPerTeam = Math.floor(tempArray.length / numTeams);
        const results = [];

        while (shuffledPlayers.length > 0) {
            results.push(shuffledPlayers.splice(0, playerPerTeam));
        }

        return results;
    };

    const sortParticipantsIntoTeams = () => {
        const numTeams = Math.ceil(participants.length / 2);
        const teams = generateTeams(participants, numTeams);
        console.log(teams);

    };

    return (
        <>
            <Title>Calendário de Limpeza</Title>
            <DivInput>
                <TextLabel>Insira o nome</TextLabel>
                <Input type="text" value={names} onChange={handleChange} />
                <ButtonInput onClick={handleAddParticipant}>Adicionar</ButtonInput>
            </DivInput>
            <DivList>
                <TextUl>Lista de participantes</TextUl>
                <ButtonList onClick={sortParticipantsIntoTeams}>Sortear</ButtonList>
            </DivList>
            <DivNames>
                {participants.map((participant, index) => (
                    <ListNames key={index}>
                        <DivNamesList>
                            <BsDot size={40} />
                            {participant}
                        </DivNamesList>
                        <IoCloseSharp onClick={() => handleDeleteParticipant(index)} size={20} />
                    </ListNames>
                ))}
            </DivNames>
        </>
    );
}

export default DrawGrid;