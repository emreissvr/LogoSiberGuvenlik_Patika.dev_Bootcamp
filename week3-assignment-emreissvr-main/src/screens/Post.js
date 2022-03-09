import React, { useState,useEffect } from 'react'
import { FlatList,View,Text,StyleSheet } from 'react-native';
import API from '../services/api'


const Post = () => {
  
  const [datas,setDatas] = useState(false);

  const getData = async() => {
    await API.get('/posts').then(response => {
      setDatas(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
  //  getData asenkron fonksiyonuyla API üzerinden /posts endpoint ile sunulan json verisi çekilir
  useEffect( () => {
    getData()
  },[])

  // ve bu çekilen veriler "FlasList" adlı component ile "posts" page üzerinde kullanıcıya gösterilir
  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        keyExtractor={item => item.id}
        renderItem={ ({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
          
        )}
      />

      
    </View>

  )

}


const styles = StyleSheet.create({
  
  container:{
    flex:1,
    backgroundColor: "#FEECE9",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",

  },

  item:{
    flex: 1,
    textAlign:'center',
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    color: "#2F3A8F",
    backgroundColor: '#FE7E6D',
    fontSize: 18,
    fontWeight: "bold",
    textTransform: 'capitalize'
  }


})


export default Post;