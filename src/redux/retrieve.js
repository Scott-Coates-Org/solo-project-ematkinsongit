export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const data = await _fetchAllProductsFromDb();
    } catch (error) {
      console.error("error", error);
    }
  }
);

async function _fetchAllWidgetsFromDb() {
  const snapshot = await firebaseClient.firestore().collection("widgets").get();

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
}
