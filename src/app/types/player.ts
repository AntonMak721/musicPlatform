import {ITrack} from "@/app/types/track";

export interface PlayerState{
    active: null| ITrack;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
}
export enum PlayerAction{
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_VOLUME = 'SET_VOLUME',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_PAUSE = 'SET_PAUSE',
}
interface PlayAction{
    type: PlayerAction.PLAY;
}
interface PauseAction{
    type: PlayerAction.PAUSE;
}
interface SetVolumeAction{
    type: PlayerAction.SET_VOLUME;
    payload: number;
}
interface SetDurationAction{
    type: PlayerAction.SET_DURATION;
    payload: number;
}
interface SetCurrentTimeAction{
    type: PlayerAction.SET_CURRENT_TIME;
    payload: number;
}
interface SetActiveAction{
    type: PlayerAction.SET_ACTIVE;
    payload: ITrack;
}
interface SetPauseAction{
    type: PlayerAction.SET_PAUSE;
    payload: boolean;
}
export type PlayerActions =
    PlayAction
    | PauseAction
    | SetVolumeAction
    | SetDurationAction
    | SetCurrentTimeAction
    | SetActiveAction
    | SetPauseAction;