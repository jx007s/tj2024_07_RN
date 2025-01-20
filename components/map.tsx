import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function map(props) {

    const [region , setRegion] = useState(null)
    const [userPos, setUserPos] = useState(null)

    const coords = [
        { latitude: 37.575848, longitude: 126.973594, title:'경복궁'},
        { latitude: 35.794846, longitude: 129.349237, title:'석굴암'}
    ]

    const requestLocationPermission = async () =>{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title:'위치 권한',
                message : '이 앱은 사용자 위치 정보를 사용합니다.',
                buttonNeutral :'나중에',
                buttonNegative:'취소',
                buttonPositive:'확인'
            }
        )

        return granted === PermissionsAndroid.RESULTS.GRANTED // 권한 부여 여부
    }

    //현재 GPS 위치 가져오기
    const getCurrentLocation = ()=>{
        Geolocation.getCurrentPosition((pos)=>{
            const {latitude, longitude} = pos.coords

            setUserPos( {latitude, longitude} )  //사용자 위치 업데이트

            // 현재 위치로 지도 좌표 설정
            setRegion({
                latitude: latitude, 
                longitude: longitude,
                latitudeDelta: 0.01, 
                longitudeDelta:0.01,//
            })
            console.log("gps 좌표 받기", latitude, longitude)
            //37.466931, 126.679446

        })
    }


    useEffect(()=>{
        const fetchLocation = async () =>{
            const hasPermission = await requestLocationPermission();

            if(hasPermission){
                console.log('위치 권한부여 성공');

                //gps 좌표 받기 함수 호출
                getCurrentLocation()

            }else{
                console.log('위치 권한부여 거부');
            }
        }

        fetchLocation()
       
    }, [])


    return (
        <View  style={{flex:1}} >
            {region && (
                <MapView style={{flex:1}} region={region}>
                    <Marker coordinate={userPos} title="현재 위치"/>

                    {coords.map((crd, i)=>(
                        <Marker coordinate={crd} title={crd.title} key={i}/>
                    ))

                    }

                </MapView>)}
            
        </View>
    );
}

export default map;