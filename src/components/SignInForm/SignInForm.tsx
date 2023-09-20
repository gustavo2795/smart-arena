//import liraries
import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../Input/Input';

interface FormProps {
    setIsRegister: () => void
}

// create a component
const SignInForm = ({ setIsRegister }): ReactElement<FormProps> => {
    return (
        <ScrollView>
            <Text style={{fontSize: 22, fontWeight: '700', marginVertical: 15}}>Entre com sua conta</Text>
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
                <TouchableOpacity onPress={() => setIsRegister(true)}>
                    <Text 
                        style={{fontSize: 16, fontWeight: '400', color: '#00b09b', marginVertical: 15, marginLeft: 10}}
                    >
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => console.log('teste')}>
                    <Text 
                        style={{fontSize: 16, fontWeight: '400', color: '#00b09b', marginVertical: 15, marginLeft: 10}}
                    >
                        Esqueci a senha
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
export default SignInForm;
