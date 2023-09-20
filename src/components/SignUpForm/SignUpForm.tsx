//import liraries
import React, { Component, ReactElement } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../Input/Input';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth"

interface FormProps {
    setIsRegister: () => void
}

// create a component
const SignUpForm = ({ setIsRegister }): ReactElement<FormProps> => {

    function handleSignUp() {
        createUserWithEmailAndPassword(auth, 'teste@gmail.com', '123456')
        .then((userCredential) => {
            console.log(userCredential)
            alert("conta criada")
        })
        .catch((error) => { console.log(error)})
    }

    return (
        <ScrollView>
            <Text style={{fontSize: 22, fontWeight: '700', marginVertical: 15}}>Criar conta</Text>
            <Input
                placeholder='Digite seu email'
                keyboardType='email-address'
                label='Email'
            />
            <Input
                placeholder='Digite sua senha'
                keyboardType='visible-password'
                label='Senha'
                isPassword={true}
            />
            <Input
                placeholder='Confirme sua senha'
                keyboardType='visible-password'
                label='Senha'
                isPassword={true}
            />
            <TouchableOpacity onPress={() => handleSignUp()}>
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
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#ffffff'}}>Criar</Text>
            </LinearGradient>
            </TouchableOpacity>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Text style={{fontSize: 16, fontWeight: '400', marginVertical: 15}}>Já possui conta?</Text>
                <TouchableOpacity onPress={() => setIsRegister(false)}>
                <Text 
                    style={{fontSize: 16, fontWeight: '400', color: '#00b09b', marginVertical: 15, marginLeft: 10}}
                >
                    Entrar
                </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
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

//make this component available to the app
export default SignUpForm;
