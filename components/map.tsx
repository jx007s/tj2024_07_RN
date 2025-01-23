import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, View } from 'react-native';
import MapView from 'react-native-maps';

function map(props) {

    const [region , setRegion] = useState(null)

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
        Geolocation
    }


    useEffect(()=>{
        const fetchLocation = async () =>{
            const hasPermission = await requestLocationPermission();

            if(hasPermission){
                console.log('위치 권한부여 성공');

                
                setRegion({
                    latitude: 37.497902, 
                    longitude:127.027850,
                    latitudeDelta: 0.01, 
                    longitudeDelta:0.01,//
                })


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

                </MapView>)}
            
        </View>
    );
}

export default map;