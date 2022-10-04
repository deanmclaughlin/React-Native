import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ReceiveInput(props) {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <TextInput style={styles.textInput} onChangeText={props.callBack} placeholder={props.placeholder} value={props.value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "50vw"
  },
  textInput: {
    borderRadius: "5px",
    border: "2px solid black",
    textAlign: "center",
    width: "20em"
  }
});
