import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./ProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../redux/actions";
const ProfileBuyer = ({ navigation }) => {
    const dispatch = useDispatch();
    const userInfoFromRedux = useSelector((state) => state);

    const { accountName, userAvatar } = userInfoFromRedux;
    const handleLogout = () => {
        dispatch(resetState());
        navigation.navigate("LoginBuyer");
    };

    return (
        <View style={styles.container}>
            {userAvatar ? (
                <Image
                    source={{ uri: userAvatar }}
                    style={{
                        width: 100,
                        height: 100,
                        marginTop: 100,
                        borderRadius: 50,
                    }}
                />
            ) : (
                <Text style={styles.noImageText}>
                    User hasn't uploaded an image.
                </Text>
            )}
            <Text style={styles.accountName}>Account Name: {accountName}</Text>
            <TouchableOpacity
                onPress={handleLogout}
                activeOpacity={0.5}
                style={styles.itemContainer}
            >
                <Text style={styles.itemTitle}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileBuyer;
