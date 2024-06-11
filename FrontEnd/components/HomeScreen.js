import React from "react";
import { View, StyleSheet, Switch, TextInput, Button } from "react-native";
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import { Component, useEffect, useState } from "react";


export default function HomeScreen({ navigation, toggleTheme, isDarkMode }) {
  const theme = useTheme();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => 
  {
    //Make API Call here
    

    
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <CustomText style={[styles.title]}>Caudate 🧠</CustomText>  
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        style={styles.switch}
      />

      <TextInput
      label="Username"
      style={{width:142}}
      placeholder="Username"
      mode="outlined"
      value={username}
      onChangeText={username => setUsername(username)}
      />

      <TextInput
      label="Password"
      style={{width:142}}
      placeholder="Password"
      mode="outlined"
      value={password}
      onChangeText={password => setPassword(password)}
      />

     

        <CustomButton onPress={login} style={styles.button}>
          Login
        </CustomButton>





      <View style={styles.buttonContainer}>
        <CustomButton onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
          Let's Go! 🚀
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  title: {
    margin: 30,
    fontSize: 40,
    alignSelf: "center"
  },
  switch: {
    marginBottom: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
  },
  button: {
    width: '100%',
  },
});