import { createSlice } from '@reduxjs/toolkit'

const defaultState: any = {
    prodList: [],
    userList: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState: defaultState,
  reducers: {
    addProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.prodList.push(action.payload)
    },
    addUser: (state, action) => {
        state.userList.push(action.payload)
      }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, addUser } = productSlice.actions

export default productSlice.reducer