import Text from "../components/text";
import Badge from "../components/badge";
import useTasks from "../hooks/use-tasks";

export default function TasksSumary() {
  const { tasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>
          {tasksCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>
          {concludedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}
