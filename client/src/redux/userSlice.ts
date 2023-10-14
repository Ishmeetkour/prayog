import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        logged: false,
        details: {
            type: 'student',
            name: 'Divyanshu Naugai',
            college: 'BTKIT Dwarahat',
            degree:'Under Graduation',
            speciality:'Electronics',
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta reprehenderit libero consectetur, asperiores ea delectus omnis cupiditate accusantium, rem expedita aliquam quia? Consectetur eligendi eius libero at laudantium autem.'
        }
    },
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            if (email === 'qaz@gmail.com') {
                if (password === 'qwerty') {
                    state.logged = true;
                }
            }
        },
        logout: (state) => {
            state.logged = false;
        }
    }
})

export const { login } = userSlice.actions;
export const { logout } = userSlice.actions;
export default userSlice.reducer;