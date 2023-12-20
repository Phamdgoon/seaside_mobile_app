import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./OrderProductStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleRight,
    faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const OrderProduct = ({ navigation }) => {
    const addressRedux = useSelector((state) => state);

    const { phoneNumber, accountName, address } = addressRedux;
    const selectedProduct = useSelector((state) => state.selectedProduct);
    const product = selectedProduct;

    // Chuyển đổi Price
    const priceAsString = product.price;
    const priceAsNumber = parseFloat(priceAsString);
    const updatedPrice = isNaN(priceAsNumber) ? 0 : priceAsNumber + 15000;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.address}>
                    <View style={styles.addressLeft}>
                        <FontAwesomeIcon icon={faLocation} />
                    </View>
                    <View style={styles.addressRight}>
                        <Text style={styles.addressTitle}>
                            Địa chỉ nhận hàng
                        </Text>
                    </View>
                </View>
                <View style={styles.addressContent}>
                    <View style={styles.info}>
                        <Text style={styles.infoName}>{accountName}</Text>
                        <Text style={styles.infoPhone}>{phoneNumber}</Text>
                    </View>
                    <Text style={styles.addressText}>{address}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.productContainer}>
                    <View style={styles.productLeft}>
                        <Image
                            style={styles.img}
                            source={{ uri: product.url_image }}
                        />
                    </View>
                    <View style={styles.productRight}>
                        <Text style={styles.productName}>
                            {product.name_product}
                        </Text>
                        <Text style={styles.productPrice}>
                            {product.price} đ
                        </Text>
                    </View>
                </View>
                <View style={styles.deliveryProduct}>
                    <Text style={styles.title}>
                        Phương thức vận chuyển (Nhấn để chọn)
                    </Text>
                    <View style={styles.lineDeli}></View>
                    <View style={styles.methodDeli}>
                        <Text style={styles.textMethod}>Nhanh</Text>
                        <Text style={styles.textPrice}>15.000 đ</Text>
                    </View>
                    <Text style={styles.dayReceive}>
                        Nhận hàng trong 3 ngày kể từ ngày đặt
                    </Text>
                    <Text style={styles.textDetail}>
                        Chưa áp dụng mã miễn phí vận chuyển
                    </Text>
                </View>
                <View style={styles.countPriceProduct}>
                    <Text style={styles.countTitle}>
                        Tổng số tiền (1 sản phẩm)
                    </Text>
                    <Text style={styles.countPrice}>{product.price} đ</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.paymentMethod}>
                    <Text style={styles.paymentTitle}>
                        Phương thức thanh toán
                    </Text>
                    <View style={styles.paymentDetail}>
                        <Text style={{ fontSize: 15 }}>
                            Thanh toán khi nhận hàng
                        </Text>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.paymentProduct}>
                    <Text style={styles.paymentProductTitle}>
                        Chi tiết thanh toán
                    </Text>
                    <View style={styles.paymentProductDetail}>
                        <Text style={styles.paymentProductDetailText}>
                            Tổng tiền hàng
                        </Text>
                        <Text style={styles.paymentProductDetailText}>
                            {product.price} đ
                        </Text>
                    </View>
                    <View style={styles.paymentProductDetail}>
                        <Text style={styles.paymentProductDetailText}>
                            Tổng tiền phí vận chuyển
                        </Text>
                        <Text style={styles.paymentProductDetailText}>
                            15.000 đ
                        </Text>
                    </View>
                    <View style={styles.countPayment}>
                        <Text style={{ fontSize: 20 }}>Tổng thanh toán</Text>
                        <Text style={{ color: "tomato", fontSize: 17 }}>
                            {updatedPrice.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <Text style={styles.rules}>
                    Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                    <Text style={{ color: "#479b92" }}>Điều khoản Seaside</Text>
                </Text>
                <View style={styles.line}></View>
                <View style={styles.paymentButton}>
                    <View style={styles.paymentButtonTitle}>
                        <Text style={styles.paymentText}>Tổng thanh toán</Text>
                        <Text style={styles.paymentPriceButton}>
                            {updatedPrice.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btnPayment}
                    >
                        <Text style={styles.btnTextPayment}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default OrderProduct;
