import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';


function boardList({navigation}) {

    const [nowId, setNowId] = useState(4)
    const [datas, setDatas] = useState([
        {id:1, title:'제목1', content:'내용1'},
        {id:2, title:'제목2', content:'내용2'},
        {id:3, title:'제목3', content:'내용3'}
    ])

    const writeGo = ()=> {
       // Alert.alert("늘렀냐?")
        navigation.navigate('BoardWrite', {setDatas, nowId, setNowId});
    }

    const detailGo = ( data )=> {
        
         navigation.navigate('BoardDetail',{data, deleteReg});
     }

     const deleteReg = (delId)=>{
        setDatas((prevDatas)=> prevDatas.filter((item)=> item.id != delId))
     }

    return (
        <View>
            <Text>목록이지롱</Text>

            <TouchableOpacity style={styles.btn} onPress={writeGo}>
                <Text>글쓰기</Text>
            </TouchableOpacity>

            <FlatList data={datas}
            keyExtractor={(item)=> item.id}
            renderItem={
                ({item}) => (
                    <TouchableOpacity onPress={ ()=>detailGo(item)   }>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )
            }  />



            
        </View>
    );
}

const styles = StyleSheet.create({
    btn :{
        backgroundColor:"#0a0",
        margin:20 ,
        alignItems:'center'
    }
})

export default boardList;