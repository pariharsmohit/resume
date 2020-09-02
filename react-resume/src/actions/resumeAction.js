import { CONSTANTS } from './';

export const editObjective = (objective) => {
    return {
        type: CONSTANTS.EDIT_OBJECTIVE,
        payload: { objective }
    }
}

export const updateResume = (resume) => {
    return { 
        type: CONSTANTS.UPDATE_RESUME,
        payload: { resume }
    }
}