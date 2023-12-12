import axios from "axios";

const handleLoginService = async (email, password) => {
  return await axios.post("http://192.168.1.99:8088/login", {
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
  return await axios.post("http://192.168.1.99:8088/register-buyer", {
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
  return await axios.post("http://192.168.1.99:8088/register-seller", {
    email,
    username,
    password,
    phone_number,
    name_shop,
  });
};

const handleGetProducts = async () => {
  const data = await axios.get("http://192.168.1.99:8088/get-products");
  return data;
};

const handleGetCategoryService = async () => {
  const data = await axios.get("http://192.168.1.99:8088/get-categories");

  return data;
};

export default handleLoginService;
export {
  handleRegisterBuyerService,
  handleRegisterSellerService,
  handleGetProducts,
  handleGetCategoryService,
};
