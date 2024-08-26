import { ADD_PLAYLIST, PAUSE_MASTER_PLAYLIST, PAUSE_PLAYLIST_REQUEST, PLAY_MASTER_PLAYLIST, PLAY_PLAYLIST_REQUEST, REMOVE_PLAYLIST } from "../constants/playlistConstant";
// src/states/playlistReducer.js
const initialState = {
    masterPlaylist: {},  // The playlist currently being played
    playlists: [],       // All playlists
    isPlaying: false     // Whether a playlist is currently playing
};

export const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYLIST:
            return { ...state, playlists: [action.payload] };

        case REMOVE_PLAYLIST:
            return { ...state, playlists: state.playlists.filter(playlist => playlist.id !== action.payload) };

        case PLAY_PLAYLIST_REQUEST:
            return { ...state, masterPlaylist: action.payload, isPlaying: true };

        case PAUSE_PLAYLIST_REQUEST:
            return { ...state, isPlaying: false };

        case PLAY_MASTER_PLAYLIST:
            return { ...state, isPlaying: true };

        case PAUSE_MASTER_PLAYLIST:
            return { ...state, isPlaying: false };

        default:
            return state;
    }
};
