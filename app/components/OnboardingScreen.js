import React, { useRef } from 'react';
import { Animated, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const DATA = [
    { id: '1', title: 'Track Your Fitness', desc: 'Monitor your membership, check attendance, and stay connected with your trainer.', icon: '📈' },
    { id: '2', title: 'Personalized Plans', desc: 'Get customized diet and workout plans tailored specifically for your goals.', icon: '🥗' },
    { id: '3', title: 'Stay Motivated', desc: 'Join a community of fitness enthusiasts and track your daily progress.', icon: '🔥' },
];

const OnboardingScreen = ({ onFinish }) => {
    const { width, height } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item }) => (
        <View style={[styles.slide, { width }]}>
            <View style={styles.centerContent}>
                <View style={styles.iconCircle}>
                    <Text style={styles.iconText}>{item.icon}</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>

                <View style={styles.listContainer}>
                    <Animated.FlatList
                        data={DATA}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        scrollEventThrottle={32}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.paginationContainer}>
                        {DATA.map((_, i) => {
                            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                            const dotWidth = scrollX.interpolate({
                                inputRange,
                                outputRange: [10, 25, 10],
                                extrapolate: 'clamp',
                            });

                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.4, 1, 0.4],
                                extrapolate: 'clamp',
                            });

                            return (
                                <Animated.View
                                    key={i}
                                    style={[styles.dot, { width: dotWidth, opacity }]}
                                />
                            );
                        })}
                    </View>

                    <TouchableOpacity style={styles.button} onPress={onFinish} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#4F46E5' },
    safeArea: { flex: 1 },
    listContainer: { flex: 3 },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    iconCircle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    iconText: { fontSize: 60 },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 15
    },
    description: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        lineHeight: 24
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 20,
    },
    paginationContainer: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: { height: 10, borderRadius: 5, backgroundColor: '#FFF', marginHorizontal: 6 },
    button: {
        backgroundColor: '#FFF',
        marginHorizontal: 40,
        marginTop: 20,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    buttonText: { color: '#4F46E5', fontSize: 18, fontWeight: 'bold' },
});

export default OnboardingScreen; 