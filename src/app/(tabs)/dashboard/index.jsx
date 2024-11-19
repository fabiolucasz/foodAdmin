import { View, Text, ScrollView } from "react-native";
import { auth } from "../../../firebase.config";
import { useRouter } from "expo-router";
import { Button, Card } from "react-native-paper";
import axios from "axios";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../../../styles";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const currentUser = auth.currentUser;

  if (currentUser !== null) {

  } else {
    alert('É necessário estar logado');
    router.replace('/');
  };

  useFocusEffect(
    React.useCallback(() => {
      getProducts();
    }, [])
  );

  const getProducts = async () => {
    try {
      const res = await axios.get("http://192.168.0.4:8000/admin/produtos");
      setProducts(res.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://192.168.0.4:8000/admin/produtos/${id}/`);
      alert(`Produto com ID ${id} deletado com sucesso.`);
      getProducts();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Não foi possível deletar o produto.");
    }
  };

  const handleEdit = (id) => {
    router.push(`/(tabs)/edit?id=${id}`);
  };



  return (
    <ScrollView contentContainerStyle={styles.containerCard}>
      {products.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
      ) : (
        products.map((product, key) => (
          <Card key={key} style={styles.card}>
            <Card.Cover source={{ uri: product.imagem }} />
            <Card.Content>
              <Text style={styles.titleCard}>{product.nome}</Text>
              <Text>{product.descricao}</Text>
              <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
            </Card.Content>
            <Card.Actions>
              <Button style={styles.cardButtonDelete} onPress={() => handleDelete(product.id)}>
                <Ionicons name="trash" size={20} color={'white'} />
              </Button>
              <Button style={styles.cardButtonEdit} onPress={() => handleEdit(product.id)}>
                <Ionicons name="settings" size={20} color={'white'} />
              </Button>
            </Card.Actions>
          </Card>
        ))
      )}
    </ScrollView>
  );
}


