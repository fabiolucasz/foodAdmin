import { View, Pressable } from "react-native";
import { auth } from "../../../firebase.config";
import { useRouter } from "expo-router";
import { styles } from "../../../styles";
import { signOut } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UserProfile() {
  const router = useRouter();

  function logout() {
    signOut(auth)
      .then(() => {
        alert('Você desconectou-se do sistema.');
        router.replace('/');
      })
      .catch((error) => {
        alert(error.message);
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
