import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import MemberDashboard from './components/MemberDashboard';
import OTPScreen from './components/OTPScreen';
import OnboardingScreen from './components/OnboardingScreen';
import RoleSelection from './components/RoleSelection';
import TrainerDashboard from './components/TrainerDashboard';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('selection');
  const [selectedRole, setSelectedRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const transitionTo = (nextScreen, role = null) => {
    if (role) setSelectedRole(role);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentScreen(nextScreen);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedRole(null);
      setCurrentScreen('selection');
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) return <LoadingScreen />;

  if (currentScreen === 'selection') {
    return (
      <RoleSelection
        onSelectMember={() => transitionTo('login', 'member')}
        onSelectTrainer={() => transitionTo('login', 'trainer')}
      />
    );
  }

  if (currentScreen === 'login') {
    return (
      <LoginScreen
        onBack={() => setCurrentScreen('selection')}
        onLogin={() => transitionTo('otp')}
      />
    );
  }

  if (currentScreen === 'otp') {
    return (
      <OTPScreen
        onBack={() => setCurrentScreen('login')}
        onVerify={() => transitionTo('onboarding')}
      />
    );
  }

  if (currentScreen === 'onboarding') {
    return <OnboardingScreen onFinish={() => transitionTo('dashboard')} />;
  }

  if (currentScreen === 'dashboard') {
    return selectedRole === 'trainer' ? (
      <TrainerDashboard onLogout={handleLogout} />
    ) : (
      <MemberDashboard onLogout={handleLogout} />
    );
  }
}