import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = ({ onBack, onLogout }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Main Profile Card - Matched to Screenshot (116) */}
                <View style={styles.mainCard}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <Text style={styles.userNameText}>John Doe</Text>
                    <Text style={styles.memberIdText}>Member ID: #MB12345</Text>
                </View>

                {/* Detail List Items - Matched to image_1b89de.jpg */}
                <View style={styles.infoSection}>
                    <DetailRow label="Mobile Number" value="+1 234-567-8900" isLocked />
                    <DetailRow label="Email" value="john.doe@email.com" />
                    <DetailRow label="Membership Plan" value="Premium Monthly" />
                    <DetailRow label="Gym Branch" value="Downtown Branch" />
                    <DetailRow label="Member Since" value="Jan 15, 2025" />
                </View>

                {/* Action List Items */}
                <View style={styles.actionSection}>
                    <TouchableOpacity style={styles.actionItem}>
                        <MaterialCommunityIcons name="help-circle-outline" size={22} color="#374151" />
                        <Text style={styles.actionItemText}>Help & Support</Text>
                        <MaterialCommunityIcons name="chevron-right" size={20} color="#9CA3AF" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.actionItem, styles.logoutItem]} onPress={onLogout}>
                        <MaterialCommunityIcons name="logout" size={20} color="#EF4444" />
                        <Text style={[styles.actionItemText, styles.logoutText]}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const DetailRow = ({ label, value, isLocked }) => (
    <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>{label}</Text>
        <View style={styles.valueRow}>
            <Text style={styles.detailValue}>{value}</Text>
            {isLocked && (
                <MaterialCommunityIcons name="lock" size={14} color="#F59E0B" style={{ marginLeft: 8 }} />
            )}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: Platform.OS === 'android' ? 45 : 10,
        backgroundColor: '#FFF',
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: '#111827' },
    scrollContent: { padding: 20, paddingBottom: 40 },

    mainCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        marginBottom: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarText: { color: '#FFF', fontSize: 36, fontWeight: 'bold' },
    userNameText: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
    memberIdText: { fontSize: 14, color: '#6B7280', marginTop: 5 },

    infoSection: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 20,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    detailLabel: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
    valueRow: { flexDirection: 'row', alignItems: 'center' },
    detailValue: { fontSize: 15, color: '#111827', fontWeight: 'bold' },

    actionSection: { marginTop: 10 },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },
    actionItemText: { flex: 1, fontSize: 16, fontWeight: '600', color: '#374151', marginLeft: 12 },
    logoutItem: { borderColor: '#FEE2E2' },
    logoutText: { color: '#EF4444' }
});

export default Profile;