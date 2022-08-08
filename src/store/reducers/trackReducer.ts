import { createSlice } from "@reduxjs/toolkit";
import { ITrackState } from "src/types/type";

const trackState: ITrackState = {
    tracks: [{
        id: '1',
        url: require('src/components/theWeekend.mp3'),
        image: require('src/components/icons/Collections/Tracks/weekend.jpeg'),
        name: 'Save Your Tears',
        artist: 'The Weekend',
        date: '14'
    },
    {
        id: '2',
        url: require('src/components/problems.mp3'),
        image: require('src/components/icons/Collections/Tracks/problems.jpeg'),
        name: '99 problems',
        artist: 'Kizaru',
        date: '14'
    },
    {
        id: '3',
        url: require('src/components/smuzi.mp3'),
        image: require('src/components/icons/Collections/Tracks/smuzi.jpeg'),
        name: 'Смузи',
        artist: 'The Limba',
        date: '14'
    },
    {
        id: '4',
        url: require('src/components/smuzi.mp3'),
        image: require('src/components/icons/Collections/Tracks/smuzi.jpeg'),
        name: 'Смузи',
        artist: 'The Limba',
        date: '14'
    },
    {
        id: '6',
        url: require('src/components/smuzi.mp3'),
        image: require('src/components/icons/Collections/Tracks/smuzi.jpeg'),
        name: 'Смузи',
        artist: 'The Limba',
        date: '14'
    },
    {
        id: '7',
        url: require('src/components/smuzi.mp3'),
        image: require('src/components/icons/Collections/Tracks/smuzi.jpeg'),
        name: 'Смузи',
        artist: 'The Limba',
        date: '14'
    },
    {
        id: '8',
        url: require('src/components/smuzi.mp3'),
        image: require('src/components/icons/Collections/Tracks/smuzi.jpeg'),
        name: 'Смузи',
        artist: 'The Limba',
        date: '14'
    },
    

    ],
    currentTrack: {
        name: 'No tracks', 
        url: '', 
        image: '',
        artist: 'No tracks', 
        date: '', 
        id: String(Math.random())
    }
 
}

const trackReducer= createSlice({
    name: 'trackReducer',
    initialState: trackState,
    reducers: {
        getTracks(state) {
            state.tracks = state.tracks
        },
        changeTrack(state, action) {
            state.currentTrack = state.tracks.find(el => action.payload == el.id)
        },
        changeTrackPosition(state, action) {
            state.currentTrack = state.tracks.find((el, index) => index == action.payload)
        }
    }
})

export const { getTracks, changeTrack, changeTrackPosition } = trackReducer.actions;

export default trackReducer.reducer;