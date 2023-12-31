import React, {Component, useEffect, useRef, useState} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
// import MainLogo from "../../assets/svg/main-logo";
// import BackAssets from "../../assets/svg/logo-bg-assets";
import * as nativeStyles from '../../theme/native.global'
import {anchorNavigate} from "../../components/Navigation";
import {Colors} from "../../theme/native.global";

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const growAnim = useRef(new Animated.Value(.6)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        useNativeDriver: true,
        toValue: 1,
        duration: 700,
        easing: Easing.back(2)
      }
    ).start();
  }, [fadeAnim])
  
  useEffect(() => {
    Animated.timing(
      growAnim,
      {
        useNativeDriver: true,
        toValue: 1,
        duration: 700,
        easing: Easing.back(2)
      }
    ).start(result => setTimeout(() => anchorNavigate('main'), 400));
  }, [growAnim])
  
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [
          { scale: growAnim }
        ]
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const AnimatedWrapper = (props: any) => {
  const [animation, setAnimation] = useState(new Animated.Value(0))
  
  useEffect(() => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1000
    }).start()
  })
  
  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange:[Colors.actionPrimary , Colors.backgroundPrimary]
  })
  
  const animatedStyle = {
    backgroundColor: colorInterpolation
  }
  
  return (
    <Animated.View style={{
      ...props.style,
      animatedStyle
    }}>
      {props.children}
    </Animated.View>
  )
}

export default () => {
  
  return (
    <AnimatedWrapper style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', paddingTop: 40}}>
        <BackAssets size={250} />
      </FadeInView>
      
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <MainLogo color={Colors.actionPrimary} />
      </View>
    </AnimatedWrapper>
  )
}
