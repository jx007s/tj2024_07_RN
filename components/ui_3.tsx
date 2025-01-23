import React, { useState } from 'react';
import {View ,Text, StyleSheet, Alert, Button } from 'react-native';

import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';


function ui_3(props) {
    const [ssVal, setSsVal] = useState(60);

    //기본값 오늘 날짜
    const [myDate, setMyDate] = useState(new Date());
    const [isDateShow, setDateShow] = useState(false);


    const dateCh = (event, selectDD)=>{
        console.log("dateCh : ", selectDD)
        setMyDate(selectDD)
        setDateShow(false)
    }



    //기본값 지금시간
    const [myTime, setMyTime] = useState(new Date());
    const [isTimeShow, setTimeShow] = useState(false);


    const timeCh = (event, selectDD)=>{
        console.log("timeCh : ", selectDD)
        setMyTime(selectDD)
        setTimeShow(false)
    }


    return (
        <View>
            <Text>UI_3 이지롱 : {ssVal}</Text>
            <Slider style={styles.slider}
                minimumValue={20}
                maximumValue={80}
                step={1}
                value={ssVal}
                onValueChange={(vv) => {
                    setSsVal(vv)
                    console.log("슬라이더 변경 : ", vv)
                }}
            />

            
            <Button title='날짜' onPress={()=>{setDateShow(true)}} />
                <View style={styles.dateLB}>
                    <Text>날짜 : {myDate.toLocaleDateString()}</Text>
                </View>
            

            
                {/* 날짜 버튼을 눌러서 isDateShow -> true 가 되면 창을 열겠다 */}
            {isDateShow && (
                <DateTimePicker value={myDate} 
                    mode='date'
                    onChange={dateCh}
                />
            )}





            <Button title='시간' onPress={()=>{setTimeShow(true)}} />
                <View style={styles.dateLB}>
                    <Text>시간 : {myTime.toLocaleTimeString()}</Text>
                </View>
            

            
                {/* 날짜 버튼을 눌러서 isDateShow -> true 가 되면 창을 열겠다 */}
            {isTimeShow && (
                <DateTimePicker value={myTime} 
                    mode='time'
                    onChange={timeCh}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    slider :{
        width: 300,
        height: 40
    },
    dateLB:{
        backgroundColor:'#ff0',
        width: 300,
        height: 40
    }
})

export default ui_3;