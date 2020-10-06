
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';

const {height,width}=Dimensions.get("window")

const data=[{id:1,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/64a56254095-Featured-banner_covid-essentials.png?dim=146x0&dpr=1&q=80'},
            {id:2,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1&q=80'},
            {id:3,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/93092a81f8d-Featured-banner_Digine.jpg?dim=146x0&dpr=1&q=80'},
            {id:4,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1&q=80'},
            {id:5,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1&q=80'},
            {id:6,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/d1338e81b78-Web_featured-brand_Depura.png?dim=146x0&dpr=1&q=80'},
            {id:7,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/96a134910cf-Featured-banner_Charak.jpg?dim=146x0&dpr=1&q=80'},
            {id:8,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/674bf6c19e6-Featured-banner_Seacod.jpg?dim=146x0&dpr=1&q=80'},
            {id:9,text:'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/e2413b4b989-Volini.jpg?dim=146x0&dpr=1&q=80'}]
export default function Cardingtwo() {
  const rend=({item})=>(
    <View style={{flexDirection:"row",marginTop:10,justifyContent:"center",alignItems:"center",
        }}>

            <Image
            style={{height:height/9,width:height/9,marginLeft:0,
              marginRight:15,
              marginTop:5,borderRadius:10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              }}
            source={{uri:item.text}}/>
            {/* <Text>{item.text}</Text> */}
    </View>
  )
  return (
    // <ScrollView horizontal style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.text}>Featured Brands</Text>
        <View style={styles.flat}>
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
        
        
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:height/6,
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
      margin:10,
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
  flat:
  {flex:1,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",
  marginLeft:10,
  
}
});
