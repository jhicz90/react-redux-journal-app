// {
//     uid: 'asdaa54sd1245da61s6',
//     name:'Jose hans'
// }

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state
    }
}
