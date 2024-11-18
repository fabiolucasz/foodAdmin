import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../styles';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Login() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();

  function handleLogin() {
     if (!userMail || !userPass) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        console.log(userCredential.user);
        router.replace('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      }); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Digite sua senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable
          style={styles.subButton}
          onPress={() => router.push('/login/replacePass')}
        >
          <Text style={styles.subTextButton}>Esqueci minha senha</Text>
        </Pressable>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
