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

  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace('/dashboard')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }

  function userLogin() {
    router.push('/dashboard')
  }

  function newUser() {
    router.push('/login/newUser');

  }

  function replacePass() {
    router.push('login/replacePass');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login</Text>
      <TextInput style={styles.formInput}
        placeholder='Informe o E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        value={userMail}
        onChangeText={setUserMail}

      ></TextInput>
      <TextInput style={styles.formInput}
        placeholder="Insira a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}

      ></TextInput>
      <Pressable style={styles.formButton}
        onPress={userLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton} onPress={replacePass}>
          <Text style={styles.subTextButton}>
            Esqueci minha senha
          </Text>
        </Pressable>

        <Pressable style={styles.subButton} onPress={newUser}>
          <Text style={styles.subTextButton}>
            Novo usuário
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


