import { StyleSheet, View,} from 'react-native';

const br=5

export default function Card(props) {

    return (
        <View style={styles.card}>
        <View style={styles.cardContent}>
            { props.children }
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    borderRadius:br,
  },
  cardContent: {
    overflow:"hidden",
    borderRadius: br
  }
});