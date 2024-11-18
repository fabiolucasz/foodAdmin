import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { styles } from "../../../styles";
import axios from "axios";

export default function Reports() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Relatórios em breve</Text>
    </View>
  );
}