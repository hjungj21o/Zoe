export const RECEIVE_SELECTED_DAY = "RECEIVE_SELECTED_DAY";

export const receiveSelectedDay = (day) => {
    return {
        type: RECEIVE_SELECTED_DAY,
        day
    }
}