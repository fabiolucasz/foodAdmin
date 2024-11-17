import { View, Text, Pressable, ScrollView, StyleSheet, Image } from "react-native";
import { auth } from "../../../firebase.config";
import { useRouter } from "expo-router";
import { Button, Card } from "react-native-paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "../../../styles";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const currentUser = auth.currentUser;
  
  if (currentUser !== null){
    
  } else{
    alert('É necessário estar logado');
    router.replace('/');
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://192.168.0.4:8000/admin/produtos");
      setProducts(res.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleCart = (id) => {
    router.push(`/dashboard/cart?id=${id}`);
  };


  return (
    <ScrollView contentContainerStyle={styles.containerCard}>
      {products.map((product, key) => (
        <Card key={key} style={styles.card}>
          <Card.Cover source={{ uri: product.imagem }} />
          <Card.Content>
            <Text style={styles.titleCard}>{product.nome}</Text>
            <Text>{product.descricao}</Text>
            <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
          </Card.Content>
          <Card.Actions>
            <Button style={styles.cardButton} onPress={() => handleCart(product.id)}>
              <Ionicons name="cart-sharp" size={32} color={'white'} />
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}


