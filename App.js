import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

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

const dummyDataList = Array.from({length: 20}, (v, index) => index);

const loadPokemon = () => {
  const baseURL = 'https://pokeapi.co/api/v2/';
  return axios({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  });
}

const getPokemonImage = (url) => {
  const rightSide = url.substring(34, url.length);
  const pokemonId = rightSide.substring(0, rightSide.indexOf('/'));
  //console.log("pokemon id: " + pokemonId);
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonId + ".png";
}

const App = () => {
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
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={ ({item}) =>
          <View style={styles.item}>
            <Image 
              source={{uri: getPokemonImage(item.url)}} 
              style={styles.image} 
              resizeMode='contain'
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          
        }
      />
    </SafeAreaView>
  );
};

export default App;