import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    token: any;
    role: string;
}

interface dto {
    user: User;
}

const initialState: dto = {
    user: { token: null, role: "" },
};

export const userSlice = createSlice({
    name: "user",

    initialState,
    reducers: {
        setUser: (state: any, action: PayloadAction<User>) => {
            console.log("🚀 ~ action.payload:", state, action.payload);
            state.user = action.payload;
        },
        resetUser: (state: any) => {
            state.user = { token: null, role: "" };
        },
    },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
