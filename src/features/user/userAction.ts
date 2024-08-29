import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/user";

export const fetchUserByUsername = createAsyncThunk(
    'user/fetchUserByUsername',
    async (username: string) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const data: User[] = await response.json();

        console.log(data)
        if (data.length === 0) {
            throw new Error('User not found');
        }
        return data[0];
    }
);