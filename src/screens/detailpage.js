import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

const loadDetailPokemon = (name) => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    return axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + name
    });
  }

export default Detailpage = ({route, navigation}) => {

    const [pokemon, setPokemon] = useState(null);
    const { name } = route.params

    useEffect(() => {
        loadDetailPokemon(name)
          .then(response => {
            console.log(response.data.name)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Page for {name}</Text>
        </View>
    );
}