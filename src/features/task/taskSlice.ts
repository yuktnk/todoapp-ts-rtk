import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TaskState {
  idCount: number;
  tasks: { id: number; title: string; complete: boolean }[];
}

const initialState: TaskState = {
  idCount: 3,
  tasks: [
    { id: 3, title: "task C", complete: false },
    { id: 2, title: "task B", complete: false },
    { id: 1, title: "task A", complete: false },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        complete: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.complete = !task.complete;
      }
    },
  },
});

export const { addTask, removeTask, completeTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
