import React from 'react';
import { Dimensions, StyleSheet, View,  Image } from 'react-native';
import Swiper from 'react-native-web-swiper';

function ui_7(props) {

    const imgs = [
        require('./fff/son_1.png'),
        require('./fff/son_2.jpg'),
        require('./fff/son_3.jpg'),
        require('./fff/son_4.jpg')
    ]

    const dis_h = Dimensions.get("window").height;
    const dis_w = Dimensions.get("window").width;
    console.log(dis_h, dis_w)

    return (
        <View  style={styles.wrapper}>
             
            <Swiper containerStyle={{width:'100%', height:dis_h / 4}}
            loop
            timeout={3}
            >
                {imgs.map((item, i)=>(
                    <View key={i}> <Image source={item}  style={styles.img} /> </View>
                ))}
                {/* <View> <Image source={imgs[0]}  style={styles.img} /> </View>
                <View> <Image source={imgs[1]}  style={styles.img} /> </View>
                <View> <Image source={imgs[2]}  style={styles.img} /> </View>
                <View> <Image source={imgs[3]}  style={styles.img} /> </View> */}
            </Swiper>
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
    },
    img:{
        width:'100%',
        height:'40%',
       resizeMode:"cover"  // 이미지 비율 유지
    }
})

export default ui_7;