import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../components/Input/Input';

const Login = () => {
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
                <ScrollView>
                    <Text style={{fontSize: 22, fontWeight: '700', marginVertical: 15}}>Entre com sua conta</Text>
                    <Input
                        placeholder='Digite seu email'
                        keyboardType='email-address'
                        label='Email'
                    />
                    <Input
                        placeholder='Digite sua senha'
                        keyboardType='password'
                        label='Senha'
                        isPassword={true}
                    />
                    <TouchableOpacity onPress={() => console.log('teste')}>
                    <LinearGradient 
                        style={{
                            width: '100%',
                            height: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 12,
                            marginVertical: 15
                        }} 
                        colors={['#00b09b', '#96c93d']}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#ffffff'}}>Entrar</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <Text style={{fontSize: 16, fontWeight: '400', marginVertical: 15}}>Não possui conta?</Text>
                        <TouchableOpacity onPress={() => console.log('cadastrar')}>
                        <Text 
                            style={{fontSize: 16, fontWeight: '400', color: '#00b09b', marginVertical: 15, marginLeft: 10}}
                        >
                            Cadastrar
                        </Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
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
