import React, { useRef } from 'react';
import { View, Animated, StyleSheet, Button, Easing } from 'react-native';


const FadeInOutGo = ()=>{

    const ani = useRef(new Animated.Value(1)).current


    return (
        <>
            <Animated.View style={[styles.box, {opacity : ani}]} />

            <Button title="padeIn" onPress={()=>{
                Animated.timing(ani,{
                    toValue:0,
                    useNativeDriver:true,
                    duration : 2000 , // 2초
                    easing: Easing.bounce
                }).start()
            }}/>


            <Button title="padeOut" onPress={()=>{
                Animated.timing(ani,{
                    toValue:1,
                    useNativeDriver:true,
                    duration : 1000 , // 2초
                    easing: Easing.elastic(3)
                }).start()
            }}/>
        </>
    )
}


function ui_5(props) {
    return (
        <View  style={styles.wrapper}>
            <FadeInOutGo/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 20
    },
    box:{
        width:100,
        height:100,
        backgroundColor:"#0ff",
        margin: 20
    }
})

export default ui_5;