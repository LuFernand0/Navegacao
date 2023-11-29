import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={estilo.container}>
      <ScrollView>
        <View style={estilo.conteudo}>
          <Text style={estilo.titulo}>Recomendados</Text>
          <View style={estilo.cards}>
            <View
              style={estilo.card}
              onTouchStart={() => navigation.navigate('Playlist')}>
              <Image
                style={estilo.img}
                source={require('../assets/icon-coracao.png')}
              />
              <Text style={estilo.subtitulo}>Músicas Curtidas</Text>
            </View>
            <View style={estilo.card}>
              <Image
                style={estilo.img}
                source={require('../assets/caminho-diario.jpg')}
              />
              <Text style={estilo.subtitulo}>Caminho Diário</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#121212',
  },
  conteudo: {
    diplay: 'flex',
    flexDirection: 'Column',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
  cards: {
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 240,
    height: 260,
    borderRadius: 20,
    // backgroundColor: '#fff',
    backgroundColor: '#181818',
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'cover',
    width: '70%',
    height: '70%',
    borderRadius: 10,
  },
  subtitulo: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 600,
    fontSize: 15,
  },
});
