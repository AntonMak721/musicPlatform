import {PlayerAction, PlayerState} from "@/app/types/player";

const initialState: PlayerState= {
    currentTime: 0,
    pause: true,
    duration: 0,
    active:  null,
    volume:  0,
};
export const playerReducer = (state = initialState , action: PlayerAction): PlayerState => {
    switch (action.type) {
        case PlayerAction.PAUSE:
            return {...state, pause: true}
        case PlayerAction.PLAY:
            return {...state, pause: false}
        case PlayerAction.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        case PlayerAction.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerAction.SET_VOLUME:
            return {...state, volume: action.payload}
        case PlayerAction.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        default:
            return state;
    }
}