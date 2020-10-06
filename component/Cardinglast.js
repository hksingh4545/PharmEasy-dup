
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,FlatList} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Entypo,Ionicons} from '@expo/vector-icons'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const {height,width}=Dimensions.get("window")
export default function Cardinglast() {
  const data=[{id:1,text:"Need help",text2:"back-in-time"},
              {id:2,text:"My Refills",text2:"back-in-time"},
              {id:3,text:"Read Articles",text2:"back-in-time"},
              {id:4,text:"Dosage Reminder",text2:"back-in-time"}
              ]

  const boxy=({item})=>(
      <View style={styles.box}>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Entypo name={item.text2} size={24} color="green"  style={{marginRight:10}}/>
    <Text style={{color:"#4b4d4f",fontWeight:"bold",letterSpacing:0.5}}>{item.text}</Text>
        </View>
      </View>
    
  )
  return (
    <View style={styles.container}>
      <View style={styles.box}>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <Ionicons name="ios-call" size={24} color="green"  style={{marginRight:10}}/>
      <Text style={{color:"#4b4d4f",fontWeight:"bold",letterSpacing:0.5}}>Call to Order</Text>
          </View>
          <View style={{backgroundColor:"#0e8581",height:height/30,width:width/8,justifyContent:"center",alignItems:"center",borderRadius:15}}>
      <Text style={{color:"white",fontWeight:"bold",letterSpacing:1}}>Call</Text>
          </View>
        </View>
      <FlatList
      // horizontal
      // pagingEnabled={true}
      // showsHorizontalScrollIndicator={false}
      // legacyImplementation={false}
      data={data}
      renderItem={(item)=>{
        return boxy(item)
      }}
      keyExtractor={item=>item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:height/2+25,
    width:width,    
  },
  box:{
    
    height:height/12,
    backgroundColor:"white",
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    borderRadius:5,
    padding:20,
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.22,
    shadowRadius:2.22,
    elevation:3,
    justifyContent:"space-between",
    flexDirection:"row",
    width:width-30
  },
  text:{
      fontWeight:"bold",
      fontSize:15,

  }
});
