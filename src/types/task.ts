export const TASKS_KEY = "tasks";
export interface Task {
    id: string;
    title: string;
    concluded?: boolean;
    state?: TaskState;
}

export enum TaskState {
    Creating = "creating",
    Created = "created",
}