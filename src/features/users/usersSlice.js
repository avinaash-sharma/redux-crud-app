import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", name: "John Doe", email: "john@doe.com" }];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      console.log("from adduser->>", action.payload);
      state.push(action.payload);
    },
    userUpdated(state, action) {
      // console.log('state-->', state);
      // console.log('action-->', action.payload);
      const { id, name, email } = action.payload;
      const extistingUser = state.find((user) => user.id === id);

      if (extistingUser) {
        console.log(extistingUser);
        extistingUser.name = name;
        extistingUser.email = email;
      }
    },
    userDelete(state, action) {
      const {id} = action.payload;
      console.log("action-->", action.payload);
      const extistingUser = state.find((user) => user.id === id);
      // const extistingUser = state.find(user => console.log(user.id));
      console.log(extistingUser);
      if (extistingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
		
  },
});

export const { userAdded, userUpdated, userDelete } = usersSlice.actions;
export default usersSlice.reducer;
