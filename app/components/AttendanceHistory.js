import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AttendanceHistory = ({ onBack }) => {
    const attendanceData = [
        { date: 'Dec 26, 2025', day: 'Thursday', time: '6:30 AM', status: 'Present' },
        { date: 'Dec 24, 2025', day: 'Tuesday', time: '7:00 AM', status: 'Present' },
        { date: 'Dec 22, 2025', day: 'Sunday', time: '8:15 AM', status: 'Present' },
        { date: 'Dec 20, 2025', day: 'Friday', time: 'No Check-in', status: 'Absent' },
        { date: 'Dec 18, 2025', day: 'Wednesday', time: '6:45 AM', status: 'Present' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header with Back Arrow */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backBtn}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Attendance History</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.monthLabel}>December 2025</Text>
                    <View style={styles.statsRow}>
                        <View>
                            <Text style={styles.statNumber}>24</Text>
                            <Text style={styles.statLabel}>Total Visits</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.statNumber}>85%</Text>
                            <Text style={styles.statLabel}>Attendance</Text>
                        </View>
                    </View>
                </View>

                {/* List of Logs */}
                {attendanceData.map((item, index) => (
                    <View key={index} style={styles.logCard}>
                        <View>
                            <Text style={styles.logDate}>{item.date}</Text>
                            <Text style={styles.logDay}>{item.day}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={[
                                styles.logTime,
                                item.status === 'Absent' && { color: '#EF4444' }
                            ]}>
                                {item.time}
                            </Text>
                            <View style={[
                                styles.statusBadge,
                                item.status === 'Absent' ? styles.absentBadge : styles.presentBadge
                            ]}>
                                <Text style={[
                                    styles.statusText,
                                    item.status === 'Absent' ? styles.absentText : styles.presentText
                                ]}>
                                    {item.status}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: Platform.OS === 'android' ? 40 : 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    scrollContent: { padding: 20 },
    summaryCard: {
        backgroundColor: '#4F46E5',
        borderRadius: 20,
        padding: 25,
        marginBottom: 25,
    },
    monthLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 15 },
    statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
    statNumber: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
    statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 13 },
    logCard: {
        backgroundColor: '#FFF',
        padding: 18,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },
    logDate: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
    logDay: { fontSize: 13, color: '#6B7280', marginTop: 2 },
    logTime: { fontSize: 15, fontWeight: '700', color: '#10B981' },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 5
    },
    presentBadge: { backgroundColor: '#D1FAE5' },
    absentBadge: { backgroundColor: '#FEE2E2' },
    statusText: { fontSize: 11, fontWeight: 'bold' },
    presentText: { color: '#059669' },
    absentText: { color: '#DC2626' }
});

export default AttendanceHistory;