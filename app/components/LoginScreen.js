import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ onBack, onLogin }) => {
    const [uniqueId, setUniqueId] = useState('');
    const [hasError, setHasError] = useState(false);

    const handlePress = () => {
        if (uniqueId.trim().length > 0) {
            setHasError(false);
            onLogin();
        } else {
            setHasError(true);
        }
    };

    const handleTextChange = (text) => {
        setUniqueId(text);
        if (text.length > 0) {
            setHasError(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={styles.content}>
                    <View style={styles.logoCircle}>
                        <Image
                            source={require('../../assets/images/FabNexLogo-removebg-preview.png')}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Login with your unique member ID</Text>

                    <View style={styles.inputSection}>
                        <Text style={[styles.label, hasError && { color: '#DC2626' }]}>
                            Unique ID {hasError && "(Required)"}
                        </Text>

                        <TextInput
                            style={[
                                styles.inputField,
                                hasError && styles.errorInput
                            ]}
                            placeholder="e.g. FZ-10293"
                            placeholderTextColor={hasError ? '#FCA5A5' : '#9CA3AF'}
                            autoCapitalize="characters"
                            value={uniqueId}
                            onChangeText={handleTextChange}
                        />

                        {hasError && (
                            <Text style={styles.errorText}>Please enter your ID to continue</Text>
                        )}
                    </View>

                    <TouchableOpacity style={styles.primaryButton} onPress={handlePress}>
                        <Text style={styles.btnText}>Login Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onBack} style={styles.backBtn}>
                        <Text style={styles.backBtnText}>← Back to Role Selection</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    content: { flex: 1, justifyContent: 'center', paddingHorizontal: 30, alignItems: 'center' },
    logoCircle: { width: 100, height: 100, backgroundColor: '#FFF', borderRadius: 50, elevation: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
    logoImage: { width: 70, height: 70 },
    title: { fontSize: 26, fontWeight: '800' },
    subtitle: { color: '#6B7280', textAlign: 'center', marginTop: 8, marginBottom: 35 },
    inputSection: { width: '100%', marginBottom: 25 },
    label: { fontWeight: '600', marginBottom: 10, color: '#374151' },
    inputField: {
        backgroundColor: '#F3F4F6',
        height: 55,
        borderRadius: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },
    errorInput: {
        borderColor: '#DC2626',
        backgroundColor: '#FEF2F2',
    },
    errorText: {
        color: '#DC2626',
        fontSize: 12,
        marginTop: 5,
        fontWeight: '500',
    },
    primaryButton: { backgroundColor: '#1A62FF', width: '100%', height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
    btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    backBtn: { marginTop: 25 },
    backBtnText: { color: '#6B7280' }
});

export default LoginScreen;