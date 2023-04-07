import { useLoadScript } from "@react-google-maps/api";
import { StyleSheet, Text, View } from "react-native";
import MapTest from "./Map";
import { GOOGLE_MAPS_API_KEY } from "@env"; 



export default function Page() {
  const {isLoaded} = useLoadScript({googleMapsApiKey: `${GOOGLE_MAPS_API_KEY}`})

  return !isLoaded ? (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Bobasek</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  ) : <MapTest/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
