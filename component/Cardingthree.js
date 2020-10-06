
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';

const {height,width}=Dimensions.get("window")

const data=['https://d314ueg0lpx3nd.cloudfront.net/carousel_item/64a56254095-Featured-banner_covid-essentials.png?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/93092a81f8d-Featured-banner_Digine.jpg?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/d1338e81b78-Web_featured-brand_Depura.png?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/96a134910cf-Featured-banner_Charak.jpg?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/674bf6c19e6-Featured-banner_Seacod.jpg?dim=146x0&dpr=1&q=80',
            'https://d314ueg0lpx3nd.cloudfront.net/carousel_item/e2413b4b989-Volini.jpg?dim=146x0&dpr=1&q=80']
export default function Cardingthree() {
  return (
    // <ScrollView horizontal style={{flex:1}}>
    <View style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={styles.text}>Top Categories</Text>
        <Text style={{...styles.text,color:"#10857f"}}>View All</Text>
        </View>
        <View style={{flex:1,margin:10}}>
                <View style={{flexDirection:"row",}}>
                <Image
                style={{height:width/2-20,width:width/2-20,
                borderRadius:10,resizeMode:"cover"}}
                
                source={{uri:'https://d314ueg0lpx3nd.cloudfront.net/homepage_top_categories_images/4d4dd7a2a89-Home-Care.png'}}/>
                <Image
                style={{height:width/2-20,width:width/2-20,marginLeft:0,
                marginRight:15,
                borderRadius:10,resizeMode:"cover"}}
                
                source={{uri:'https://d314ueg0lpx3nd.cloudfront.net/homepage_top_categories_images/878e1e2c238-C-compressed.jpg'}}/>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <Image
                style={{height:width/2-20,width:width/2-20,marginLeft:0,
                marginRight:15,
                borderRadius:10,resizeMode:"cover"}}
                
                source={{uri:'https://d314ueg0lpx3nd.cloudfront.net/homepage_top_categories_images/ebaf9f98939-Nutrition-and-Fitness-Supplements.png'}}/>
                <Image
                style={{height:width/2-20,width:width/2-20,marginLeft:0,
                marginRight:5,
                borderRadius:10,resizeMode:"cover"}}
                
                source={{uri:'https://d314ueg0lpx3nd.cloudfront.net/homepage_top_categories_images/7ee88f078db-Diabetes.png'}}/>
                </View>
                    
                
        </View>
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:height/2+150,
    width:width,   
    marginTop:10 
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
      margin:10
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
