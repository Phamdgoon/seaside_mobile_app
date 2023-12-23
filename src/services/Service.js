import axios from "axios";

const handleLoginService = async (email, password) => {
  return await axios.post("http://192.168.1.99:8085/login", {
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
  return await axios.post("http://192.168.1.99:8085/register-buyer", {
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
  return await axios.post("http://192.168.1.99:8085/register-seller", {
    email,
    username,
    password,
    phone_number,
    name_shop,
  });
};

const handleGetProducts = async () => {
  const data = await axios.get("http://192.168.1.99:8085/get-products");
  return data;
};

const handleGetCategoryService = async () => {
  const data = await axios.get("http://192.168.1.99:8085/get-categories");

  return data;
};

const handleAddNewCategory = async (name, idParent, userName) => {
  const res = await axios.post(
    "http://192.168.1.99:8085/add-new-category-child",
    {
      nameCategoryChild: name,
      idCategory: idParent,
      userName,
    }
  );

  return res;
};

const handleCreateNewProduct = async (data) => {
  const res = await axios.post(
    "http://192.168.1.99:8085/create-new-product",
    data
  );

  return res;
};

const handleBuyerOrder = async (data) => {
  return await axios.post("http://192.168.1.99:8085/buyer-order", data);
};

const handleGetAllOrders = async (userName) => {
  const username = userName;
  const res = await axios.post("http://192.168.1.99:8085/get-orders", {
    username,
  });
  return res;
};

const handleConfirmOrder = async (id) => {
  const res = await axios.post("http://192.168.1.99:8085/confirm-order", {
    id,
  });
  return res;
};

export default handleLoginService;
export {
  handleRegisterBuyerService,
  handleRegisterSellerService,
  handleGetProducts,
  handleGetCategoryService,
  handleAddNewCategory,
  handleCreateNewProduct,
  handleBuyerOrder,
  handleGetAllOrders,
  handleConfirmOrder,
};
