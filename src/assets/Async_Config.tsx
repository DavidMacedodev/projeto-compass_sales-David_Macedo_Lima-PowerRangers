import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const fetchUserData = async (key: any) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error:any) {
    Alert.alert("Error retrieving data from AsyncStorage", error.message);
    return null;
  }
};

export const saveUserData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error:any) {
    Alert.alert("Error saving data to AsyncStorage", error);
  }
};
