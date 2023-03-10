import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    name: {
      fontSize: 26,
      flex: 4,
    },
    header: {
      fontSize: 30
    },
    image: {
      flex: 1.2,
      height: 60,
    },
    item: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center'
    }
  });

  const loadPokemon = () => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    return axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
    });
  }

  const getPokemonImage = (url) => {
    const rightSide = url.substring(34, url.length);
    const pokemonId = rightSide.substring(0, rightSide.indexOf('/'));
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonId + ".png";
  }

  const getPokemonId = (url) => {
    const rightSide = url.substring(34, url.length);
    return rightSide.substring(0, rightSide.indexOf('/'));
  }

const Homepage = ({navigation}) => {
    const [data, setData] = useState([]);

  useEffect(() => {
    loadPokemon()
      .then(response => {
        console.log("loaded " + response.data.results.length + " data")
        setData(response.data.results)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={ ({item}) =>
            <TouchableOpacity
                onPress={() =>{
                    console.log(item.name + " selected");
                    navigation.navigate('Detail',{
                      name: item.name,
                      id: getPokemonId(item.url)
                    });
                }}
            >
                <View style={styles.item}>
                    <Image 
                    source={{uri: getPokemonImage(item.url)}} 
                    style={styles.image} 
                    resizeMode='contain'
                    />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        }
      />
    </View>
  );
}

export default Homepage;