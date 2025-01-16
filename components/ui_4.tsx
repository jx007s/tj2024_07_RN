import React, { useState } from 'react';
import {SafeAreaView, Switch, View } from 'react-native';

function ui_4(props) {

    const [isToggle, setToggle] = useState(false);

    function toggleSwitch(){

        // previousState  : 기존의 값
        setToggle((previousState)=>!previousState)
    }

    return (
        <SafeAreaView>
            <Switch value={isToggle} onValueChange={toggleSwitch}/>
            
        </SafeAreaView>
    );
}

export default ui_4;