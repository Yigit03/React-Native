import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const PostDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="gray" />
        </TouchableOpacity>
          <View>
            <Image source={require('../assets/Digitus.webp')} style={styles.logo} />
          </View>
        </View>
        <View style={styles.body}>
            <View style={styles.ImageContainer}>
                <Image source={require('../assets/container.webp')} style={styles.Image}></Image>
            </View>
            <ScrollView style={styles.detail}>
                <View style={styles.baslikcontainer}><Text style={styles.baslik}>Enim ad minim </Text></View>
                <TouchableOpacity style={styles.button}><Text>Duis aute</Text></TouchableOpacity>
                <Text >     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vel, doloremque nobis quibusdam tempora molestias est velit perferendis assumenda laborum facilis obcaecati, cupiditate sit? Cumque tenetur commodi nulla eos, quibusdam voluptates autem harum facilis optio, vero eligendi voluptate. Veritatis mollitia totam dolore doloribus omnis eveniet aliquam quaerat quas accusamus voluptas, quidem distinctio delectus nulla exercitationem assumenda quam sapiente. Expedita minus vero officia exercitationem sed quod dicta suscipit necessitatibus. Ab et ullam quam corporis porro dicta nihil nobis deleniti a aspernatur sequi modi, molestias ipsam nulla magni repudiandae sint voluptates omnis dignissimos, magnam ratione similique voluptas laborum? Provident nisi minima distinctio.</Text>
                <Text >     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illum vero facilis reiciendis velit sed fugiat illo blanditiis unde animi hic laborum quae nisi autem tempore voluptatem, sapiente quidem excepturi minus eos voluptatum nostrum iusto est accusantium. Suscipit vel numquam est, voluptas perspiciatis dolores vero tempora animi! Voluptatum, ullam assumenda.</Text>
            </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  body: {
    flex: 93,
    width: '100%',
    marginTop: -20,
  },
  header: {
    width: '100%',
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5, 
    zIndex: 2,
  },
  logo: {
    width: 120,
    height: 50,
  },
  ImageContainer: {

  },
  Image: {
    width: '100%',
    height: 300,
  },
  detail: {
    width: '100%',
    height: 'auto',
    marginTop: -20,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 50,
    backgroundColor: 'white',
    zIndex: 5,
  },
  goBack: {
    position: 'absolute',
    left: 10,
  },
  goBackText: {
    color: 'gray',
  },
  baslikcontainer: {

  },
  baslik: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15,
    marginTop: 15,
    color: '#167748',
    textAlignVertical: 'center', 
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginBottom: 15,
    width: 120,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDetail;
