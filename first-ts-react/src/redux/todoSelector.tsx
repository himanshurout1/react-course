import { createSelector } from "@reduxjs/toolkit";

// const selectCompletedTodos = (state: any) => state.todos.filter((todo: any)=>todo.completed).length;
export const userListSelector = createSelector((state: any) => state, (state) => {
    console.log("selector function called", state)
    return state?.product?.userList;
});