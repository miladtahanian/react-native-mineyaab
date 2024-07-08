import { SafeAreaView } from 'react-native-safe-area-context'

import { Text, View } from '@gluestack-ui/themed'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { Image } from 'react-native'
import HomeButton from '../../components/HomeButton'

export default function HomeScreen() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  return (
    <SafeAreaView>
      <View h={'100%'} alignItems="center" justifyContent="center">
        <View alignItems="center">
          <Image
            source={require('../../../assets/img/bomb.png')}
            alt="bomb"
            style={{
              width: 73,
              height: 98,
            }}
          />
          <Text
            color="#FFF"
            fontFamily="Cherry"
            fontSize={32}
            lineHeight={32}
            mt={10}
          >
            مینیاب
          </Text>
        </View>
        <View
          w={'$5/6'}
          alignItems="center"
          justifyContent="space-between"
          mt={'$16'}
          gap={20}
        >
          <HomeButton
            label="شروع بازی"
            background="#48319D"
            onPress={() => navigate('GAMESCREEN')}
          />
          <HomeButton
            label="سطح بازی"
            background="#319D76"
            type="DIFICULTY"
          />
        </View>
        <Text style={{fontSize:8,marginTop:'10%'}} >طراحی و توسعه:‌ میلاد طحانیان</Text>
      </View>
    </SafeAreaView>
  )
}
