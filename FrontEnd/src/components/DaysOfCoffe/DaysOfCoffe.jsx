import { useState, useEffect } from "react";
import {
    DivFoot, DayWeek, NameWeek,
    Names, DivTitleCafe, TextFoot,
    AlignDiv, DivDay, AlignEdit,
    EditIcon, CheckIcon, EditDiv,
    TextInput
} from "./styles";

const DaysOfCoffe = () => {
    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    const [editMode, setEditMode] = useState(false);
    const [names, setNames] = useState({
        seg: { name1: 'Caio', name2: 'Gabriel' },
        ter: { name1: 'Bruna', name2: 'Leo' },
        qua: { name1: 'Osmar', name2: 'João' },
        qui: { name1: 'Wasch', name2: 'Braian' },
        sex: { name1: 'Helegod', name2: 'Pedro K.' }
    });

    useEffect(() => {
        setCurrentDay(new Date().getDay());

        const handleKeyPress = (e) => {
            if (e.key === 'Enter' && editMode) {
                setEditMode(false);
            }
        };

        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [editMode]);


    return (
        <>
            <DivFoot>
                <AlignDiv>
                    <DivTitleCafe>
                        <TextFoot>Dia do Café</TextFoot>
                    </DivTitleCafe>
                    <DivDay style={currentDay === 1 ? { borderTop: '2px solid #B73625' } : {}}>
                        <DayWeek>seg</DayWeek>
                        <NameWeek>
                            {editMode ? (
                                <>
                                    <TextInput
                                        value={names.seg.name1}
                                        onChange={(e) => setNames({ ...names, seg: { ...names.seg, name1: e.target.value } })}
                                    />
                                    <TextInput
                                        value={names.seg.name2}
                                        onChange={(e) => setNames({ ...names, seg: { ...names.seg, name2: e.target.value } })}
                                    />
                                </>
                            ) : (
                                <>
                                    <Names>{names.seg.name1}</Names>
                                    <Names>{names.seg.name2}</Names>
                                </>
                            )}
                        </NameWeek>
                    </DivDay>
                </AlignDiv>
                <DivDay style={currentDay === 2 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>ter</DayWeek>
                    <NameWeek>
                        {editMode ? (
                            <>
                                <TextInput
                                    value={names.ter.name1}
                                    onChange={(e) => setNames({ ...names, ter: { ...names.ter, name1: e.target.value } })}
                                />
                                <TextInput
                                    value={names.ter.name2}
                                    onChange={(e) => setNames({ ...names, ter: { ...names.ter, name2: e.target.value } })}
                                />
                            </>
                        ) : (
                            <>
                                <Names>{names.ter.name1}</Names>
                                <Names>{names.ter.name2}</Names>
                            </>
                        )}
                    </NameWeek>
                </DivDay>
                <DivDay style={currentDay === 3 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>qua</DayWeek>
                    <NameWeek>
                        {editMode ? (
                            <>
                                <TextInput
                                    value={names.qua.name1}
                                    onChange={(e) => setNames({ ...names, qua: { ...names.qua, name1: e.target.value } })}
                                />
                                <TextInput
                                    value={names.qua.name2}
                                    onChange={(e) => setNames({ ...names, qua: { ...names.qua, name2: e.target.value } })}
                                />
                            </>
                        ) : (
                            <>
                                <Names>{names.qua.name1}</Names>
                                <Names>{names.qua.name2}</Names>
                            </>
                        )}
                    </NameWeek>
                </DivDay>
                <DivDay style={currentDay === 4 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>qui</DayWeek>
                    <NameWeek>
                        {editMode ? (
                            <>
                                <TextInput
                                    value={names.qui.name1}
                                    onChange={(e) => setNames({ ...names, qui: { ...names.qui, name1: e.target.value } })}
                                />
                                <TextInput
                                    value={names.qui.name2}
                                    onChange={(e) => setNames({ ...names, qui: { ...names.qui, name2: e.target.value } })}
                                />
                            </>
                        ) : (
                            <>
                                <Names>{names.qui.name1}</Names>
                                <Names>{names.qui.name2}</Names>
                            </>
                        )}
                    </NameWeek>
                </DivDay>
                <AlignEdit>
                    <EditDiv>
                        {!editMode ? <EditIcon name='edit' onClick={() => setEditMode(true)} />
                            : <CheckIcon name='check' onClick={() => setEditMode(false)} />}
                    </EditDiv>
                    <DivDay style={currentDay === 5 ? { borderTop: '2px solid #B73625' } : {}}>
                        <DayWeek>sex</DayWeek>
                        <NameWeek>
                            {editMode ? (
                                <>
                                    <TextInput
                                        value={names.sex.name1}
                                        onChange={(e) => setNames({ ...names, sex: { ...names.sex, name1: e.target.value } })}
                                    />
                                    <TextInput
                                        value={names.sex.name2}
                                        onChange={(e) => setNames({ ...names, sex: { ...names.sex, name2: e.target.value } })}
                                    />
                                </>
                            ) : (
                                <>
                                    <Names>{names.sex.name1}</Names>
                                    <Names>{names.sex.name2}</Names>
                                </>
                            )}
                        </NameWeek>
                    </DivDay>
                </AlignEdit>
            </DivFoot >
        </>
    )
}

export default DaysOfCoffe