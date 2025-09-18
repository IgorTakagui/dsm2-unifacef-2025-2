import { View, Image, Button } from 'react-native';

const URL = 'https://picsum.photos/id/237/800/450';

export default function NetImageScreen({ navigation }) {
  return (
    <View style={{ flex:1, backgroundColor:'#eef2ff', justifyContent:'center', alignItems:'center', padding:16 }}>
      <View style={{ width:'90%', maxWidth:900 }}>
        <Image source={{ uri: URL }} style={{ width:'100%', aspectRatio:16/9 }} resizeMode="contain" />
      </View>
      <View style={{ marginTop:20 }}>
        <Button title="Voltar" onPress={()=>navigation.navigate('Início')} />
      </View>
    </View>
  );
}
