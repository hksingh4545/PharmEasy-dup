import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{useState,} from 'react';
import { StyleSheet, Text, View ,Dimensions,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Searchbar ,Card} from 'react-native-paper';

const {height,width}=Dimensions.get('window')
export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View >
          <View style={{flexDirection:"row",marginTop:35,marginLeft:8}}>
          <Image source={{uri:'https://photos.angel.co/startups/i/663909-44baaca1f6a9f95adb5ec9e49e610d63-medium_jpg.jpg?buster=1428584417'}}
          style={{height:40,width:40}}
          />
          <Text style={styles.textstyle}>PharmEasy</Text>
          </View>
          <Text style={{color:"white",marginLeft:10,fontSize:13}}> Deliver To 752118 Puri </Text>
        </View>
        
        <AntDesign name="shoppingcart" size={24} color="white" style={{marginTop:43,marginRight:10}} />
      </View>
      <View>
      <Searchbar
        placeholder="Search medicines/healthcare products"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.textinp}
       />
        {/* <TextInput style={styles.textinp}>
        <AntDesign name="search1" size={20} color="black" />
        <Text style={{color}}>Search medicines/healthcare products</Text>
        </TextInput> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ada7',
    height:height/5,
    width:width,
    justifyContent:"space-between"
  },
  textstyle:{
    marginTop:8,
    fontSize:23,
    fontWeight:"bold",
    
    color:"white",
    marginLeft:0

  },
  textinp:{
    backgroundColor:"white",
    margin:15,
    borderRadius:6,
    height:40,
    padding:13,
    fontSize:5,
    

  }
});
