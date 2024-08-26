import {
    USER_LOGGED_IN,
    USER_ABOUT,
    USER_LOGGED_OUT,
    UPDATE_USER_PLAYLISTS
} from "../constants/userConstant.jsx"

export const userActor = (user) => async (dispatch) => {

    dispatch({
        type: USER_LOGGED_IN,
        payload: user
    })
}


export const userPlaylist  = (user) => async (dispatch) => {

    dispatch({
        type: UPDATE_USER_PLAYLISTS,
        payload: user
    })
}

export const userLogout = (user) => async (dispatch) => {

    dispatch({
        type: USER_LOGGED_OUT,
        payload: user
    })
}


export const getUser = (user) => async (dispatch) => {
    dispatch({
        type: USER_ABOUT,
        payload: user
    })
}