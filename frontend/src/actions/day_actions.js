export const RECEIVE_SELECTED_DAY = "RECEIVE_SELECTED_DAY";
export const CLEAR_SELECTED_DAY = "CLEAR_SELECTED_DAY"; 

export const receiveSelectedDay = (day) => {
    return {
        type: RECEIVE_SELECTED_DAY,
        day
    }
}

export const clearSelectedDay = () => {
    return {
        type: CLEAR_SELECTED_DAY 
    }
}