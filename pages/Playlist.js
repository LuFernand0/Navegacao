import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function Playlist({ navigation }) {
  return (
    <SafeAreaView style={estilo.container}>
      <ScrollView>
        <View
          style={estilo.icone}
          onTouchStart={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" type="evilicon" color="#fff" />
        </View>
        <View style={estilo.playlist}>
          <Image
            style={estilo.imgPlaylist}
            source={require('../assets/icon-coracao.png')}
          />
          <View style={estilo.textoPlaylist}>
            <Text style={estilo.texto}>Playlist</Text>
            <Text style={estilo.titulo}>Músicas</Text>
            <Text style={estilo.titulo}>Curtidas</Text>
            <View style={estilo.info}>
              <Text style={estilo.texto}>Luiz</Text>
              <Text style={estilo.texto}>3 Músicas</Text>
            </View>
          </View>
        </View>

        <View style={estilo.conteudo}>
          <View style={estilo.musica}>
            <Text style={estilo.textoMusica}>1</Text>
            <Image
              style={estilo.imgMusica}
              source={require('../assets/tchelo.jpeg')}
            />
            <Text style={estilo.textoMusica}>SETE DA NOITE</Text>
          </View>
          <View style={estilo.musica}>
            <Text style={estilo.textoMusica}>2</Text>
            <Image
              style={estilo.imgMusica}
              source={require('../assets/50_cent.jpeg')}
            />
            <Text style={estilo.textoMusica}>21 Questions</Text>
          </View>
          <View style={estilo.musica}>
            <Text style={estilo.textoMusica}>3</Text>
            <Image
              style={estilo.imgMusica}
              source={require('../assets/the_weeknd.jpeg')}
            />
            <Text style={estilo.textoMusica}>Starboy</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#121212',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icone: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '99%',
    background: '#513B9D',
  },
  playlist: {
    diplay: 'flex',
    flexDirection: 'row',
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 10,
    background: 'linear-gradient(to bottom, #513B9D, #171420)',
  },
  textoPlaylist: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  imgPlaylist: {
    resizeMode: 'cover',
    width: 175,
    height: 175,
  },
  titulo: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 25,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  texto: {
    color: '#fff',
    fontWeight: 400,
    fontSize: 15,
  },
  conteudo: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10,
  },
  musica: {
    width: 300,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
  },
  imgMusica: {
    resizeMode: 'contain',
    width: '25%',
    height: 70,
    borderRadius: 10,
    marginLeft: 10,
  },
  textoMusica: {
    fontWeight: 500,
    fontSize: 15,
    color: '#FFFFF1',
    marginRight: 30,
    textAlign: 'center',
  },
});
