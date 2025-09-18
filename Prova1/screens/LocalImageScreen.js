import { View, Image } from 'react-native';
import localImg from '../assets/local.png';

export default function LocalImageScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' }}>
      <Image source={localImg} style={{ width:'80%', height:'60%' }} resizeMode="contain" />
    </View>
  );
}
