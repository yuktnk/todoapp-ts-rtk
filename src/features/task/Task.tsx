import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addTask, removeTask, completeTask, selectTasks } from "./taskSlice";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  type TaskItem = {
    id: number;
    title: string;
    complete: boolean;
  };
  return (
    <>
      <div>
        <h3>タスクを追加</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={() => dispatch(addTask(inputValue))}>タスクを追加</button>
      </div>
      <div>
        <h3>未完了リスト</h3>
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
        <h3>完了リスト</h3>
        <ul>
          {tasks.map((task: TaskItem) =>
            task.complete ? (
              <li key={task.id}>
                <span>{task.title}</span>
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
