import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import * as services from "../../services/Service";

import styles from "./AddProductStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const AddProduct = ({ navigation }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [valueCategory, setValueCategory] = useState(null);
  const [itemsCategory, setItemsCategory] = useState([]);

  const [openCategoryChild, setOpenCategoryChild] = useState(false);
  const [valueCategoryChild, setValueCategoryChild] = useState(null);
  const [itemsCategoryChild, setItemsCategoryChild] = useState([]);

  // get category
  useEffect(() => {
    const getCategory = async () => {
      const res = await services.handleGetCategoryService();

      if (res && res.data && res.data.DT) {
        let data = res.data.DT;

        const newData = [];
        data.forEach((cate) => {
          newData.push({
            id: cate.id,
            label: cate.name_category,
            value: cate.name_category,
            child: cate.name_category_sub,
          });
        });

        setItemsCategory(newData);
      }
    };

    getCategory();
  }, []);

  useLayoutEffect(() => {
    if (!valueCategory) return;

    const cateItemSelected = itemsCategory.find(
      (i) => i.value === valueCategory
    );

    if (cateItemSelected.child.length > 0) {
      const newCateChildArr = cateItemSelected.child.map((item, index) => {
        return { id: index, label: item, value: item };
      });

      setItemsCategoryChild(newCateChildArr);
    } else {
      setItemsCategoryChild([]);
    }
  }, [valueCategory]);

  const handleBackToHomeSeller = () => {
    navigation.navigate("HomeSeller");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>ADD PRODUCT</Text>
        <TouchableOpacity
          onPress={handleBackToHomeSeller}
          style={styles.btnBack}
          activeOpacity={0.7}
        >
          <FontAwesomeIcon size={28} color="#fff" icon={faLeftLong} />
        </TouchableOpacity>
      </View>
      <View style={styles.addContainer}>
        <View style={styles.cateContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.typeTitle}>Product Type</Text>
            <DropDownPicker
              style={styles.drop1}
              open={openCategory}
              value={valueCategory}
              items={itemsCategory}
              placeholder="Selected Category Type"
              setOpen={setOpenCategory}
              setValue={setValueCategory}
              setItems={setItemsCategory}
            />
          </View>
          <View style={styles.itemContainer}>
            {valueCategory !== null && itemsCategoryChild.length > 0 && (
              <View>
                <Text style={styles.typeTitle}>Category</Text>
                <DropDownPicker
                  open={openCategoryChild}
                  value={valueCategoryChild}
                  items={itemsCategoryChild}
                  placeholder="Selected Category Type"
                  setOpen={setOpenCategoryChild}
                  setValue={setValueCategoryChild}
                  setItems={setItemsCategoryChild}
                />
              </View>
            )}

            {valueCategory !== null && itemsCategoryChild.length === 0 && (
              <>
                <Text style={styles.colorRed}>
                  Chú ý: Loại sản phẩm này chưa có danh mục. Thêm danh mục trước
                  khi tạo mới sản phẩm.
                </Text>
              </>
            )}
          </View>
        </View>

        <Text style={styles.typeTitle}>Product Infomation</Text>
        <TextInput style={styles.textInput} placeholder="Name product..." />

        <Text style={styles.typeTitle}>Product description</Text>
        <TextInput style={styles.textInput} placeholder="Name description..." />

        <Text style={styles.typeTitle}>Color</Text>
        <View style={styles.colorContainer}>
          <TextInput placeholder="Color type..." />
          <TextInput placeholder="Color type..." />
          <TextInput />
        </View>
      </View>
    </View>
  );
};

export default AddProduct;
