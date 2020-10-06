
import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView} from 'react-native';

const {height,width}=Dimensions.get("window")
const images=['https://d314ueg0lpx3nd.cloudfront.net/banner/c8ee95e5bd2-18.jpg?dim=250x250&dpr=1&q=80',
'https://d314ueg0lpx3nd.cloudfront.net/banner/33c40cf812b-SBI.jpg?dim=250x250&dpr=1&q=80',
'https://d314ueg0lpx3nd.cloudfront.net/banner/565890e25e6-dwebless25.jpg?dim=250x250&dpr=1&q=80',
'https://d314ueg0lpx3nd.cloudfront.net/banner/3bb1e24adbe-Amazon.jpg?dim=250x250&dpr=1&q=80',
'https://d314ueg0lpx3nd.cloudfront.net/banner/5373875e97a-Myntra.jpg?dim=250x250&dpr=1&q=80',
'https://d314ueg0lpx3nd.cloudfront.net/banner/73d7f4462af-Paytm.jpg?dim=250x250&dpr=1&q=80',
'https://d314ueg0lpx3nd.cloudfront.net/banner/fedb2207b1e-ssdweb.jpg?dim=250x250&dpr=1&q=80']
export default function Slider() {
    const [active,setActive]=useState(0)
    change=({nativeEvent})=>{
        const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
        if(slide !== active){
            setActive(slide)
        }
        
    }
    
  return (
    <View style={styles.container}>
        <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={{height:250,width}}
        >
            {   
                images.map((image,index)=>(
                    <Image
                    key={index}
                    source={{uri:image}}
                    style={{height:250,width,resizeMode:"stretch"}}/>
                   
                ))
            }
         </ScrollView>
         <View style={{flexDirection:"row",position:"absolute",bottom:0,alignSelf:"center",margin:5}}>
             {
                 images.map((i,k)=>(
                     <Text key={k} style={k==active?{color:"grey",margin:3}:{color:"white",margin:3}}>⬤</Text>
                 ))
             }
             
         </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
