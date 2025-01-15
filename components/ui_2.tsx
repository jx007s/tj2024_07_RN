import React,{useState} from 'react';
import {    View , Button, StyleSheet, Alert, TouchableOpacity, Text, FlatList } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const data = [
    {aa: "상어"},
    {aa: "문어"},
    {aa: "잉어"},
    {aa: "영어"}
]


function ui_2(props) {

    const [ppVal, setPpVal] = useState('html')

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



            <Picker style={sts.picker} selectedValue={ppVal}
                onValueChange={(vv)=> {
                    console.log("picker 선택 : ",vv)
                    setPpVal(vv)
                }}
            >
                <Picker.Item label='알엔' value="rn"  />
                <Picker.Item label='퍼블리셔' value="html"  />
                <Picker.Item label='백엔드' value="express"  />
                <Picker.Item label='프론트' value="react"  />

            </Picker>
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
    },
    picker:{
        position:'absolute',
        top: 300,
        width: 200,
        height:100,
    }
    

})

export default ui_2;