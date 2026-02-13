import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TrainerDashboard = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Trainer Portal</Text>
                    <Text style={styles.userName}>Coach Alex</Text>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>42</Text>
                        <Text style={styles.statLabel}>Total Members</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={[styles.statNumber, { color: '#10B981' }]}>12</Text>
                        <Text style={styles.statLabel}>Active Now</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Management Tools</Text>
                    <ToolItem icon="account-plus" title="Add New Member" sub="Register new gym joins" />
                    <ActionItem icon="clipboard-text-outline" title="Diet Plan Requests" sub="8 pending reviews" count={8} />
                    <ActionItem icon="qrcode-scan" title="Scan Attendance" sub="Manual check-in override" />
                    <ToolItem icon="chart-areaspline" title="Performance Analytics" sub="View gym growth stats" />
                </View>
            </ScrollView>

            <View style={styles.tabBar}>
                <TabItem icon="view-dashboard" label="Overview" active />
                <TabItem icon="account-group" label="Members" />
                <TabItem icon="chat-processing-outline" label="Messages" />
                <TabItem icon="cog-outline" label="Settings" />
            </View>
        </View>
    );
};

const ActionItem = ({ icon, title, sub, count }) => (
    <TouchableOpacity style={styles.toolCard}>
        <View style={styles.iconContainer}><MaterialCommunityIcons name={icon} size={24} color="#4F46E5" /></View>
        <View style={{ flex: 1 }}>
            <Text style={styles.toolTitle}>{title}</Text>
            <Text style={styles.toolSub}>{sub}</Text>
        </View>
        {count && <View style={styles.badge}><Text style={styles.badgeText}>{count}</Text></View>}
    </TouchableOpacity>
);

const ToolItem = ({ icon, title, sub }) => (
    <TouchableOpacity style={styles.toolCard}>
        <View style={styles.iconContainer}><MaterialCommunityIcons name={icon} size={24} color="#4F46E5" /></View>
        <View style={{ flex: 1 }}>
            <Text style={styles.toolTitle}>{title}</Text>
            <Text style={styles.toolSub}>{sub}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={20} color="#9CA3AF" />
    </TouchableOpacity>
);

const TabItem = ({ icon, label, active }) => (
    <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name={icon} size={24} color={active ? '#4F46E5' : '#9CA3AF'} />
        <Text style={[styles.tabLabel, active && { color: '#4F46E5' }]}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    scrollContent: { paddingBottom: 100 },
    header: { backgroundColor: '#4F46E5', padding: 30, paddingTop: 60, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
    welcomeText: { color: 'rgba(255,255,255,0.7)', fontSize: 14 },
    userName: { color: '#FFF', fontSize: 26, fontWeight: 'bold' },
    statsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: -20 },
    statBox: { backgroundColor: '#FFF', width: '47%', padding: 20, borderRadius: 20, elevation: 5 },
    statNumber: { fontSize: 24, fontWeight: 'bold', color: '#4F46E5' },
    statLabel: { fontSize: 12, color: '#6B7280', marginTop: 4 },
    section: { padding: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#111827' },
    toolCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 15, borderRadius: 15, marginBottom: 12, elevation: 2 },
    iconContainer: { width: 45, height: 45, backgroundColor: '#EEF2FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    toolTitle: { fontSize: 16, fontWeight: '600' },
    toolSub: { fontSize: 12, color: '#6B7280' },
    badge: { backgroundColor: '#EF4444', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
    badgeText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
    tabBar: { position: 'absolute', bottom: 0, flexDirection: 'row', backgroundColor: '#FFF', height: 85, paddingBottom: 20, borderTopWidth: 1, borderTopColor: '#E5E7EB' },
    tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    tabLabel: { fontSize: 10, color: '#9CA3AF', marginTop: 4 }
});

export default TrainerDashboard;