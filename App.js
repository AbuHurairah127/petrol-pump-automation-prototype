import {Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {Button} from 'react-native';
const App = () => {
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'info',
      text2: 'This is some something 👋',
    });
  };
  return (
    <>
      <Text className="text-[#004e98] border-2 border-[#004e98] bg-[#0077b6]/20 text-3xl text-center tracking-widest my-8">
        App
      </Text>
      <Text className="mb-8 text-[#495057] border-2 border-[#495057] bg-[#dee2e6] text-3xl text-center tracking-widest">
        App
      </Text>
      <Text className="text-[#a4133c] border-2 border-[#a4133c] bg-[#ffccd5]/50 text-3xl text-center tracking-widest">
        App
      </Text>
      <Button title="Show toast" onPress={showToast} />
      <Toast />
    </>
  );
};
export default App;
