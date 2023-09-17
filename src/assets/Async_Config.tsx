import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetData = async (key: any) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage", error);
      return null;
    }
  };
  export const RemoveData = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from AsyncStorage", error);
    }
  };
export const SaveData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data to AsyncStorage", error);
  }
};

export const ClearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Error clearing AsyncStorage", error);
  }
};
