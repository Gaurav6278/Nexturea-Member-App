import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RoleSelection = ({ onSelectMember, onSelectTrainer }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>

          <View style={styles.logoCircle}>
            <Image
              source={require('../../assets/images/FabNexLogo-removebg-preview.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>FitZone Wireframes</Text>
          <Text style={styles.subtitle}>Select a role to explore the app flow</Text>

          {/* Member Button - Now calls onSelectMember */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={onSelectMember}
          >
            <View style={[styles.iconBox, { backgroundColor: '#E0E7FF' }]}>
              <Text style={{ fontSize: 24 }}>👤</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Gym Member</Text>
              <Text style={styles.cardSub}>View membership, attendance & payment</Text>
            </View>
          </TouchableOpacity>

          {/* Trainer Button - Now calls onSelectTrainer */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={onSelectTrainer}
          >
            <View style={[styles.iconBox, { backgroundColor: '#F3E8FF' }]}>
              <Text style={{ fontSize: 24 }}>🏋️</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Gym Trainer</Text>
              <Text style={styles.cardSub}>Manage members, diet plans & attendance</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.footerInfo}>
            Interactive wireframes showing complete user flows
          </Text>

        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4F46E5' },
  safeArea: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 25 },
  logoCircle: {
    width: 120, height: 120, backgroundColor: '#FFFFFF', borderRadius: 60,
    alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 30,
    elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3, shadowRadius: 5,
  },
  logoImage: { width: 80, height: 80 },
  title: { fontSize: 30, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: 50 },
  card: {
    backgroundColor: '#fff', padding: 18, borderRadius: 20, flexDirection: 'row',
    alignItems: 'center', marginBottom: 16, elevation: 4, minHeight: 100,
  },
  iconBox: { width: 55, height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  textContainer: { flex: 1, justifyContent: 'center' },
  cardTitle: { fontSize: 19, fontWeight: '700', color: '#1F2937' },
  cardSub: { fontSize: 13, color: '#6B7280', lineHeight: 18, marginTop: 2 },
  footerInfo: { fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', marginTop: 30 },
});

export default RoleSelection;