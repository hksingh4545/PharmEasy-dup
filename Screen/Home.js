
import { StatusBar } from 'expo-status-bar';
import React,{useRef} from 'react';
import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import Header from '../component/Header'
import Slider from '../component/Slider'
import Carding from '../component/Carding'
import Cardingone from '../component/Cardingone'
import Cardinglast from '../component/Cardinglast'
import Cardingtwo from '../component/Cardingtwo'
import Cardingthree from '../component/Cardingthree'
import Cardingfour from '../component/Cardingfour'
import {useScrollToTop} from '@react-navigation/native'
const {height,width}=Dimensions.get("window")
export default function Home() {
    const scrollref=useRef()
  return (
    <View style={styles.container}>
            <Header/>
            
            <ScrollView ref={scrollref}>   
            <Slider/>
            <Carding/>
            <Cardingone/>
            
            <Cardingtwo/>
            <Cardingthree/>
            <Cardingfour/>
            <Cardinglast/>
        </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f2f2f2"
  },
  top:
  {justifyContent:"center",
  alignItems:"center",
  height:30,width:30,
  backgroundColor:"blue",
  elevation:1,
  borderRadius:15,
  zIndex:1,
  bottom:height/2,
  top:height-100,
  left:width-40,
  position:"absolute"}
});
