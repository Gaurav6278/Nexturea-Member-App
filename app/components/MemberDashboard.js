import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AttendanceHistory from './AttendanceHistory';
import DietPlan from './DietPlan';
import MyTrainer from './MyTrainer';
import Notifications from './Notifications';
import PaymentHistory from './PaymentHistory';
import Profile from './Profile';

const MemberDashboard = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [showHistory, setShowHistory] = useState(false);
    const [showTrainer, setShowTrainer] = useState(false);
    const [showDiet, setShowDiet] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const handleTabPress = (tabName) => {
        setShowHistory(false);
        setShowTrainer(false);
        setShowDiet(false);
        setShowNotifications(false);

        if (tabName === 'Attendance') {
            setShowHistory(true);
            setActiveTab('Home');
        } else {
            setActiveTab(tabName);
        }
    };

    const renderHomeContent = () => (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome back,</Text>
                        <Text style={styles.userName}>John Doe</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.notificationBtn}
                        onPress={() => setShowNotifications(true)}
                    >
                        <MaterialCommunityIcons name="bell-outline" size={26} color="#FFF" />
                        <View style={styles.notificationBadge}><Text style={styles.badgeText}>3</Text></View>
                    </TouchableOpacity>
                </View>

                <View style={styles.planCard}>
                    <View style={styles.planHeader}>
                        <Text style={styles.planLabel}>Active Membership</Text>
                        <View style={styles.activeTag}><Text style={styles.activeTagText}>Active</Text></View>
                    </View>
                    <Text style={styles.planTitle}>Premium Plan</Text>
                    <View style={styles.planFooter}>
                        <View>
                            <Text style={styles.footerLabel}>Expires on</Text>
                            <Text style={styles.footerValue}>Dec 31, 2025</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.footerLabel}>Days left</Text>
                            <Text style={styles.footerValue}>5 days</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.statsRow}>
                <View style={styles.statBox}>
                    <MaterialCommunityIcons name="pulse" size={24} color="#4F46E5" />
                    <View>
                        <Text style={styles.statNumber}>24</Text>
                        <Text style={styles.statLabel}>Visits This Month</Text>
                    </View>
                </View>
                <View style={styles.statBox}>
                    <MaterialCommunityIcons name="trending-up" size={24} color="#10B981" />
                    <View>
                        <Text style={styles.statNumber}>85%</Text>
                        <Text style={styles.statLabel}>Attendance Rate</Text>
                    </View>
                </View>
            </View>

            <View style={styles.actionList}>
                <ActionItem
                    icon="calendar-check"
                    title="Attendance History"
                    sub="View your check-ins"
                    onPress={() => setShowHistory(true)}
                />
                <ActionItem icon="clock-outline" title="Gym Traffic" sub="Check peak hours" />
                <ActionItem
                    icon="account-group"
                    title="My Trainer"
                    sub="View trainer details"
                    onPress={() => setShowTrainer(true)}
                />
                <ActionItem
                    icon="food-apple"
                    title="Diet Plan"
                    sub="Your nutrition guide"
                    color="#10B981"
                    onPress={() => setShowDiet(true)}
                />
            </View>
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                {showNotifications ? (
                    <Notifications onBack={() => setShowNotifications(false)} />
                ) : showHistory ? (
                    <AttendanceHistory onBack={() => setShowHistory(false)} />
                ) : showTrainer ? (
                    <MyTrainer onBack={() => setShowTrainer(false)} />
                ) : showDiet ? (
                    <DietPlan onBack={() => setShowDiet(false)} />
                ) : activeTab === 'Payment' ? (
                    <PaymentHistory onBack={() => setActiveTab('Home')} />
                ) : activeTab === 'Profile' ? (
                    <Profile
                        onBack={() => setActiveTab('Home')}
                        onLogout={onLogout}
                    />
                ) : (
                    activeTab === 'Home' && renderHomeContent()
                )}
            </View>

            {/* Bottom Tabs */}
            <View style={styles.tabBar}>
                <TabItem
                    icon="home"
                    label="Home"
                    active={activeTab === 'Home' && !showHistory && !showTrainer && !showDiet && !showNotifications}
                    onPress={() => handleTabPress('Home')}
                />
                <TabItem
                    icon="calendar-text"
                    label="Attendance"
                    active={showHistory}
                    onPress={() => handleTabPress('Attendance')}
                />
                <TabItem
                    icon="history"
                    label="Payment"
                    active={activeTab === 'Payment'}
                    onPress={() => handleTabPress('Payment')}
                />
                <TabItem
                    icon="account"
                    label="Profile"
                    active={activeTab === 'Profile'}
                    onPress={() => handleTabPress('Profile')}
                />
            </View>
        </View>
    );
};
const ActionItem = ({ icon, title, sub, color = "#4F46E5", onPress }) => (
    <TouchableOpacity style={styles.actionItem} onPress={onPress}>
        <View style={[styles.actionIconBox, { backgroundColor: `${color}15` }]}>
            <MaterialCommunityIcons name={icon} size={22} color={color} />
        </View>
        <View style={styles.actionText}>
            <Text style={styles.actionTitle}>{title}</Text>
            <Text style={styles.actionSub}>{sub}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={20} color="#9CA3AF" />
    </TouchableOpacity>
);

const TabItem = ({ icon, label, active, onPress }) => (
    <TouchableOpacity style={styles.tabItem} onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={24} color={active ? '#4F46E5' : '#9CA3AF'} />
        <Text style={[styles.tabLabel, active && styles.activeTabLabel]}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    scrollContent: { paddingBottom: 100 },
    header: { backgroundColor: '#4F46E5', paddingHorizontal: 20, paddingTop: 50, paddingBottom: 40 },
    headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
    welcomeText: { color: 'rgba(255,255,255,0.7)', fontSize: 14 },
    userName: { color: '#FFF', fontSize: 26, fontWeight: 'bold' },
    notificationBtn: { width: 45, height: 45, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
    notificationBadge: { position: 'absolute', top: 8, right: 8, backgroundColor: '#EF4444', width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#4F46E5' },
    badgeText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
    planCard: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
    planHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    planLabel: { color: '#FFF', opacity: 0.8, fontSize: 12 },
    activeTag: { backgroundColor: '#10B981', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
    activeTagText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
    planTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    planFooter: { flexDirection: 'row', justifyContent: 'space-between' },
    footerLabel: { color: '#FFF', opacity: 0.6, fontSize: 10 },
    footerValue: { color: '#FFF', fontSize: 13, fontWeight: '600', marginTop: 2 },
    statsRow: { flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' },
    statBox: { backgroundColor: '#FFF', width: '48%', padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    statNumber: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginLeft: 10 },
    statLabel: { fontSize: 11, color: '#6B7280', marginLeft: 10 },
    actionList: { paddingHorizontal: 20, marginTop: 20 },
    actionItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 12, elevation: 1 },
    actionIconBox: { width: 45, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    actionText: { flex: 1 },
    actionTitle: { fontSize: 16, fontWeight: '600', color: '#111827' },
    actionSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
    tabBar: { flexDirection: 'row', backgroundColor: '#FFF', height: 80, paddingBottom: 15, borderTopWidth: 1, borderTopColor: '#E5E7EB', justifyContent: 'space-around', alignItems: 'center' },
    tabItem: { alignItems: 'center', flex: 1 },
    tabLabel: { fontSize: 11, color: '#9CA3AF', marginTop: 4 },
    activeTabLabel: { color: '#4F46E5', fontWeight: 'bold' },
    centeredContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyTitle: { fontSize: 18, color: '#6B7280' }
});

export default MemberDashboard;