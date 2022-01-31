import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addTask, removeTask, completeTask, selectTasks } from "./taskSlice";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log(tasks);

  type TaskItem = {
    id: number;
    title: string;
    complete: boolean;
  };
  return (
    <>
      <div></div>
      <div>
        <h3>未完了</h3>
        <ul>
          {tasks.map((task: TaskItem) =>
            task.complete ? (
              ""
            ) : (
              <li key={task.id}>
                <span>{task.title}</span>
                <button onClick={() => dispatch(completeTask(task))}>完了</button>
                <button onClick={() => dispatch(removeTask(task))}>削除</button>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h3>完了</h3>
        <ul>
          {tasks.map((task: TaskItem) =>
            task.complete ? (
              <li key={task.id}>
                <span>{task.title}</span>
                <button onClick={() => dispatch(completeTask(task))}>完了</button>
                <button onClick={() => dispatch(removeTask(task))}>削除</button>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Task;
