
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';

const {height,width}=Dimensions.get("window")

const data=[{id:1,text:""},{id:2,text:'https://d2y2l77dht9e8d.cloudfront.net/web-assets/dist/6e630ccf.png'},
            {id:3,text:'https://d2y2l77dht9e8d.cloudfront.net/web-assets/dist/c9bd8df2.png'},
            {id:4,text:'https://d2y2l77dht9e8d.cloudfront.net/web-assets/dist/748e0da8.png'},
            {id:5,text:'https://d2y2l77dht9e8d.cloudfront.net/web-assets/dist/aada0d0d.png'},
            {id:6,text:'https://d2y2l77dht9e8d.cloudfront.net/web-assets/dist/091811c4.png'}]
export default function Cardingone() {
  const rend=({item})=>(
    <View style={{flexDirection:"row",marginTop:10,justifyContent:"center",alignItems:"center"}}>
            
            {
            (item.id===1)
            ?
            <Image 
              style={{height:height/10,width:200,marginLeft:15,
                marginRight:15,
                marginTop:15,borderRadius:10,resizeMode:"center"}}
              source={require("../Image/card1.png")}/>
            :            
            <Image
            style={{height:height/10,width:height/10,marginLeft:0,
              marginRight:15,
              marginTop:5,borderRadius:10}}
            source={{uri:item.text}}/>
        }
            {/* <Text>{item.text}</Text> */}
    </View>
  )
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={{color:"#f0ba4f",fontSize:30,fontWeight:"bold",marginLeft:10}}>Plus</Text>
            <View>
            <Text style={{fontSize:12,color:"white"}}>{`Save upto 10% extra & enjoy Free delivery with PLUS
membership`}</Text>
            <Text style={{fontSize:12,color:"white"}}>{`Know more >`}</Text>
            </View>
        </View>


        {/* <ScrollView horizontal style={{flex:1}}> */}
        <View style={{flex:1,flexDirection:"row",marginTop:0,justifyContent:"space-evenly",alignItems:"center"}}>
        <FlatList
        
            
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={data}
            renderItem={(item)=>{
             return rend(item)
            }}
            keyExtractor={item=>item.id.toString()}
           />
            </View>
      
        {/* </ScrollView> */}
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:height/3,
    width:width,    
  },
  box:{
    
    height:height/9,
    backgroundColor:"#8573e1",
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    borderRadius:5,
    padding:20,
    shadowColor:"black",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  text:{
      fontWeight:"bold",
      fontSize:15,

  },
  box2:{
    
    height:height/6+5,
    width:width/4+15,
    backgroundColor:"white",
    margin:15,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    marginTop:15,
    resizeMode:"stretch",
    borderRadius:5,
    padding:20,
    shadowColor:"black",
    justifyContent:"space-evenly",
  },
});
