import { FilterValuesType, TodolistType } from "../App";
import { v1 } from "uuid";

export const TodolistsReducer = (
  state: TodolistType[],
  action: TsarType
): TodolistType[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((el) => el.id !== action.payload.id);
    }
    case "ADD-TODOLIST": {
      let newTodolist: TodolistType = {
        id: action.payload.todolistID,
        title: action.payload.newTodolistTitle,
        filter: "all",
      };
      return [...state, newTodolist];
    }
    case "CHANGE-TODOLIST-TITLE": {
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, title: action.payload.newTodolistTitle }
          : el
      );
    }
    case "CHANGE-TODOLIST-FILTER": {
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, filter: action.payload.newFilter }
          : el
      );
    }
    default:
      return state;
  }
};

type TsarType =
  | removeTodolistACType
  | addTodolistACType
  | changeTodolistTitleACType
  | ChangeFilterACType;

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (id: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      id,
    },
  } as const;
};

export type addTodolistACType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = (newTodolistTitle: string) => {
  return {
    type: "ADD-TODOLIST",
    payload: {
      newTodolistTitle,
      todolistID: v1(),
    },
  } as const;
};

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>;
export const changeTodolistTitleAC = (id: string, newTodolistTitle: string) => {
  return {
    type: "CHANGE-TODOLIST-TITLE",
    payload: {
      id,
      newTodolistTitle,
    },
  } as const;
};

type ChangeFilterACType = ReturnType<typeof changeFilterAC>;
export const changeFilterAC = (id: string, newFilter: FilterValuesType) => {
  return {
    type: "CHANGE-TODOLIST-FILTER",
    payload: {
      id,
      newFilter,
    },
  } as const;
};
