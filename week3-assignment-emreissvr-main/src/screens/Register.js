
import { useNavigation } from '@react-navigation/core';
import React, {  useState } from 'react'
import { StyleSheet,Image, View,Text,TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../firebase-config';
import Icon from 'react-native-vector-icons/FontAwesome';


const Register = () => {

  
  const [userEmail, setUserEmail] = useState(''); 
  // hooks'un en temel fonksiyonlarından biri olan useState() fonksiyonu bize durumsal bir değer döndürür
  // default olarak boş string veririz ve gelecek olan Email sol tarafta tanımladığım userEmail adlı değişkene atanır.
  // eğer ki bu değişken üzerinde update işlemi yapılmak istenirse "setUserEmail" ifadesi üzerinden yapılır.
  const [userPassword, setUserPassword] = useState('');


  const navigation = useNavigation();
  // @react-navigation/core modülündeki useNavigation componenti, ana ekranın navigasyon özelliğine erişebilmek için gereken bir hooktur


  const registerHandler = () => {
    // kullanıcı kayıdının yapılıp yapılmadığına karar veren bir methodtur 
    // proje klasörü altındaki firebase-config.js konfgürasyon dosyamızdan gelen "auth" özelliği ile uygulamanın back-end 
    // kısmının çalışabilmesi için authentication özelliğini firebase altyapısından alan ve kayıtları firebase üzerinde tutan bir methoddur
    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((userCredentials) => {
        
        const user = userCredentials.user;
        if (user) {
         
         navigation.navigate("Login");  
         // navigation.navigate() fonksiyonu ile pencereler arasında gezinme yani geleneksel route işlemi yapıyoruz.
        } else {
          console.log("kullanıcı yaratılamadı");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });


      
  };


  // Burada single page app üzerinde react-Native'e özel bir format olan JSX formatında component(node) mimarisi yaklaşımıyla yazılmış ve 
  // ekranda görsel bir çıktı almamıza yarayan kodlar mevcuttur.
  // her elemente yani component'e style özelliği vererek daha efektif ve göze hitap eden çıktılar üretilebilir
  // View --> div
  // TextInput componentleri üzerinde meydana gelen değişmleri eğer istenen çerçevede ise 
  // registerHandler'da işlenerek back-end kodu olarak işleme geçiyor
  // TouchableOpacity componenti burada buton görevi görüyor yani dokunduğun zaman reaksiyon veren bir component şeklinde görevi var
  
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
        
        <View style={styles.inputRow}>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText} >Sign Up</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputRow}>
          <Text style={{ fontSize:17, fontWeight: "bold"}}>
            Already have an account?  <TouchableOpacity onPress={ () => navigation.navigate('Login',{name:'Sign In'})}><Text style={styles.loginLink}>Sign In</Text></TouchableOpacity>
          </Text>
          <View style={styles.iconRow}>
            <Icon style={styles.icon}  name="google" backgroundColor="#FE7E6D" size={35} ></Icon>
            <Icon style={styles.icon} name="facebook-square" backgroundColor="#FE7E6D" size={35} ></Icon>
            <Icon style={styles.icon} name="github" backgroundColor="#FE7E6D" size={35} ></Icon>
          </View>
             
        </View> 
        
    </SafeAreaView>
  );
}

// yukarıdaki jsx formatında return edilen componentlerin içerisindeki style property'lerin içerisine yazılan style kodları buradaki styles 
// objesi üzerinden çağırılır.
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
        marginTop: 20,
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

    loginLink:{
      fontWeight: 'bold',
      color: "#2F3A8F",
      backgroundColor: "#FE7E6D",
      padding: 10,
      borderRadius: 20,
    },

    iconRow:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:15,
      
    },

    icon:{
      color: "#2F3A8F",
      marginRight: 40,
      padding: 10,
      backgroundColor: "#FE7E6D",
      borderRadius: 100
    }

    

    
})



export default Register;