/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import { useNavigation } from '@react-navigation/native';
import Tabs from './Tabs.tsx';

const Stack = createNativeStackNavigator();
function Info3(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.logoContainer}>
      <Image
          source={require('../assets/Digitus.webp')}
          style={styles.logo}
        />
      </View>


      <View style={styles.ImageContainer}>
      <Image
          source={require('../assets/thirthinf.webp')}
          style={styles.image}
        />
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.header}>
            Enim ad minim
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam eius in maxime ullam natus tempora libero, voluptate cum omnis?
        </Text>
        <View style={styles.dots}>
          <View style={styles.dot}/>
          <View style={styles.dot}/>
          <View style={styles.selected}/>
        </View>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.butonText}>
            Giriş
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:100,
    backgroundColor:'white',
    fontFamily:'',
  },
  logoContainer:{
    flex:20,
    
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    
  },
  ImageContainer:{
    flex:35,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:'90%',
    height:300,
  },
  textContainer:{
    flex:30,
    
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    color:'#138255',
    
  },
  text:{
    fontSize:20,
    textAlign:'center',
  },
  buttonContainer:{
    flex:15,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    width:'70%',
    height:'45%',
    borderRadius:50,
    backgroundColor:'#65b48c',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  butonText:{
    color:'white',
    fontWeight:'500',
    fontSize:25,
  },
  dots:{
    width:70,
    height:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  selected:{
    width:12,
    height:12,
    backgroundColor:'gray',
    borderRadius:50,
  },
  dot:{
    width:12,
    height:12,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50,
  },
});

export default Info3;