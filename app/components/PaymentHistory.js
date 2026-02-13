import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PaymentHistory = ({ onBack }) => {
    const payments = [
        { id: 1, plan: 'Premium Monthly', date: 'Nov 1, 2025', amount: '$99.00', method: 'Credit Card', status: 'Paid' },
        { id: 2, plan: 'Premium Monthly', date: 'Oct 1, 2025', amount: '$99.00', method: 'Credit Card', status: 'Paid' },
        { id: 3, plan: 'Premium Monthly', date: 'Sep 1, 2025', amount: '$99.00', method: 'Debit Card', status: 'Paid' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment History</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Total Paid Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryLabel}>Total Paid</Text>
                    <Text style={styles.totalAmount}>$297.00</Text>
                    <Text style={styles.summaryPeriod}>Last 3 months</Text>
                </View>

                {/* Transaction List */}
                {payments.map((item) => (
                    <View key={item.id} style={styles.paymentCard}>
                        <View style={styles.cardTop}>
                            <View>
                                <Text style={styles.planName}>{item.plan}</Text>
                                <Text style={styles.planDate}>{item.date}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.amountText}>{item.amount}</Text>
                                <View style={styles.paidBadge}>
                                    <Text style={styles.paidText}>{item.status}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.cardBottom}>
                            <Text style={styles.methodLabel}>Payment Method</Text>
                            <Text style={styles.methodValue}>{item.method}</Text>
                        </View>

                        <TouchableOpacity style={styles.invoiceBtn}>
                            <Text style={styles.invoiceBtnText}>View Invoice</Text>
                        </TouchableOpacity>
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
        paddingBottom: 15,
        paddingTop: Platform.OS === 'android' ? 45 : 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: '#111827' },
    scrollContent: { padding: 20, paddingBottom: 100 },
    summaryCard: {
        backgroundColor: '#4F46E5',
        borderRadius: 20,
        padding: 25,
        marginBottom: 25,
        elevation: 4,
        shadowColor: '#4F46E5',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    summaryLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: '500' },
    totalAmount: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginVertical: 8 },
    summaryPeriod: { color: 'rgba(255,255,255,0.6)', fontSize: 12 },
    paymentCard: {
        backgroundColor: '#FFF',
        borderRadius: 18,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
    planName: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
    planDate: { fontSize: 13, color: '#6B7280', marginTop: 4 },
    amountText: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
    paidBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginTop: 6 },
    paidText: { color: '#059669', fontSize: 11, fontWeight: 'bold' },
    divider: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 15 },
    cardBottom: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    methodLabel: { color: '#9CA3AF', fontSize: 13 },
    methodValue: { color: '#111827', fontWeight: '600', fontSize: 13 },
    invoiceBtn: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    invoiceBtnText: { color: '#374151', fontWeight: 'bold', fontSize: 14 }
});

export default PaymentHistory;