# Nexturea Gym Member App

A high-performance, role-based mobile application built with **React Native** and **Expo**. This application serves as a centralized dashboard for gym members to track their fitness progress, manage nutrition, view attendance logs, and handle membership payments within a unified, seamless UI.

## 🌟 Key Features

* **Role-Based Navigation:** Specialized entry points and dashboards for both Members and Trainers.
* **Persistent Navigation System:** Custom-engineered internal sub-view routing that ensures bottom navigation tabs remain visible and functional across Attendance, Diet, and Payment screens.
* **Diet & Nutrition Module:** Structured daily meal plans categorized by Breakfast, Snacks, Lunch, and Dinner with integrated trainer notes.
* **Attendance Tracking:** Detailed check-in history featuring "Present" and "Absent" status badges and monthly summary statistics.
* **Membership Profile:** A comprehensive profile management screen displaying member ID, plan details, and contact info.
* **Notification Center:** A categorized alert system for membership expiries, updated diet plans, and gym announcements with platform-specific UI optimizations.
* **Secure Session Management:** A global logout flow that safely resets the application state and clears user roles.

## 🛠️ Tech Stack

* **Frontend Framework:** React Native (Expo)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Icons:** Material Community Icons (@expo/vector-icons)
* **Styling:** StyleSheet API with Platform-specific padding adjustments for Android notches and iOS status bars.

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gaurav6278/Nexturea-Member-App.git

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npx expo start
