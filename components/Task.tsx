import TaskHeader from "./TaskHeader";
import TodoSection from "./TodoSection";
import InprogressSection from "./InprogressSection";
import CompletedSection from "./CompletedSection";

export default function Tasks() {
  return (
    <>
      <div className="w-full flex gap-4">
        <div className="flex-1">
          <TaskHeader headerName="To Do" count={4} addTask={true} />
          <TodoSection />
        </div>
        <div className="flex-1">
          <TaskHeader headerName="In Progress" count={2} />
          <InprogressSection />
        </div>
        <div className="flex-1">
          <TaskHeader headerName="Completed" count={1} />
          <CompletedSection />
        </div>
      </div>
    </>
  );
}
