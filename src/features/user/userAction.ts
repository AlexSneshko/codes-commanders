import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/user";

export const fetchUserByUsername = createAsyncThunk(
  "user/fetchUserByUsername",
  async (username: string) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data: User = await response.json();

      return data;
    } catch (e) {
      throw new Error("Something went wrong");
    }
  },
);
