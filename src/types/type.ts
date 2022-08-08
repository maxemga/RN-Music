

export interface ITabBar {
    state: any,
    navigation: any,
    descriptors: any
}

export interface ITrackState {
    tracks: ITrack[],
    currentTrack: ITrack
}

export interface ITrack {
    name: string,
    artist: string,
    date: string,
    url: string,
    image: string,
    id: string
}