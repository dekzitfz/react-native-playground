import axios from "axios";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#74CB48',
        flex: 1,
        padding: 4
    },
    top: {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'flex-end'
    },
    bottom: {
        backgroundColor: 'white',
        flex: 3,
        margin: 2
    },
    image: {
      position: 'absolute',
      alignSelf: 'center',
      top: 10
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
        <View style={styles.main}>

            <View style={styles.top}>
                <Image source={require('../../assets/img/pokeball.png')}/>
            </View>

            <View style={styles.bottom}></View>

            {/* <Image 
                source={{uri: "https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/"+ id +".svg"}} 
                style={styles.image} 
                resizeMode='contain'
            /> */}
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