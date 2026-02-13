import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const LoadingScreen = () => {
    const translateX = useRef(new Animated.Value(-100)).current;

    useEffect(() => {

        const animate = () => {
            translateX.setValue(-100);
            Animated.timing(translateX, {
                toValue: 100,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => animate());
        };

        animate();
    }, [translateX]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.content}>
                {/* White Logo Box */}
                <View style={styles.logoBox}>
                    <Image
                        source={require('../../assets/images/FabNexLogo-removebg-preview.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.brandTitle}>FitZone</Text>
                <Text style={styles.tagline}>Your Fitness Journey</Text>

                {/* Flowing Loading Bar */}
                <View style={styles.loaderContainer}>
                    <Animated.View
                        style={[
                            styles.loaderBar,
                            { transform: [{ translateX }] }
                        ]}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    logoBox: {
        width: 100,
        height: 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 8,
    },
    logoImage: {
        width: 70,
        height: 70,
    },
    brandTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        letterSpacing: 1,
    },
    tagline: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 5,
        marginBottom: 40,
    },
    loaderContainer: {
        width: 120,
        height: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        overflow: 'hidden',
    },
    loaderBar: {
        width: 60,
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});

export default LoadingScreen;