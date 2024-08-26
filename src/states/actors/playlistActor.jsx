import { ADD_PLAYLIST, PAUSE_PLAYLIST_REQUEST, REMOVE_PLAYLIST } from "../constants/playlistConstant";

export const addPlaylist = (playlist) => async (dispatch) => {
    dispatch({
        type: ADD_PLAYLIST,
        payload: playlist
    });
};

export const removePlaylist = (playlistId) => async (dispatch) => {
    dispatch({
        type: REMOVE_PLAYLIST,
        payload: playlistId
    });
};

// export const playPlaylist = (playlist) => async (dispatch) => {
//     dispatch({
//         type: PLAY_PLAYLIST_REQUEST,
//         payload: playlist
//     });
// };

// export const pausePlaylist = () => async (dispatch) => {
//     dispatch({
//         type: PAUSE_PLAYLIST_REQUEST
//     });
// };

// export const playMasterPlaylist = () => async (dispatch) => {
//     dispatch({
//         type: PLAY_MASTER_PLAYLIST
//     });
// };

// export const pauseMasterPlaylist = () => async (dispatch) => {
//     dispatch({
//         type: PAUSE_MASTER_PLAYLIST
//     });
// };
