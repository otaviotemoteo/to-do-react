import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import React from "react";
import InputText from "../components/input-text";



export default function TaskItem() {
    const [isEditing, setEditing] = React.useState(false)

    function HandleEditTask() {
        setEditing(true)
    }

    function HandleExitEditTask() {
        setEditing(false)
    }



    return (
    <Card size="md" className="flex items-center gap-4">
        {!isEditing ? ( 
        <>
        <InputCheckbox />
        <Text className="flex-1">Fazer compras da semana</Text>
        <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary"/>
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={HandleEditTask}/>
        </div>
        </>
        ) : (
        <>
        <InputText className="flex-1" />
        <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" onClick={HandleExitEditTask}/>
            <ButtonIcon icon={CheckIcon} variant="primary"/>
        </div>
        </>
        )}
    </Card>
    );
}