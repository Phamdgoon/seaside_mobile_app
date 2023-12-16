import { SET_USER_INFO, RESET_STATE } from "./actions";

const initialState = {
    userName: "",
    userPermissions: [],
    userAvatar: "",
    accountName: "",
    nameShop: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userName: action.payload.userName,
                userPermissions: action.payload.userPermissions,
                userAvatar: action.payload.userAvatar,
                accountName: action.payload.accountName,
                nameShop: action.payload.nameShop,
            };
        case RESET_STATE:
            return initialState;
        default:
            return state;
    }
};

export default rootReducer;
