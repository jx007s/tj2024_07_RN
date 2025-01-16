import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, Switch, Modal, Button, View } from 'react-native';
import {Bar, Circle, CircleSnail} from 'react-native-progress'
import { Text } from 'react-native-svg';

var timer = null; 
function ui_4(props) {

    const [myPro, setMyPro] = useState(0)
    const [modalVisable, setModalVisable] = useState(false)

    // useEffect(()=>{
    //     console.log("최초 실행시 작업하지");


    //     const timer = setInterval(()=>{
    //         setMyPro((ppp) => {
    //             if(ppp>=1){
    //                 clearInterval(timer)
    //                 return 1
    //             }
    //             return ppp + 0.05
    //         })

    //     },1000)

    // },[])


    const [isToggle, setToggle] = useState(false);

    function toggleSwitch(){
        if(!isToggle){
            timer = setInterval(()=>{
                setMyPro((ppp) => {
                    if(ppp>=1){
                        clearInterval(timer)
                        return 1
                    }
                    return ppp + 0.05
                })
    
            },1000)
        }else{
            clearInterval(timer)
        }
       

        // previousState  : 기존의 값
        setToggle((previousState)=>!previousState)
    }
    //   0 <= progress <= 1
    return (

        <SafeAreaView>
            <Switch value={isToggle} onValueChange={toggleSwitch}/>
            <Bar width={300} progress={myPro}/> 
            <Circle size={200} progress={0.2} showsText={true}
                formatText={(vv)=> `${Math.round(vv * 100)} 이종도?`}
            /> 
            <CircleSnail style={styles.ccs}  size={100} color={['#f00', '#0f0', '#00f']} />


            <Button title="모달열기" onPress={()=>setModalVisable(true)}/>

                <Modal visible={modalVisable}
                    onRequestClose={()=>console.log('모달 닫지롱')}
                    onShow={()=>console.log('모달 열지롱')}
                >
                    <View>
                        <View style={styles.modalText}>
                            <Text >난 모달이야</Text>
                        </View>
                        <Button title="모달 닫기" onPress={()=>setModalVisable(false)}/>
                    </View>
                </Modal>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    ccs : {
        position:'absolute',
        top : 400,
        left: 100

    },
    modalText :{
        fontSize: 20,
        width: 300,
        height : 50,
        color : '#000'
    }
})

export default ui_4;