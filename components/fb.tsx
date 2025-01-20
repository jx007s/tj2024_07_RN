import React, { useEffect, useState } from 'react';
import { View , Text, Button, FlatList} from 'react-native';
import database from '@react-native-firebase/database'


function fb(props) {

    const [datas, setDatas] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")


    useEffect(()=>{
        const noticeRef = database().ref('notice')
        noticeRef.on('value', aaa =>{
            const data = aaa .val()
            const arr = []
            for (const key in data) {
                arr.push({id:key, ...data[key]})
            }
            setDatas(arr)
            console.log("데이터리스트 : ", arr)
        })

    },[])





    const writeGo = ()=>{
        const noticeRef = database().ref('notice').push()

        noticeRef.set({
            title : '제목2',
            content : '내용2',
            regdate: new Date().toISOString(),
            author:'qwer'
        })
    }

    const deleteGo = (delId)=> {
        console.log('삭제 클릭 : ', delId)
        const noticeRef = database().ref(`/notice/${delId}`)
        noticeRef.remove()
    }

    const modifyGo = (modId)=> {
        console.log('수정 클릭 : ', modId)
        const noticeRef = database().ref(`/notice/${modId}`)
        noticeRef.update({
            title:"변경된제목",
            content : '변경된내용',
            update: new Date().toISOString(),
            author:'변경된작성자'
        })
    }

    const detailGo = (detailId)=> {
        console.log('상세 클릭 : ', detailId)
        const noticeRef = database().ref(`/notice/${detailId}`)
        //데이터 한개 가져오기
        noticeRef.once('value', aaa =>{
            const data = aaa.val()

            setTitle(data.title)
            setContent(data.content)
            setAuthor(data.author)

        })
        
    }

    const box = ({item}) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text>{item.regdate}</Text>
            <Text>{item.author}</Text>
            <Button title="삭제" onPress={()=>deleteGo(item.id)}/>
            <Button title="수정" onPress={()=>modifyGo(item.id)}/>
            <Button title="상세" onPress={()=>detailGo(item.id)}/>
        </View>
    )


    return (
        <View>
            <Text>firebase </Text>
            <Text>제목: {title}</Text>
            <Text>내용: {content}</Text>
            <Text>작성자: {author}</Text>


            <Button title="글쓰기" onPress={writeGo}/>

            <FlatList 
                data={datas}
                keyExtractor={(item)=> item.id}
                renderItem={box}
            />
        </View>
    );
}

export default fb;