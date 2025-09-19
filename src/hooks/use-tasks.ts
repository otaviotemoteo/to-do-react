import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState } from "../types/task";
import type { Task } from "../types/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
