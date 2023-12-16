import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faSearch,
    faClose,
    faBars,
    faCartShopping,
    faPlusCircle,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from "./homeSellerStyles";

const HomeSeller = ({ navigation, handleToggleDrawer }) => {
    const [search, setSearch] = useState("");

    const userInfoFromRedux = useSelector((state) => state);

    const { nameShop } = userInfoFromRedux;

    const handleAddProduct = () => {
        navigation.navigate("AddProduct");
    };

    const handleAddCategory = () => {
        navigation.navigate("AddCategory");
    };

    return (
        <View style={styles.container}>
            <View style={styles.top_section}>
                <TouchableOpacity
                    onPress={handleToggleDrawer}
                    style={styles.barsIconContainer}
                >
                    <FontAwesomeIcon style={styles.barsIcon} icon={faBars} />
                </TouchableOpacity>
                <View style={styles.search_container}>
                    <FontAwesomeIcon icon={faSearch} />
                    <TextInput
                        style={styles.search_input}
                        placeholder="Search..."
                        value={search}
                        onChangeText={setSearch}
                        // onFocus={() => setIsFocusSearch(true)}
                        // onBlur={() => setIsFocusSearch(false)}
                    />

                    <FontAwesomeIcon icon={faClose} />
                </View>
                <View>
                    <Text style={styles.nameShop}>Shop: {nameShop}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.category}>
                    <TouchableOpacity
                        onPress={handleAddProduct}
                        activeOpacity={0.7}
                        style={styles.cateItem}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <Text style={styles.cateItemTitle}>Add Product</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleAddCategory}
                        activeOpacity={0.7}
                        style={styles.cateItem}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <Text style={styles.cateItemTitle}>Add Category</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cateItem}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <Text style={styles.cateItemTitle}>Add Product</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cateItem}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <Text style={styles.cateItemTitle}>Add Product</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.newOrderContainer}>
                    <ScrollView>
                        <Text style={styles.orderTitle}>New Orders</Text>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>

                        <View style={styles.orderItem}>
                            <Image
                                style={styles.orderImage}
                                source={require("../../../assets/favicon.png")}
                            />
                            <View style={styles.orderNameCont}>
                                <Text style={styles.name}>Car Wax</Text>
                                <Text style={styles.desc}>#254845154</Text>
                            </View>

                            <View style={styles.btnRejectCont}>
                                <FontAwesomeIcon
                                    icon={faClose}
                                    color="#d43839"
                                    size={24}
                                />
                            </View>

                            <View style={styles.btnAcceptCont}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#28b25a"
                                    size={24}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default HomeSeller;
