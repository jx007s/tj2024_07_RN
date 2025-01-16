import React, { useEffect, useState } from 'react';
import {SafeAreaView, Switch, View } from 'react-native';
import {Bar} from 'react-native-progress'

function ui_4(props) {

    const [myPro, setMyPro] = useState(0)


    useEffect(()=>{
        console.log("최초 실행시 작업하지");


        const timer = setInterval(()=>{
            setMyPro((ppp) => {
                if(ppp>=1){
                    clearInterval(timer)
                    return 1
                }
                return ppp + 0.05
            })

        },1000)

    },[])


    const [isToggle, setToggle] = useState(false);

    function toggleSwitch(){

        // previousState  : 기존의 값
        setToggle((previousState)=>!previousState)
    }
    //   0 <= progress <= 1
    return (

        <SafeAreaView>
            <Switch value={isToggle} onValueChange={toggleSwitch}/>
            <Bar width={300} progress={myPro}/>  
        </SafeAreaView>
    );
}

export default ui_4;