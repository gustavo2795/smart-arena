import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SignInForm from '../components/SignInForm/SignInForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';


const Login = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (
        <LinearGradient style={{flex: 1}} colors={['#00b09b', '#96c93d']}>
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#cccccc'  />
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo2.png')} style={{ width: 200, height: 200 }} />
                <Text style={styles.title}>Smart Arena</Text>
                <Text style={{ fontSize: 16, color: '#ffffff' }}>Organizando o seu esporte</Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.formContainer}>
                {isRegister ? <SignUpForm setIsRegister={setIsRegister} /> : <SignInForm setIsRegister={setIsRegister} />}
            </KeyboardAvoidingView>
            
        </SafeAreaView>
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    statusBar: {
        backgroundColor: '#cccccc'
    },
    logoContainer: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    title: {
        fontSize: 54,
        fontWeight: '700',
        color: 'white',
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 40,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

export default Login;
