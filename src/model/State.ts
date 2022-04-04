import {atom} from "recoil";
import {IUser} from "./types/User";
import {IEvent} from "./types/IEvent";

export const userState = atom({
    key: "user",
    default: {} as IUser,
})

export const eventState = atom({
    key: "event",
    default: [] as IEvent[],
})
