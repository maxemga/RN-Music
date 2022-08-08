import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getTracks, changeTrack, changeTrackPosition } from 'src/store/reducers/trackReducer';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ getTracks, changeTrack, changeTrackPosition }, dispatch);
};
