import axios from "axios";

const handleLoginService = async (email, password) => {
    return await axios.post("http://192.168.1.12:8080/login", {
        email,
        password,
    });
};
const handleRegisterBuyerService = async (
    email,
    username,
    password,
    phone_number,
    account_name
) => {
    return await axios.post("http://192.168.1.12:8080/register-buyer", {
        email,
        username,
        password,
        phone_number,
        account_name,
    });
};
const handleRegisterSellerService = async (
    email,
    username,
    password,
    phone_number,
    name_shop
) => {
    return await axios.post("http://192.168.1.12:8080/register-seller", {
        email,
        username,
        password,
        phone_number,
        name_shop,
    });
};

export default handleLoginService;
export { handleRegisterBuyerService, handleRegisterSellerService };
