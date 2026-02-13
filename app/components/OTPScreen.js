import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const OTPScreen = ({ onBack, onVerify }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [hasError, setHasError] = useState(false);

    const inputRefs = useRef([]);

    const handleChange = (text, index) => {
        setHasError(false);
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length !== 0 && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        if (otp.some(digit => digit === '')) {
            setHasError(true);
        } else {
            setHasError(false);
            if (onVerify) onVerify(otp.join(''));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={onBack} style={styles.topBack}>
                <Text style={{ fontSize: 24, color: '#111827' }}>←</Text>
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Verify OTP</Text>
                <Text style={styles.subtitle}>Enter the 6-digit code sent to your device</Text>

                <View style={styles.otpRow}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={[
                                styles.otpBox,
                                hasError && styles.errorBox
                            ]}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                        />
                    ))}
                </View>

                {hasError && (
                    <Text style={styles.errorText}>Please enter the complete 6-digit code</Text>
                )}

                <TouchableOpacity
                    style={[styles.button, hasError && { marginTop: 20 }]}
                    onPress={handleVerify}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Verify & Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resendContainer}>
                    <Text style={styles.resendText}>
                        Didn't receive code? <Text style={styles.resendLink}>Resend</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF' },
    topBack: { padding: 20 },
    content: { flex: 1, alignItems: 'center', paddingHorizontal: 25, paddingTop: 30 },
    title: { fontSize: 28, fontWeight: '800', color: '#111827' },
    subtitle: { color: '#6B7280', marginTop: 10, marginBottom: 40, textAlign: 'center' },
    otpRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },
    otpBox: {
        width: 45,
        height: 55,
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        borderWidth: 1.5,
        borderColor: '#E5E7EB',
        color: '#111827'
    },
    errorBox: {
        borderColor: '#DC2626',
        backgroundColor: '#FEF2F2',
    },
    errorText: {
        color: '#DC2626',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1A62FF',
        width: '100%',
        height: 55,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        elevation: 2
    },
    buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    resendContainer: { marginTop: 30 },
    resendText: { color: '#6B7280', fontSize: 14 },
    resendLink: { color: '#1A62FF', fontWeight: '700' }
});

export default OTPScreen;