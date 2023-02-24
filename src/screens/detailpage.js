import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { getPokemonColorType } from "../util/colortype";
import textColor, { getTextColor } from '../util/textcolortype';
import styles from './Detail.component.style';

const loadDetailPokemon = (name) => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    return axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + name
    });
  }

const loadSpeciesPokemon = (url) => {
  return axios({method: 'GET',url: url});
}

export default Detailpage = ({route, navigation}) => {

    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const { name, id } = route.params;

    useEffect(() => {
        setLoading(true);
        loadDetailPokemon(name)
          .then(response => {
            setLoading(false);
            setPokemon(response.data);

            loadSpeciesPokemon(response.data.species.url)
              .then(species =>{
                setSpecies(species.data)
              })
              .catch(err => {
                console.error(err);
              })
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

              <View style={styles.topbar}>

                {/* BACK BUTTON */}
                <TouchableOpacity 
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image style={{marginRight: 6}} source={require('../../assets/img/arrow_back.png')}/>
                </TouchableOpacity>

                {/* POKEMON NAME */}
                <Text style={styles.title}>{name}</Text>
              </View>
              

              <Image style={{alignSelf: 'flex-end'}} source={require('../../assets/img/pokeball.png')}/>
            </View>

            <View style={styles.bottom}>

              {/* POKEMON TYPES */}
              <FlatList 
                style={{alignSelf: 'center', flexGrow: 0}}
                horizontal={true}
                data={pokemon.types}
                renderItem={ ({item}) => 
                  <View style={[styles.type, getPokemonColorType(item.type.name)]}>
                    <Text style={{
                      color: 'white',
                      fontSize: 11,
                      lineHeight: 16,
                      fontFamily: 'Poppins-Bold'
                    }}>{item.type.name}</Text>
                  </View>
                  
                }
              />

              <View style={{height: 16}}/> 
              <Text 
                style={[
                  styles.sectionText, 
                  getTextColor(pokemon.types[0].type.name)
                ]}
              >About</Text>

              <View style={{height: 16}}/> 

              {/* POKEMON ATTRIBUTES */}
              <View style={{
                flexDirection: 'row', 
                height: 50
              }}>

                {/* POKEMON WEIGHT */}
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'transparent'}}>
                  <View style={{
                    flex: 5, 
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                  }}>
                    <Image style={{marginRight: 8}} source={require('../../assets/img/weight.png')}/>
                    <Text style={styles.sectionTextValue}>{pokemon.weight} kg</Text>
                  </View>
                  <Text style={styles.sectionTextLabel}>Weight</Text>
                </View>
                <View style={styles.verticalLine}></View>

                {/* POKEMON HEIGHT */}
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'transparent'}}>
                  <View style={{
                    flex: 5, 
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                  }}>
                    <Image style={{marginRight: 8}} source={require('../../assets/img/straighten.png')}/>
                    <Text style={styles.sectionTextValue}>{pokemon.height} m</Text>
                  </View>
                  <Text style={styles.sectionTextLabel}>Height</Text>
                </View>
                <View style={styles.verticalLine}></View>

                {/* POKEMON MOVES */}
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'transparent'}}>
                  <View style={{
                    flex: 5, 
                    flexDirection: 'column',
                    alignSelf: 'center',
                    paddingStart: 8,
                    paddingEnd: 8
                  }}>
                    {pokemon.moves[0] && <Text style={styles.sectionTextValue}>{pokemon.moves[0].move.name}</Text>}
                    {pokemon.moves[1] && <Text style={styles.sectionTextValue}>{pokemon.moves[1].move.name}</Text>}
                  </View>
                  <Text style={styles.sectionTextLabel}>Moves</Text>
                </View>
              </View>

              <View style={{height: 20}}/>

              <Text style={styles.descriptionText}>{
              species && 
              species.flavor_text_entries
                .filter(flavor => flavor.language.name == "en")[0]
                .flavor_text.replace(/(\r\n|\n|\r)/gm, " ")
              }</Text>

            </View>

            {/* POKEMON IMAGE */}
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