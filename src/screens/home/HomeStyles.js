import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
  },
  upperSectionContainer: {
    flex: 4,
    padding: 12,
  },
  upperSection: {
    backgroundColor: '#1d3557',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 15,
    paddingHorizontal: 12,
  },
  upperSectionValues: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 12,
  },
  upperSectionText: {color: '#f1faee', fontSize: 28, letterSpacing: 3},
  lowerSectionContainer: {
    flex: 5,
    padding: 12,
  },
  lowerSection: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderColor: '#1d3557',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
  },
  lowerSectionText: {color: '#e63946', fontSize: 18},
  footer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
