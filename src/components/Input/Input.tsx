import React, { Component, ReactElement } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native';

interface InputProps {
    label: string;
    placeholder: string;
    keyboardType: KeyboardTypeOptions
    isPassword: boolean
}

// create a component
const Input = ({ label, placeholder, keyboardType, isPassword=false }): ReactElement<InputProps> => {
    return (
        <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>
                {label}
            </Text>
        
            <View style={styles.container}>
                <TextInput 
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    style={{width: '100%'}}
                    secureTextEntry={isPassword}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        paddingLeft: 22,
        borderColor: '#cccccc'
    },
});

//make this component available to the app
export default Input;
