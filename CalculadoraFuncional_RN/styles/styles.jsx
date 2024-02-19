import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#CDB4DB', 
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 20, 
},
  screenContainer: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    flex: 1, 
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  screenText: {
    fontSize: 30,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#CDB4DB", 
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF", 
  },
  textInput: {
    fontSize: 50,
  },
});

