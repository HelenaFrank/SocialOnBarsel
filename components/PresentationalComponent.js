import { Text, View } from 'react-native'
import React, { Component } from 'react'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PresentationalComponent