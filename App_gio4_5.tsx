import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { BookDetailScreen } from "../components/BookDetailScreen";
import { BookGrid } from "../components/BookGrid";
import { CartScreen } from "../components/CartScreen";
import { CategoryChips } from "../components/CategoryChips";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { Header } from "../components/Header";
import { TabBar, TabKey } from "../components/TabBar";

import { BOOKS, CartItem } from "../types/data";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;

  // 1. Thay thế số lượng bằng một MẢNG chứa các sản phẩm thật
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // 2. Tính số lượng tổng để hiển thị trên nút Floating Badge
  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // 3. Hàm xử lý thêm sách vào giỏ
  const handleAddToCart = () => {
    if (!selectedBook) return;

    setCartItems((prevItems) => {
      // Kiểm tra xem cuốn sách này đã nằm trong giỏ chưa
      const existingItemIndex = prevItems.findIndex(
        (item) => item.book.id === selectedBook.id,
      );

      if (existingItemIndex >= 0) {
        // Nếu đã có -> Tạo mảng mới, tăng quantity của cuốn sách đó lên 1
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        // Nếu chưa có -> Thêm thẳng sách vào mảng với số lượng là 1
        return [...prevItems, { book: selectedBook, quantity: 1 }];
      }
    });
  };

  if (selectedBook) {
    return (
      <SafeAreaView style={styles.root}>
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={handleAddToCart} // Gắn hàm xử lý mới vào đây
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <View style={{ flex: 1 }}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
              <Text style={styles.sectionTitle}>Menu Sản Phẩm</Text>
              <BookGrid
                books={BOOKS}
                onPressBook={(id) => setSelectedBookId(id)}
              />
            </ScrollView>

            <FloatingCartButton
              count={totalCartCount} // Truyền số lượng thực tế đã tính toán
              onPress={() => setActiveTab("cart")}
            />
          </View>
        );

      case "category":
        return (
          <View style={{ flex: 1 }}>
            <Header title="Tất cả danh mục" showIcons={false} />
            <ScrollView contentContainerStyle={styles.content}>
              <CategoryChips />
            </ScrollView>
          </View>
        );

      case "cart":
        // 4. Truyền mảng giỏ hàng thật vào màn hình CartScreen
        return (
          <View style={{ flex: 1 }}>
            <CartScreen items={cartItems} />
          </View>
        );

      case "account":
        return <Placeholder tab="account" />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {renderTabContent()}
        <TabBar active={activeTab} onChange={setActiveTab} />
        <TabBar active={activeTab} onChange={setActiveTab} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Placeholder({ tab }: { tab: TabKey }) {
  const note: Record<TabKey, string> = {
    home: "",
    category: "",
    cart: "",
    account: "Tính năng Tài khoản đang được phát triển.",
  };
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{note[tab]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFFFFF" },
  body: { flex: 1 },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  placeholderText: { textAlign: "center", color: "#5B6B7F" },
});
