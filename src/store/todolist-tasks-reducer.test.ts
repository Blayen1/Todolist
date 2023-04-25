import { TasksStateType, TodolistType } from "../App"
import { TasksReducer } from "./tasks-reducer"
import { TodolistsReducer, addTodolistAC } from "./todolists-reducer"

​test('ids should be equals', () => {
    const startTasksState: TasksStateType = {}
    const startTodolistsState: Array<TodolistType> = []

    const action = addTodolistAC('new todolist')

    const endTasksState = TasksReducer(startTasksState, action)
    const endTodolistsState = TodolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id

    expect(idFromTasks).toBe(action.payload.todolistID)
    expect(idFromTodolists).toBe(action.payload.todolistID)
})