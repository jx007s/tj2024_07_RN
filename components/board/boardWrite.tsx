import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function boardList({ route  , navigation}) {

    const {setDatas, nowId, setNowId} = route.params

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const saveGo = () =>{

        const newItem ={
            id:nowId, title:title, content:content
        }

        setNowId(nowId+1)

        setDatas((prevDatas)=> [...prevDatas,newItem])

        navigation.goBack() // 화면 뒤로
    }

    return (
        <View>
            <Text>글쓰기이지롱</Text>
            <TextInput value={title} onChangeText={setTitle} placeholder='제목입력'/>
            <TextInput value={content} onChangeText={setContent} placeholder='내용입력'/>

            <Button title="저장" onPress={saveGo} />
        </View>
    );
}

export default boardList;