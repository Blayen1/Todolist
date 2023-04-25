import { FilterValuesType, TasksStateType, TodolistType } from "../App";
import { v1 } from "uuid";
import { TaskType } from "../Todolist";
import { addTodolistACType, removeTodolistACType } from "./todolists-reducer";

export const TasksReducer = (
  state: TasksStateType,
  action: TsarType
): TasksStateType => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return {
        ...state,
        [action.payload.todolistID]: state[action.payload.todolistID].filter(
          (el) => el.id !== action.payload.id
        ),
      };
    }

    case "ADD-TASK": {
      let newTask: TaskType = {
        id: v1(),
        title: action.payload.newTaskTitle,
        isDone: false,
      };

      return {
        ...state,
        [action.payload.todolistID]: [
          newTask,
          ...state[action.payload.todolistID],
        ],
      };
    }

    case 'CHANGE-TASK-STATUS': {
      let todolistTasks = state[action.payload.todolistID];
      state[action.payload.todolistID] = todolistTasks
          .map(t => t.id === action.payload.taskId
              ? {...t, isDone: action.payload.isDone}
              : t);
      return ({...state});
  }
  case 'CHANGE-TASK-TITLE': {
      let todolistTasks = state[action.payload.todolistID];
      state[action.payload.todolistID] = todolistTasks
          .map(t => t.id === action.payload.taskId
              ? {...t, title: action.payload.title}
              : t);
      return ({...state});
  }
  
  case "ADD-TODOLIST" : {
    return {
      ...state,
      [action.payload.todolistID] : []
    }
  }

  case "REMOVE-TODOLIST" : {
    const copyState = {...state}
    delete copyState[action.payload.id]
    return copyState
  }

    default:
      return state;
  }
};

type TsarType = RemoveTaskACType 
| addTaskACType 
| ChangeTaskStatusACType 
| ChangeTaskTitleACType
| addTodolistACType
| removeTodolistACType;

type RemoveTaskACType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (id: string, todolistID: string) => {
  return {
    type: "REMOVE-TASK",
    payload: { id, todolistID },
  } as const;
};

type addTaskACType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (newTaskTitle: string, todolistID: string) => {
  return {
    type: "ADD-TASK",
    payload: {
      newTaskTitle,
      todolistID,
    },
  } as const;
};

type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>;
export const changeTaskStatusAC = (
  todolistID: string,
  isDone: boolean,
  taskId: string
) => {
  return {
    type: "CHANGE-TASK-STATUS",
    payload: {
      todolistID,
      isDone,
      taskId,
    },
  } as const;
};

type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>;
export const changeTaskTitleAC = (
  todolistID: string,
  title: string,
  taskId: string
) => {
  return {
    type: "CHANGE-TASK-TITLE",
    payload: {
      todolistID,
      title,
      taskId,
    },
  } as const;
};
 
