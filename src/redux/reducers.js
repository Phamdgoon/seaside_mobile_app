import { SET_USER_BUYER_INFO } from "./actions";

const initialState = {
    userName: "",
    userPermissions: [],
    userAvatar: "",
    accountName: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_BUYER_INFO:
            return {
                ...state,
                userName: action.payload.userName,
                userPermissions: action.payload.userPermissions,
                userAvatar: action.payload.userAvatar,
                accountName: action.payload.accountName,
            };
        default:
            return state;
    }
};

export default rootReducer;
