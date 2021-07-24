import React from 'react'
import { View, Text,ScrollView} from 'react-native'
import style from './styles'
const Container=({children})=> {
  return (
    <ScrollView>
     <View style={style.wrapper}>
      {children}
     </View>
    </ScrollView>
  )
}

export default Container