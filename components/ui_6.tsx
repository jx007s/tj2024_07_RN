import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, StyleSheet, Button, Easing } from 'react-native';

function ui_6(props) {

    const move = useRef(new Animated.Value(0)).current
    const [dir, setDir] = useState(false)

    useEffect(()=>{
        Animated.timing( 
            move, 
            {toValue: dir ? 150 : 0,
            useNativeDriver: true}
        ).start()
    },[dir, move])

    return (
        <View style={styles.wrapper}>
            <Animated.View style={[styles.box, {transform : [{translateX: move}]}   ]}/>
            <Button title="transform" onPress={()=>{ setDir(!dir)}}/>
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

export default ui_6;