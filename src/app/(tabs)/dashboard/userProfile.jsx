import { View, Pressable } from "react-native";
import { auth } from "../../../firebase.config";
import { useRouter } from "expo-router";
import { styles } from "../../../styles";
import { signOut } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UserProfile() {
  const router = useRouter(); // Certifique-se de inicializar o hook aqui

  function logout() {
    signOut(auth)
      .then(() => {
        alert('Você desconectou-se do sistema.');
        router.replace('/'); // Redireciona para a página de login
      })
      .catch((error) => {
        alert(error.message); // Corrige o acesso à mensagem de erro
      });
  }

  return (
    <View style={styles.topBar}>
      <Pressable onPress={logout}>
        <Ionicons name="log-out" size={32} color="white" />
      </Pressable>
    </View>
  );
}
