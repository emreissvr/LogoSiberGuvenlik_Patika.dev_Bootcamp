import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,Image, View,Text,TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase-config';
import Icon from 'react-native-vector-icons/FontAwesome';





const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('')

  const navigation = useNavigation()

  const loginHandler = () => {

    // kullanıcının giriş yapıp yapamayacağına karar veren bir methodtur 
    // authentication kısmında kayıt yapılmışsa bu kullanıcı login işlemini gerçekleştirebilir eğer kayıt yapılmamışsa 
    // kayıt olması için UI üzerinde gerekli componentler aracılığıyla yönlendirilir.
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.info('Logged in with:', user.email);
        navigation.navigate('Main');
      })
      .catch(error => console.error(error.message))
  }


  // Burada single page app üzerinde react-Native'e özel bir format olan JSX formatında component(node) mimarisi yaklaşımıyla yazılmış ve 
  // ekranda görsel bir çıktı almamıza yarayan kodlar mevcuttur.
  // her elemente yani component'e style özelliği vererek daha efektif ve göze hitap eden çıktılar üretilebilir
  // Login kısmında ise eğer ki kullanıcı kayıt olmamışsa  "sign up" tuşuna basarak register tarafında kaydını yaptırmak için yönlendirilir.
  // eğer ki kullanıcı şifresini unutmuş ise bir butpn(link) aracılığı ile  "resetpassword" ekranına yönlendirilir ve şifresini yenilemesi istenir

    return (
      <SafeAreaView style={styles.container}>

        <Image source={require('../assets/DigitalLibrary.jpg')} style={styles.logo}/>
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>Digital Library</Text>
        </View> 
        
        <View style={styles.inputRow}>
          <TextInput style={styles.input} value={userEmail} onChangeText={text => setUserEmail(text)} placeholder={"Email"} ></TextInput>
          <TextInput style={styles.input} value={userPassword} onChangeText={text => setUserPassword(text)} placeholder={"Password"} secureTextEntry ></TextInput>
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword', { name: 'Reset Password' }) }>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputRow}>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText} >Sign In</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputRow}>
          <Text style={styles.signUpText}>Don’t have an account?  <TouchableOpacity onPress={() => navigation.navigate('Register', { name: 'Register' }) }>
              <Text style={styles.signUplink}>Sign up</Text>
            </TouchableOpacity>
          </Text>
          <View style={styles.iconRow}>
            <Icon style={styles.icon}  name="google" backgroundColor="#FE7E6D" size={35} ></Icon>
            <Icon style={styles.icon} name="facebook-square" backgroundColor="#FE7E6D" size={35} ></Icon>
            <Icon style={styles.icon} name="github" backgroundColor="#FE7E6D" size={35} ></Icon>
          </View>
        </View> 
    </SafeAreaView>
    )
  
}

// yukarıdaki jsx formatında return edilen componentlerin içerisindeki style property'lerin içerisine yazılan 
// style kodları buradaki styles objesi üzerinden çağırılır.
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

  logoRow:{
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: "center",
  },

  logoText:{
    fontSize: 30,
    fontFamily:'sans-serif' ,
    fontWeight: 'bold',
    color: "#2F3A8F",
    backgroundColor: "#FE7E6D",
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50
  },

  inputRow:{
    flexDirection: 'column',
    marginTop: 30,
    // justifyContent: "center",
    alignItems: 'center',
  },

  input:{
     
    width:  400,
    height: 40,
    margin: 10,
    borderWidth: 2.5,
    padding: 10,
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
    width: 170,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25
  },

  buttonText:{
    color: "#2F3A8F",
    fontSize: 25,
    fontWeight: "700"
  },

  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  forgotText: {
    fontSize: 16,
    color: "#000",
  },

  signUpText:{
    fontSize: 16,
    color: "#000"
  },

  signUplink:{
    fontWeight: 'bold',
    color: "#2F3A8F",
    backgroundColor: "#FE7E6D",
    padding: 10,
    borderRadius: 20,
  },

  iconRow:{
      flexDirection:"row",
      alignItems:"center",
      marginLeft: 40,
      marginTop:35,
      
    },

    icon:{
      color: "#2F3A8F",
      marginRight: 40,
      padding: 10,
      backgroundColor: "#FE7E6D",
      borderRadius: 100
    }

});

export default Login;
