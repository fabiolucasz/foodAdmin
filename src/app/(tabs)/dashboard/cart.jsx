import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Button } from "react-native-paper";
import axios from "axios";

export default function Cart() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Captura o ID do produto da URL
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId) => {
    try {
      const res = await axios.get(`http://192.168.0.4:8000/admin/produtos/${productId}`);
      setProduct(res.data);
      setCartItems((prevItems) => [...prevItems, res.data]); // Adiciona o produto ao carrinho
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      {cartItems.length > 0 ? (
        cartItems.map((item, key) => (
          <View key={key} style={styles.cartItem}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
            </View>
            <Button
              mode="contained"
              color="red"
              onPress={() => handleRemoveItem(item.id)}
            >
              Remover
            </Button>
          </View>
        ))
      ) : (
        <Text style={styles.emptyCart}>Seu carrinho está vazio!</Text>
      )}
      <Pressable style={styles.checkoutButton} onPress={() => alert("Finalizar Compra")}>
        <Text style={styles.checkoutText}>Finalizar Compra</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 32,
  },
  checkoutButton: {
    marginTop: 16,
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  checkoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
