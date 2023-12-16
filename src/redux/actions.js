// actions.js
export const SET_USER_INFO = "SET_USER_INFO";
export const RESET_STATE = "RESET_STATE";

export const UserInfo = (
    userName,
    userPermissions,
    userAvatar,
    accountName,
    nameShop
) => ({
    type: SET_USER_INFO,
    payload: { userName, userPermissions, userAvatar, accountName, nameShop },
});

export const resetState = () => ({
    type: RESET_STATE,
});
