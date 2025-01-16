import React, { useState } from 'react';
import { View , Text, StyleSheet, PanResponder} from 'react-native';


var first = true
var firstX = 0
function ui_8(props) {
    

    const [dir, setDir] = useState("")

    const prd = PanResponder.create({

        onMoveShouldSetPanResponder:()=> true,   // 터치 이동시 응답

        //이동시 응답
        onPanResponderMove:(e , gs)=>{
            console.log("move : ", gs.moveX, gs.moveY, first, firstX);
            if(first){
                firstX = gs.moveX
                first = false
            }
            
        },

        //놓았을 때 응답
        onPanResponderRelease:(e , gs)=>{
            
            console.log("release : ", gs.moveX, gs.moveY);
            if(firstX >  gs.moveX){
                setDir("->");
            }else{
                setDir("<-");
            }
            

            first = true
        },

    })



    return (
        <View {...prd.panHandlers} style={styles.wrapper}>

            <Text style={styles.text}>터치해 {dir}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 20,
        backgroundColor: '#ff0'
    },
    text:{
        fontSize : 30
    }
})

export default ui_8;