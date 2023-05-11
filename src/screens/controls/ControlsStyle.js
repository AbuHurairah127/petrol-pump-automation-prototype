import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
  },
  controls: {
    margin: 15,
    borderColor: '#1d3557',
    borderWidth: 1,
    flex: 1,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
  editorsContainer: {
    flex: 4,
  },
  editor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 5,
    borderColor: '#1d3557',
    borderWidth: 2,
  },
  editorText: {
    color: '#1d3557',
    fontSize: 20,
  },
  lowerButtonSection: {flex: 1, flexDirection: 'row', margin: 0},
  buttonsContainer: {
    flex: 3,
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#e63946',
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginVertical: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 2,
  },
});
