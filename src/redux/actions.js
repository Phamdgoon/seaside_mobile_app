// actions.js
export const SET_USER_BUYER_INFO = "SET_USER_BUYER_INFO";
export const SET_USER_SELLER_INFO = "SET_USER_SELLER_INFO";

export const UserBuyerInfo = (
    userName,
    userPermissions,
    userAvatar,
    accountName
) => ({
    type: UserBuyerInfo,
    payload: { userName, userPermissions, userAvatar, accountName },
});
export const UserSellerInfo = (
    userName,
    userPermissions,
    userAvatar,
    accountName
) => ({
    type: UserSellerInfo,
    payload: { userName, userPermissions, userAvatar, accountName },
});
