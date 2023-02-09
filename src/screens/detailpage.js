import axios from "axios";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { getPokemonColorType } from "../util/colortype";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 4
    },
    top: {
        backgroundColor: 'transparent'
    },
    bottom: {
        backgroundColor: 'white',
        borderRadius: 8,
        flex: 3,
        margin: 2
    },
    image: {
      position: 'absolute',
      alignSelf: 'center',
      top: 10
    },
    title: {
      color: 'white',
      alignSelf: 'auto',
      fontSize: 24,
      fontFamily: 'poppins_bold',
      lineHeight: 32
    }
});

const loadDetailPokemon = (name) => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    return axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + name
    });
  }

export default Detailpage = ({route, navigation}) => {

    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const { name, id } = route.params;

    useEffect(() => {
        setLoading(true);
        loadDetailPokemon(name)
          .then(response => {
            setLoading(false)
            setPokemon(response.data)
          })
          .catch(error => {
            setLoading(false)
            console.error(error);
          });
      }, []);

    return(
        <View style={[styles.main, pokemon && getPokemonColorType(pokemon.types[0].type.name)]}>

            <View style={styles.top}>

              <View style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: 10,
                left: 10
              }}>
                <TouchableOpacity 
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image style={{marginRight: 6}} source={require('../../assets/img/arrow_back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>{name}</Text>
              </View>
              

              <Image style={{
                alignSelf: 'flex-end',
                }} source={require('../../assets/img/pokeball.png')}/>

            </View>

            <View style={styles.bottom}></View>

            <SvgUri
                style={styles.image}
                width="50%"
                height="50%"
                uri={"https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/"+ id +".svg"}
            />

            {/* {isLoading && <Text>Loading...</Text>} */}
            {/* {!isLoading && pokemon && <Text>Detail Page for {pokemon.name}</Text>} */}
        </View>
    );
}