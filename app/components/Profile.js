import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Profile = ({ onBack, onLogout }) => {
    const [isEditing, setIsEditing] = useState(false);

    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@email.com',
        mobile: '+1 234-567-8900',
        memberId: '#MB12345',
        plan: 'Premium Monthly',
        branch: 'Downtown Branch',
        memberSince: 'Jan 15, 2025'
    });

    const handleSave = () => {
        setIsEditing(false);
        // Add API call here to save data to your database
        console.log("Saved User Data:", userData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header - Fixed Alignment */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={onBack}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>

                {isEditing && (
                    <TouchableOpacity onPress={handleSave} style={styles.saveHeaderBtn}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                )}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Main Profile Card - Centered Content */}
                <View style={styles.mainCard}>
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarText}>JD</Text>
                        <TouchableOpacity style={styles.editPhotoBadge}>
                            <MaterialCommunityIcons name="camera" size={16} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    {isEditing ? (
                        <TextInput
                            style={styles.nameInput}
                            value={userData.name}
                            onChangeText={(text) => setUserData({ ...userData, name: text })}
                            placeholder="Enter Name"
                            autoFocus
                        />
                    ) : (
                        <Text style={styles.userNameText}>{userData.name}</Text>
                    )}
                    <Text style={styles.memberIdText}>Member ID: {userData.memberId}</Text>

                    {!isEditing && (
                        <TouchableOpacity
                            style={styles.editToggleBtn}
                            onPress={() => setIsEditing(true)}
                        >
                            <MaterialCommunityIcons name="account-edit-outline" size={18} color="#4F46E5" />
                            <Text style={styles.editToggleText}>Edit Profile</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Detail List Items */}
                <View style={styles.infoSection}>
                    <DetailRow
                        label="Mobile Number"
                        value={userData.mobile}
                        isEditing={isEditing}
                        onChange={(text) => setUserData({ ...userData, mobile: text })}
                        icon="phone-outline"
                    />
                    <DetailRow
                        label="Email"
                        value={userData.email}
                        isEditing={isEditing}
                        onChange={(text) => setUserData({ ...userData, email: text })}
                        icon="email-outline"
                    />
                    <DetailRow label="Membership Plan" value={userData.plan} icon="card-account-details-outline" />
                    <DetailRow label="Gym Branch" value={userData.branch} icon="map-marker-outline" />
                    <DetailRow label="Member Since" value={userData.memberSince} icon="calendar-account" />
                </View>

                {/* Action List Items */}
                <View style={styles.actionSection}>
                    {!isEditing && (
                        <TouchableOpacity style={styles.actionItem}>
                            <MaterialCommunityIcons name="help-circle-outline" size={22} color="#374151" />
                            <Text style={styles.actionItemText}>Help & Support</Text>
                            <MaterialCommunityIcons name="chevron-right" size={20} color="#9CA3AF" />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={[styles.actionItem, styles.logoutItem]} onPress={onLogout}>
                        <MaterialCommunityIcons name="logout" size={20} color="#EF4444" />
                        <Text style={[styles.actionItemText, styles.logoutText]}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const DetailRow = ({ label, value, isEditing, onChange, icon }) => (
    <View style={styles.detailRow}>
        <View style={styles.labelContainer}>
            <MaterialCommunityIcons name={icon} size={18} color="#6B7280" />
            <Text style={styles.detailLabel}>{label}</Text>
        </View>
        <View style={styles.valueRow}>
            {isEditing && onChange ? (
                <TextInput
                    style={styles.rowInput}
                    value={value}
                    onChangeText={onChange}
                    selectionColor="#4F46E5"
                />
            ) : (
                <Text style={styles.detailValue}>{value}</Text>
            )}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: Platform.OS === 'android' ? 45 : 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
        marginLeft: 15
    },
    saveHeaderBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 8
    },
    saveText: { color: '#FFF', fontWeight: 'bold' },
    scrollContent: { padding: 20, paddingBottom: 40 },

    mainCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 25,
        alignItems: 'center', // Ensures JD, Name, and Member ID are centered
        justifyContent: 'center',
        marginBottom: 25,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
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
    editPhotoBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#111827',
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: { color: '#FFF', fontSize: 36, fontWeight: 'bold' },
    userNameText: { fontSize: 22, fontWeight: 'bold', color: '#111827', textAlign: 'center' },
    nameInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F46E5',
        borderBottomWidth: 1,
        borderBottomColor: '#4F46E5',
        width: '80%',
        textAlign: 'center',
        paddingBottom: 5
    },
    memberIdText: { fontSize: 13, color: '#6B7280', marginTop: 8, textAlign: 'center' },
    editToggleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20
    },
    editToggleText: { color: '#4F46E5', fontSize: 14, fontWeight: '600', marginLeft: 6 },

    infoSection: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 20,
    },
    detailRow: {
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    labelContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    detailLabel: { fontSize: 13, color: '#6B7280', fontWeight: '500', marginLeft: 8 },
    detailValue: { fontSize: 15, color: '#111827', fontWeight: '600' },
    rowInput: {
        fontSize: 15,
        color: '#4F46E5',
        fontWeight: '600',
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },

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