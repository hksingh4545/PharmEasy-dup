
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const {height,width}=Dimensions.get("window")
export default function Carding() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
        <AntDesign name="medicinebox" size={24} color="black" />
        <Text style={styles.text}>{`Order Medicines`}</Text>
        <Text style={{...styles.text,color:"red"}}>{`Flat 5%`}</Text>
        
        </View>
        <View style={styles.box}>
        <AntDesign name="medicinebox" size={24} color="black" />
        <Text style={styles.text}>{`Heathcare Products`}</Text>
        <Text style={{...styles.text,color:"red"}}>{`Upto 60% OFF`}</Text>
        </View>
        <View style={styles.box}>
        <AntDesign name="medicinebox" size={24} color="black" />
        <Text style={styles.text}>{`Lab Tests`}</Text>
        <Text style={{...styles.text,color:"red"}}>{`Upto 70%`}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:height/5+10,
    width:width,
    flexWrap: 'wrap',
    justifyContent:"space-evenly"
  },
  box:{
    
    height:height/6+5,
    width:width/4+15,
    backgroundColor:"white",
    margin:15,
    marginLeft:10,
    marginRight:10,
    resizeMode:"stretch",
    borderRadius:5,
    padding:20,
    shadowColor:"black",
    justifyContent:"space-evenly",
  },
  text:{
      fontWeight:"bold",
      fontSize:15,

  }
});
