import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DietPlan = ({ onBack }) => {
    const mealSections = [
        {
            title: 'Breakfast',
            time: '7:00 AM - 8:00 AM',
            items: [
                { name: 'Oatmeal with berries', qty: '1 bowl' },
                { name: 'Egg whites', qty: '3 eggs' },
                { name: 'Green tea', qty: '1 cup' },
            ]
        },
        {
            title: 'Mid-Morning Snack',
            time: '10:30 AM',
            items: [
                { name: 'Mixed nuts', qty: '30g' },
                { name: 'Apple', qty: '1 medium' },
            ]
        },
        {
            title: 'Lunch',
            time: '1:00 PM - 2:00 PM',
            items: [
                { name: 'Grilled chicken breast', qty: '150g' },
                { name: 'Brown rice', qty: '1 cup' },
                { name: 'Steamed vegetables', qty: '1 cup' },
                { name: 'Salad', qty: '1 bowl' },
            ]
        },
        {
            title: 'Evening Snack',
            time: '5:00 PM',
            items: [
                { name: 'Protein shake', qty: '1 scoop' },
                { name: 'Banana', qty: '1 medium' },
            ]
        },
        {
            title: 'Dinner',
            time: '8:00 PM',
            items: [
                { name: 'Grilled fish', qty: '150g' },
                { name: 'Quinoa', qty: '½ cup' },
                { name: 'Roasted vegetables', qty: '1 cup' },
            ]
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Diet Plan</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Goal Card */}
                <View style={styles.goalCard}>
                    <Text style={styles.goalLabel}>Current Goal</Text>
                    <Text style={styles.goalTitle}>Weight Loss & Muscle Gain</Text>
                    <View style={styles.goalStats}>
                        <View>
                            <Text style={styles.statVal}>2200 kcal/day</Text>
                            <Text style={styles.statLabel}>Calories</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.statVal}>165g/day</Text>
                            <Text style={styles.statLabel}>Protein</Text>
                        </View>
                    </View>
                </View>

                {/* Trainer's Note */}
                <View style={styles.noteCard}>
                    <View style={styles.noteHeader}>
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={20} color="#F59E0B" />
                        <Text style={styles.noteTitle}>Trainer's Note</Text>
                    </View>
                    <Text style={styles.noteText}>
                        Stay hydrated! Drink at least 3 liters of water daily. Avoid processed foods and sugary drinks.
                    </Text>
                </View>

                {/* Meal List */}
                {mealSections.map((section, idx) => (
                    <View key={idx} style={styles.mealCard}>
                        <View style={styles.mealHeader}>
                            <View>
                                <Text style={styles.mealTitle}>{section.title}</Text>
                                <Text style={styles.mealTime}>{section.time}</Text>
                            </View>
                            <MaterialCommunityIcons name="food-apple-outline" size={24} color="#9CA3AF" />
                        </View>
                        <View style={styles.mealItems}>
                            {section.items.map((item, i) => (
                                <View key={i} style={styles.mealItemRow}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemQty}>{item.qty}</Text>
                                </View>
                            ))}
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
        paddingBottom: 15,
        paddingTop: Platform.OS === 'android' ? 45 : 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    scrollContent: { padding: 20 },
    goalCard: {
        backgroundColor: '#059669',
        borderRadius: 24,
        padding: 25,
        marginBottom: 20,
        elevation: 8,
        shadowColor: '#10B981',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    goalLabel: {
        color: '#D1FAE5',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
    goalTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 12,
        letterSpacing: -0.5
    },
    goalStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.2)'
    },
    statVal: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
    statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
    noteCard: {
        backgroundColor: '#EEF2FF',
        padding: 20,
        borderRadius: 15,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#E0E7FF'
    },
    noteHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    noteTitle: { fontSize: 15, fontWeight: 'bold', color: '#1E1B4B', marginLeft: 8 },
    noteText: { fontSize: 14, color: '#4338CA', lineHeight: 20 },
    mealCard: {
        backgroundColor: '#FFF',
        borderRadius: 18,
        padding: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        elevation: 1
    },
    mealHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    mealTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
    mealTime: { fontSize: 13, color: '#6B7280', marginTop: 2 },
    mealItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6'
    },
    itemName: { fontSize: 15, color: '#374151' },
    itemQty: { fontSize: 15, fontWeight: 'bold', color: '#111827' }
});

export default DietPlan;