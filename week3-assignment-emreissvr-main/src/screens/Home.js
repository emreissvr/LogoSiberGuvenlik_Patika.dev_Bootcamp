import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet,Image, View,Text,TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../firebase-config';


const Home = () => {
  
    const navigation = useNavigation();

    // Bu page'de ise 3 tane butondan biri olan "sign out" butonunu çalıştıran methoddur.
    const signOutHandler = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }

    // bu method ise 3 butondan biri olan "posts" butonunun çalışmasını sağlayan methoddur.
    // bu butona tıklandığında jsonPlaceHolder web sitesindeki API üzerinden aldığım "posts" adlı json verilenin title kısmını çeken 
    // list page'e giderim
    const postHandler = () => {
        navigation.navigate("Post")
    }
      

    // diğer buton ise aynı API üzerinden bir başka json data döndüren "users" endpoint'den alınan verilerdeki "email" verisini çekip listeeyen 
    // page'e yönlendirir. 
  return (
    <View style={styles.container}>
        <Ionicons name='ios-person-circle-outline' style={styles.icon} />
        <Text style={styles.iconText}>Welcome  {auth.currentUser?.email}</Text> 
        <TouchableOpacity onPress={signOutHandler}>
            <Text style={styles.buttonText1}>Sign Out</Text>
        </TouchableOpacity>
        

        <View style={styles.button}>
            <TouchableOpacity onPress={postHandler}>
                <Text style={styles.buttonText2}>Posts</Text>
             </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('User', { screen: 'User' }) }>
                <Text style={styles.buttonText3}>Users</Text>
            </TouchableOpacity>
        </View>

    </View>

  )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#CCD1E4",
        paddingTop: 20,
        justifyContent:'center',
        alignItems: 'center'
    },

    icon:{
        color:"#FE7E6D",
        fontSize: 300,
    },

    iconText:{
        fontSize: 30,
        color: "#2F3A8F",
        fontWeight: "bold",
    },

    button:{
        flex:1,
        flexDirection:"row",
        
    },

    buttonText1:{
        
        textAlign:'center',
        backgroundColor: "#FEECE9",
        padding: 10,
        width: 170,
        marginTop: 50,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        color: "#2F3A8F",
        fontSize: 25,
        fontWeight: "700"
         
    },

    buttonText2:{
        
        textAlign:'center',
        backgroundColor: "#FEECE9",
        padding: 10,
        width: 170,
        marginTop: 50,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        color: "#2F3A8F",
        fontSize: 25,
        fontWeight: "700"
         
    },

    buttonText3:{
        
        textAlign:'center',
        backgroundColor: "#FEECE9",
        padding: 10,
        width: 170,
        marginLeft:50,
        marginTop: 50,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        color: "#2F3A8F",
        fontSize: 25,
        fontWeight: "700"
         
    }
})



export default Home;