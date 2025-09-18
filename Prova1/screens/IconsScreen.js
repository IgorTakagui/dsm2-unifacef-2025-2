import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function IconsScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', padding:16 }}>
      <View style={{ flexDirection:'row', justifyContent:'space-between', gap:10 }}>
        <View style={{ flex:1, alignItems:'center', padding:12, backgroundColor:'#e9f6ff' }}>
          <Ionicons name="airplane" size={40} />
          <Text>Viagem</Text>
        </View>
        <View style={{ flex:1, alignItems:'center', padding:12, backgroundColor:'#fff3e6' }}>
          <MaterialIcons name="photo-camera" size={40} />
          <Text>Câmera</Text>
        </View>
        <View style={{ flex:1, alignItems:'center', padding:12, backgroundColor:'#eefbea' }}>
          <FontAwesome5 name="basketball-ball" size={36} />
          <Text>Esporte</Text>
        </View>
      </View>
    </View>
  );
}
