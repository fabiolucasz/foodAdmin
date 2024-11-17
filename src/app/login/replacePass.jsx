import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../../styles';
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';


export default function ReplacePass() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userRePass, setUserRePass] = useState('');
  const router = useRouter();

  function replacePass() {
    if (userMail !== ''){
      sendPasswordResetEmail(auth, userMail)
      .then(() =>{
        alert('Foi enviado um email para ' + userMail + '. Verifique sua caixa de email.');
        router.replace('/');
      })
      .catch((error)=> {
        const errorMessage = error.message;
        alert('Alguma coisa não deu certo.' + errorMessage + '. Tente novamente ou pressione voltar');
        return;
      })
    }else {
        alert('É preciso informar um E-mail válido.')
    }
    

  }

  function handleLogin() {
    router.replace('/')
  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Redefina sua Senha</Text>
      <TextInput style={styles.formInput}
      placeholder='Informe o E-mail'
      keyboardType='email-address'
      autoCapitalize='none'
      autoComplete='email'
      value={userMail}
      onChangeText={setUserMail}
      
      />


      <Pressable style={styles.formButton}
      onPress={replacePass}>
      <Text style={styles.textButton}>Redefinir</Text>
      </Pressable>
      <View style={styles.subContainer}>
      

      <Pressable style={styles.subButton} onPress={handleLogin}>
        <Text style={styles.subTextButton}>
          Voltar
        </Text>
      </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


