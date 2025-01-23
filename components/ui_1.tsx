import React from 'react';
import {    View , Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';



const MyUi = () => {
    return( 
    <View>
        <Text style={{ fontSize:40,color:'#f00'}}>아기상어</Text>
        <Text style={sttt.ttt1}>엄마상어 뚜루루 뚜루</Text>
        <TextInput style={sttt.ti}  placeholder='글자 입력하세요' />
        <TextInput style={sttt.tim} multiline={true} numberOfLines={4} />

        <Image source={{uri:'https://cafeptthumb-phinf.pstatic.net/MjAyMDA4MjdfODEg/MDAxNTk4NDY0MTc2NzMz.Z--hecsvj5xiyTeno0V1jLjd1Q6Or9jROju19JlB1sUg.Ka-eYPe7CJEm6nOQAJyfooPCkbvaO7EecwWqcWTbNgIg.JPEG/20171002_231456_IMG_1074.JPG?type=w1600'}}
            style={sttt.img}
        />
        <Image source={  require('./fff/son_1.png')  }
            style={sttt.img}
        />
        <View style={sttt.vvBig}>
            <Text style={sttt.ttt2}>장동건</Text>
            <Text style={sttt.ttt2}>장서건</Text>
            <Text style={sttt.ttt2}>장남건</Text>
            <Text style={sttt.ttt2}>장중건</Text>
        </View>

        <View style={sttt.vvBig}>
            <ScrollView>
                <Text style={sttt.ttt2}>한소희</Text>
                <Text style={sttt.ttt2}>두소희</Text>
                <Text style={sttt.ttt2}>세소희</Text>
                <Text style={sttt.ttt2}>네소희</Text>
            </ScrollView>
        </View>
       
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
