import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    paddingTop: 49,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    padding: 18,
    marginHorizontal: 15,
    fontSize: 13,
    borderColor: 'gainsboro',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
  },
  charactersContainer: {
    alignItems: 'center',
  },
});

export default styles;
