import { StyleSheet, StatusBar} from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 20,
      marginHorizontal: 20,
      paddingTop: Platform.OS === "ios" ? 50: StatusBar.currentHeight
  
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    input:{
      flex: 0.95,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      color:"#606c38",
      borderColor:"#606c38",
      
    },  
  });
  