import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../types/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import React from "react";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setEditing] = React.useState(
    task.state === TaskState.Creating
  );

  const [taskTitle, setTaskTitle] = React.useState(task.title || "");
  const { updateTask, updateTaskStatus, DeleteTask } = useTask();

  function HandleEditTask() {
    setEditing(true);
  }

  function HandleExitEditTask() {
    if (task.state === TaskState.Creating) {
      DeleteTask(task.id);
    }
    setEditing(false);
  }

  function HandleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function HandleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ id: task.id, title: taskTitle });
    updateTask(task.id, { title: taskTitle });
    setEditing(false);
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);
  }

  function handleClickDeleteTask() {
    DeleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleClickDeleteTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={HandleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={HandleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={HandleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={HandleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
