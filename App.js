
import { Button, StyleSheet, Text,TextInput, View,SafeAreaView} from 'react-native';
import { styles } from "./styles" ;


export default function App() {
  return (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input} 
      placeholder="add new tasks"
      autoCapitalize='none'
      autoCorrect={false}
      cursorColor={"#dda15e"}
      selectionColor={"#fefae0"}
      ></TextInput>
      <Button title="Create" color="#606c38"></Button>
      </View>
    </View>
  </SafeAreaView>
  );
}

