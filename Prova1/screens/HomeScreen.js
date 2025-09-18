import { View, Text, Button } from 'react-native';

const NOME = 'Igor Takagui Reis';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:16 }}>
      <Text style={{ fontSize:20, fontWeight:'bold', marginBottom:16 }}>{NOME}</Text>

      <View style={{ alignSelf:'stretch', marginBottom:8 }}>
        <Button title="Imagem da Internet" onPress={()=>navigation.navigate('Imagem da Internet')} />
      </View>
      <View style={{ alignSelf:'stretch', marginBottom:8 }}>
        <Button title="Imagem Local" onPress={()=>navigation.navigate('Imagem Local')} />
      </View>
      <View style={{ alignSelf:'stretch' }}>
        <Button title="Ícones" onPress={()=>navigation.navigate('Ícones')} />
      </View>
    </View>
  );
}
