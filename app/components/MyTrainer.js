import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyTrainer = ({ onBack }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section with Padding Fix */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backBtn}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Trainer</Text>
            </View>

            <View style={styles.content}>
                {/* Trainer Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>MJ</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.trainerName}>Mike Johnson</Text>
                        <Text style={styles.trainerRole}>Senior Fitness Trainer</Text>
                        <View style={styles.experienceBadge}>
                            <Text style={styles.experienceText}>5 Years Experience</Text>
                        </View>
                    </View>
                </View>

                {/* Specializations Section */}
                <Text style={styles.sectionTitle}>Specializations</Text>
                <View style={styles.tagRow}>
                    {['Weight Training', 'CrossFit', 'Nutrition', 'HIIT'].map((tag) => (
                        <View key={tag} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>

                {/* Timings Section */}
                <Text style={styles.sectionTitle}>Available Timings</Text>
                <View style={styles.timingCard}>
                    <View style={styles.timingRow}>
                        <Text style={styles.dayText}>Mon - Fri</Text>
                        <Text style={styles.timeText}>6:00 AM - 2:00 PM</Text>
                    </View>
                    <View style={styles.timingRow}>
                        <Text style={styles.dayText}>Sat - Sun</Text>
                        <Text style={styles.timeText}>7:00 AM - 12:00 PM</Text>
                    </View>
                </View>

                {/* Contact Buttons */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.contactBtn, styles.callBtn]}>
                        <MaterialCommunityIcons name="phone" size={20} color="#FFF" />
                        <Text style={styles.contactBtnText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.contactBtn, styles.whatsappBtn]}>
                        <MaterialCommunityIcons name="whatsapp" size={22} color="#FFF" />
                        <Text style={styles.contactBtnText}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: Platform.OS === 'android' ? 45 : 10, // Extra padding for top content
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: '#111827' },
    content: { padding: 20 },
    profileCard: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 25
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
    infoContainer: { marginLeft: 15 },
    trainerName: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
    trainerRole: { fontSize: 14, color: '#6B7280', marginTop: 2 },
    experienceBadge: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 8,
        alignSelf: 'flex-start'
    },
    experienceText: { color: '#4F46E5', fontSize: 12, fontWeight: '600' },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginBottom: 15, marginTop: 10 },
    tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
    tag: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        marginRight: 8,
        marginBottom: 8
    },
    tagText: { fontSize: 13, color: '#374151' },
    timingCard: { backgroundColor: '#FFF', borderRadius: 15, padding: 5, borderWidth: 1, borderColor: '#E5E7EB' },
    timingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6'
    },
    dayText: { color: '#6B7280', fontWeight: '500' },
    timeText: { color: '#111827', fontWeight: 'bold' },
    buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
    contactBtn: {
        flex: 0.48,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    callBtn: { backgroundColor: '#4F46E5' },
    whatsappBtn: { backgroundColor: '#10B981' },
    contactBtnText: { color: '#FFF', fontWeight: 'bold', marginLeft: 8, fontSize: 16 }
});

export default MyTrainer;