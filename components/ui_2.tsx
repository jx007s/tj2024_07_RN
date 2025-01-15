import React from 'react';
import {    View , Button, StyleSheet, Alert, TouchableOpacity, Text, FlatList } from 'react-native';

const data = [
    {aa: "상어"},
    {aa: "문어"},
    {aa: "잉어"},
    {aa: "영어"}
]


function ui_2(props) {
    return (
        <View style={sts.cont}>
            <Button title='눌러바'
                onPress={()=> Alert.alert("눌렀구나")}
            />

            <TouchableOpacity  style={sts.btn1}
                 onPress={()=> Alert.alert("눌렀구나2")}
                 onPressIn={()=> console.log("누르기 시작")}
                 onPressOut={()=> console.log("누르기 끝")}
                 onLongPress={()=> console.log("오래 누르기")}
            >
                <Text style={sts.tt}>눌러바2</Text>
            </TouchableOpacity>

            {/* {aa: "상어"}, ==> {item} 타입이 같아야 한다 */}
            <FlatList data={data}
                renderItem={(   {item}   )=>(
                    <Text style={sts.item}>{item.aa}</Text>
                )}
            />
        </View>
    );
}

const sts = StyleSheet.create({
    cont:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn1:{
        backgroundColor: '#00f',
        padding:10,
        borderRadius : 5,
        width: 100,
        height:50,
        alignContent:'center'
    },
    tt : {
        color: '#fff',
        textAlign:'center'
    },
    item :{
        padding : 10,
        fontSize : 20,
        borderBottomWidth : 1,
        borderBottomColor : "#ccc"
    }

})

export default ui_2;