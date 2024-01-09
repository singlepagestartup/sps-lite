import { createSlice } from "@reduxjs/toolkit";
import { IEntity } from "../interfaces";
import sha256 from "crypto-js/sha256";

const initialState: IEntity = {
  username:
    typeof window !== "undefined"
      ? localStorage.getItem("username")
      : undefined,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAnonymusUsername: (state) => {
      if (state.username) {
        return;
      }

      const username = sha256(`${Math.random() * 10e5}`).toString();
      state.username = username;
      if (typeof window !== "undefined") {
        localStorage.setItem("username", username);
      }
    },
  },
});
