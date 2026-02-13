import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Notifications = ({ onBack }) => {
    const notificationData = [
        {
            id: 1,
            title: 'Membership Expiring Soon',
            message: 'Your membership expires in 5 days. Renew now!',
            time: '2 hours ago',
            icon: 'bell-outline',
            color: '#F97316',
        },
        {
            id: 2,
            title: 'New Diet Plan',
            message: 'Your trainer has updated your diet plan.',
            time: '1 day ago',
            icon: 'bell-outline',
            color: '#3B82F6',
        },
        {
            id: 3,
            title: 'Milestone Achieved!',
            message: 'Congratulations! 25 visits this month 🥳',
            time: '2 days ago',
            icon: 'bell-outline',
            color: '#10B981',
        },
        {
            id: 4,
            title: 'Gym Holiday Notice',
            message: 'Gym will be closed on Jan 1, 2026',
            time: '3 days ago',
            icon: 'bell-outline',
            color: '#3B82F6',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {notificationData.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.notificationCard}>
                        <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                            <MaterialCommunityIcons name={item.icon} size={22} color={item.color} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.notiTitle}>{item.title}</Text>
                            <Text style={styles.notiMessage}>{item.message}</Text>
                            <Text style={styles.notiTime}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
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
        paddingBottom: 15,
        paddingTop: Platform.OS === 'android' ? 45 : 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: '#111827' },
    scrollContent: { padding: 20 },
    notificationCard: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    textContainer: { flex: 1 },
    notiTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
    notiMessage: { fontSize: 14, color: '#6B7280', marginTop: 4, lineHeight: 20 },
    notiTime: { fontSize: 12, color: '#9CA3AF', marginTop: 8 }
});

export default Notifications;