import React, { useCallback, useMemo } from "react";
import { SafeAreaView, FlatList, Text, View, StyleSheet } from "react-native";

// 1) DADOS MOCKADOS
const produtos = [
  { id: "1", nome: "Camiseta Oversized", preco: 79.9, categoria: "Roupas" },
  { id: "2", nome: "Calça Jeans", preco: 129.9, categoria: "Roupas" },
  { id: "3", nome: "Tênis Running", preco: 349.0, categoria: "Calçados" },
  { id: "4", nome: "Boné Trucker", preco: 59.9, categoria: "Acessórios" },
  { id: "5", nome: "Jaqueta Corta-Vento", preco: 199.9, categoria: "Roupas" },
  { id: "6", nome: "Meia Cano Alto", preco: 19.9, categoria: "Acessórios" },
];

// 2) FORMATADOR DE PREÇO BRL (pt-BR)
const formatarBRL = (valor) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    valor
  );

export default function App() {
  // 3) MEMO: dados “congelados” (boa prática quando a lista é grande)
  const data = useMemo(() => produtos, []);

  // 4) ITEM DA LISTA (useCallback para evitar re-render desnecessário)
  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>{formatarBRL(item.preco)}</Text>
        </View>
        <Text style={styles.categoria}>{item.categoria}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>

      {/* 5) FLATLIST BÁSICA */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listaContent}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        initialNumToRender={8}
        windowSize={10}
      />
    </SafeAreaView>
  );
}

// 6) ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-900
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#e2e8f0", // slate-200
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  listaContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#111827", // gray-900
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1f2937", // gray-800
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  nome: {
    color: "#f8fafc", // slate-50
    fontSize: 16,
    fontWeight: "600",
    flexShrink: 1,
  },
  preco: {
    color: "#a7f3d0", // emerald-200
    fontSize: 16,
    fontWeight: "700",
  },
  categoria: {
    marginTop: 6,
    color: "#94a3b8", // slate-400
    fontSize: 13,
  },
});
