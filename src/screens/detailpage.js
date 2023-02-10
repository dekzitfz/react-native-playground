import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { getPokemonColorType } from "../util/colortype";
import styles from './Detail.component.style'

const loadDetailPokemon = (name) => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    return axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + name
    });
  }

export default Detailpage = ({route, navigation}) => {

    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setLoading] = useState(true);
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

    if(!isLoading && pokemon){
      return(
        <View style={[styles.main, getPokemonColorType(pokemon.types[0].type.name)]}>

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

            <View style={styles.bottom}>
              <FlatList 
                style={{
                  alignSelf: 'center'
                }}
                horizontal={true}
                data={pokemon.types}
                renderItem={ ({item}) => 
                  <View style={[styles.type, getPokemonColorType(item.type.name)]}>
                    <Text style={{
                      color: 'white',
                      fontSize: 11,
                      lineHeight: 16,
                      fontFamily: 'poppins_bold'
                    }}>{item.type.name}</Text>
                  </View>
                  
                }
              />
            </View>

            <SvgUri
                style={styles.image}
                width="50%"
                height="25%"
                uri={pokemon.sprites.other.dream_world.front_default}
            />

            {/* {isLoading && <Text>Loading...</Text>} */}
            {/* {!isLoading && pokemon && <Text>Detail Page for {pokemon.name}</Text>} */}
        </View>
    );
    }else{
      return(<Text>Loading...</Text>)
    }
}