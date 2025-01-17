import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function boardList({ route  , navigation}) {

    const {data} = route.params;

    const [title, setTitle] = useState(data.title)
    const [content, setContent] = useState(data.content)
    return (
            <View>
                <Text>수정이지롱</Text>
                <TextInput value={title}/>
                <TextInput  value={content}/>
    
                <Button title="수정"  />
               
            </View>
        );
}

export default boardList;