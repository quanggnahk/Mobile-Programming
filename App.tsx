import { BookGrid } from "@/components/BookGrid";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { BOOKS } from "@/types/data";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CategoryChips } from "../components/CategoryChips";
import { Header } from "../components/Header";

export default function App() {
  const [carCount, setCartCount] = useState(0);
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <CategoryChips />
        <Text style={styles.sectionTitle}> Menu</Text>
        <BookGrid
          books={BOOKS}
          onPressBook={(id) => console.log("Mở sách", id)}
        />
      </ScrollView>
      <FloatingCartButton
        count={carCount}
        onPress={() => setCartCount((n) => n + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 16 },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
});
