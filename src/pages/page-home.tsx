import Container from "../components/container";
import TasksList from "../core-components/tasks-list";
import TasksSumary from "../core-components/tasks-summary";

export default function PageHome() {
  return <Container as="article" className="space-y-3">
    <header className="flex items-center justify-between">
      <TasksSumary />
    </header>
    
    <TasksList />
  </Container>
}
