
import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView} from 'react-native';

const {height,width}=Dimensions.get("window")
const images=['https://detwxg7gzm61n.cloudfront.net/2020/09/28183228/BLOG-IMAGE.jpg?dim=230x230&dpr=1&q=80',
'https://detwxg7gzm61n.cloudfront.net/2020/09/28180525/BLOG1.jpg?dim=230x230&dpr=1&q=80',
'https://detwxg7gzm61n.cloudfront.net/2020/09/22184435/BLOG-NEW-SIZE-1.jpg?dim=230x230&dpr=1&q=80',
'https://detwxg7gzm61n.cloudfront.net/2020/09/22171839/BLOG-NEW-SIZE.jpg?dim=230x230&dpr=1&q=80',
'https://detwxg7gzm61n.cloudfront.net/2020/09/18151542/blog-new-size-below-50.jpg?dim=230x230&dpr=1&q=80',
'https://detwxg7gzm61n.cloudfront.net/2020/09/28191056/People-practicing-breathing-exercise.jpg?dim=230x230&dpr=1&q=80',
'https://detwxg7gzm61n.cloudfront.net/2020/09/17142942/blog-new-size-04.jpg?dim=230x230&dpr=1&q=80']



export default function Cardingfour() {
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
