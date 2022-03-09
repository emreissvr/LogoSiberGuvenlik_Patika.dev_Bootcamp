
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';



const ResetPassword = () => {
  
  const [userEmail, setUserEmail] = useState('');
  

  const navigation = useNavigation()

  // backenddeki yani veritabanındaki kişinin maili ile eşleşip eşleşmediğini sor 
  // kullanıcı bu ekranda mailini girdikten sonra login sayfasına yönlendirilir 
  // normalde maili girdikten sonra backend tarafında böyle bir mail varmı var ise yeni şifre belirleme ekranına yönlendirme şeklinde
  // bir page daha oluşturacaktım fakat zamanım yetmedi ödev son teslim tarihine yetiştirmek için böyle yaptım son teslim tarihinden sonra 
  // bu işlemi gerçekleştireceğim.

  const resetPasswordHandler = () => {
  
    navigation.navigate("Login");

  }


  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.column}>
          <Image source={require('../assets/DigitalLibrary.jpg')} style={styles.logo}/>
          <Text style={styles.logoText}>Digital Library</Text>
          <TextInput style={styles.input} value={userEmail} onChangeText={text => setUserEmail(text)} placeholder={"Email"} ></TextInput>
          <TouchableOpacity style={styles.button} onPress={resetPasswordHandler}>
            <Text style={styles.buttonText} >Send Password</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#CCD1E4",
    paddingTop: 20,
},

  logo:{
      
      justifyContent:'center',
      alignItems:'center',
      width: 220,
      height: 220,
      marginLeft: "auto",
      marginRight: "auto"
  },

  column:{
      flexDirection: 'column',
      marginTop: 20,
      alignItems: "center",
  },

  logoText:{
    fontSize: 30,
    fontFamily:'sans-serif' ,
    fontWeight: 'bold',
    color: "#2F3A8F",
    backgroundColor: "#FE7E6D",
    paddingTop: 10,
    marginTop: 20,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50
  },

  input:{
  
    width:  400,
    height: 40,
    borderWidth: 2.5,
    padding: 10,
    marginTop: 30,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderColor: "#24A19C",
    backgroundColor: "#FEECE9",
    placeholderTextColor: "#000"
    
  },

  button:{
    alignItems: "center",
    backgroundColor: "#FE7E6D",
    padding: 7,
    marginTop: 30,
    width: 210,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25
  },

  buttonText:{
    color: "#2F3A8F",
    fontSize: 25,
    fontWeight: "700"
  },

})

export default ResetPassword;
