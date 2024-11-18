import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Switch, Alert } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function AddProduct() {
    const router = useRouter();

    const [product, setProduct] = useState({
        nome: "",
        preco: "",
        descricao: "",
        imagem: "",
        categoria: "",
        qnt_estoque: "",
        disponibilidade: true,
    });

    const handleSave = async () => {
        // Validação dos campos obrigatórios
        if (!product.nome || !product.preco || !product.categoria) {
            Alert.alert("Erro", "Por favor, preencha os campos obrigatórios: Nome, Preço e Categoria.");
            return;
        }

        try {
            // Converte os valores para os tipos esperados pela API
            const payload = {
                nome: product.nome.trim(),
                preco: parseFloat(product.preco),
                descricao: product.descricao.trim() || "",
                imagem: product.imagem.trim() || "",
                categoria: product.categoria.trim(),
                qnt_estoque: parseInt(product.qnt_estoque, 10) || 0,
                disponibilidade: Boolean(product.disponibilidade),
            };

            console.log("Enviando payload ao servidor:", payload);

            await axios.post("http://192.168.0.4:8000/admin/cadastrar/", payload);


            Alert.alert("Sucesso", "Produto adicionado com sucesso!");
            router.push("/dashboard");
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            Alert.alert("Erro", "Não foi possível adicionar o produto.");
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.label}>Nome*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do produto"
                    value={product.nome}
                    onChangeText={(text) => setProduct({ ...product, nome: text })}
                />
                <Text style={styles.label}>Preço*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Preço do produto (ex: 19.99)"
                    keyboardType="numeric"
                    value={product.preco}
                    onChangeText={(text) => setProduct({ ...product, preco: text.replace(/[^0-9.]/g, "") })}
                />
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição do produto"
                    value={product.descricao}
                    onChangeText={(text) => setProduct({ ...product, descricao: text })}
                />
                <Text style={styles.label}>Imagem (URL)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="URL da imagem"
                    value={product.imagem}
                    onChangeText={(text) => setProduct({ ...product, imagem: text })}
                />
                <Text style={styles.label}>Categoria*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Categoria do produto"
                    value={product.categoria}
                    onChangeText={(text) => setProduct({ ...product, categoria: text })}
                />
                <Text style={styles.label}>Quantidade em Estoque</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Quantidade em estoque"
                    keyboardType="numeric"
                    value={product.qnt_estoque}
                    onChangeText={(text) => setProduct({ ...product, qnt_estoque: text.replace(/[^0-9]/g, "") })}
                />
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Disponível para venda:</Text>
                    <Switch
                        value={product.disponibilidade}
                        onValueChange={(value) => setProduct({ ...product, disponibilidade: value })}
                    />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Adicionar Produto</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    footer: {
        padding: 15,
        borderTopWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#f9f9f9",
    },
    saveButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
