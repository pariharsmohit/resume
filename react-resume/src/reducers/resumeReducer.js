import resume from './resume';
import { CONSTANTS } from '../actions/index';

const resumeReducer = (state = {}, action) => {
    switch(action.type) {
        case CONSTANTS.EDIT_OBJECTIVE:
            const newResume = {
                
            }
            return newResume;
        case CONSTANTS.UPDATE_RESUME:
            return action.payload.resume;
        default:
            return state;
    }
}

export default resumeReducer;