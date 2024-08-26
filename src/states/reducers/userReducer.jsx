import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_ABOUT,
    UPDATE_USER_PLAYLISTS
} from "../constants/userConstant.jsx"

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    isAuthenticated: !!localStorage.getItem("token")
};
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            localStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, user: action.payload, isAuthenticated: true };

        case USER_LOGGED_OUT:
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuthenticated: false };

        case USER_ABOUT:
            return { ...state, user: action.payload, isAuthenticated: true };

        case UPDATE_USER_PLAYLISTS:

            return {
                ...state,
                user: {
                    ...state.user,
                    playlists: [ ...state.user.playlists ],
                },
            };

        default:
            return state;
    }
}