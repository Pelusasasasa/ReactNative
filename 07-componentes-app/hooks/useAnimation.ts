import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;
  
    const fadeIn = ({toValue = 1, duration = 300, useNativeDriver = true, easing = Easing.ease, callback = () => {}}) => {
      Animated.timing(animatedOpacity, {
        toValue,
        duration,
        useNativeDriver,
        easing
      }).start(callback);
    };
  
    const fadeOut = ({toValue = 0, duration = 300, useNativeDriver = true, easing = Easing.ease, callback = () => {}}) => {
      Animated.timing(animatedOpacity, {
        toValue,
        duration,
        useNativeDriver,
        easing
      }).start(callback)
    };

    const startMovingTopPosition = ({initialPosition = -100, toValue = 0, duration = 300, useNativeDriver = true, easing = Easing.ease, callback = () => {}}) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue,
            duration,
            useNativeDriver,
            easing
          }).start(callback)
    }

    return {
        //atributos
        animatedOpacity,
        animatedTop,

        //metodos
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}