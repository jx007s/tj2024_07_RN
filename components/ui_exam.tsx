import React, { useState } from 'react';
import {    View , Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';



const MyUi = () => {

    const [kor, setKor] = useState("0");
    const [eng, setEng] = useState("0");
    const [mat, setMat] = useState("0");
    const [tot, setTot] = useState("0");

    function calc(){
        console.log("calc 호출",kor, eng, mat);
        var res = parseInt(kor) +parseInt(eng) +parseInt(mat)
        setTot(res+"");
    }

    return( 
    <View>
        <Text style={sttt.ttt1}>국어</Text>
        <TextInput style={sttt.ti}  value={kor} 
            onChangeText={(kk)=>{ 
                 setKor(kk)
                 console.log("국어 ",kk)
                 calc()
                }
            }
        />

        <Text style={sttt.ttt1}>영어</Text>
        <TextInput style={sttt.ti}  value={eng} 
            onChangeText={(kk)=>{ 
                 setEng(kk)
                 console.log("영어 ",kk)
                 calc()
                }
            }
        />

        <Text style={sttt.ttt1}>수학</Text>
        <TextInput style={sttt.ti}  value={mat} 
            onChangeText={(kk)=>{ 
                 setMat(kk)
                 console.log("수학 ",kk)
                 calc()
                }
            }
        />
        <Text style={sttt.ttt1}>총점 : {tot}</Text>
       
    </View>) 
}


const sttt = StyleSheet.create(
    {
        ttt1:{
            fontSize:30,
            color:'#00f'
        },
        ttt2:{
            fontSize:20,
            marginBottom:10
        },
        img : {
            width: 200,
            height: 150
        },
        vvBig : {
            width: 200,
            height: 80,
            backgroundColor:"#ff0",
            marginBottom: 10
        },
        ti:{
            backgroundColor:'#ccc',
            width: 200,
            height: 40,
            borderColor:'#f00',
            borderWidth: 1
        },
        tim:{
            backgroundColor:'#ccc',
            width: 200,
            height: 160,
            borderColor:'#f00',
            borderWidth: 1
        }
    }
)

export default MyUi;
