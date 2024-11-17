import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../../styles';
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';


export default function NewUser() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userRePass, setUserRePass] = useState('');
  const router = useRouter();

  function newUser() {
    if (userMail === '' || userPass === '' || userRePass ===''){
      alert('Todos os campos devem ser preenchidos');
    }
    if (userPass !== userRePass){
      alert('a senha e a confirmação não são iguais')
    }else{
      createUserWithEmailAndPassword(auth, userMail, userPass)
      .then((UserCredencial) => {
        const user = UserCredencial.user;
        alert('O usuário ' + userMail + ' foi criado. Faça o login');
        router.replace('/');
      })
    }

  }

  function handleLogin() {
    router.replace('/')
  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Cadastre-se</Text>
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
      
      />

<TextInput style={styles.formInput}
      placeholder="Confirme a senha"
      autoCapitalize="none"
      secureTextEntry
      value={userRePass}
      onChangeText={setUserRePass}
      
      />





      <Pressable style={styles.formButton}
      onPress={newUser}>
      <Text style={styles.textButton}>Cadastrar</Text>
      </Pressable>
      <View style={styles.subContainer}>
      

      <Pressable style={styles.subButton} onPress={handleLogin}>
        <Text style={styles.subTextButton}>
          Já tenho uma conta
        </Text>
      </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


