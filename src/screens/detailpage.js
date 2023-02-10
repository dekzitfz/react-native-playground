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

              <View style={styles.topbar}>
                <TouchableOpacity 
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image style={{marginRight: 6}} source={require('../../assets/img/arrow_back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>{name}</Text>
              </View>
              

              <Image style={{alignSelf: 'flex-end'}} source={require('../../assets/img/pokeball.png')}/>

            </View>

            <View style={styles.bottom}>
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
                      fontFamily: 'poppins_bold'
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
              <View style={{
                flexDirection: 'row', 
                height: 50
              }}>
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'transparent'}}>
                  <View style={{
                    flex: 3, 
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                  }}>
                    <Image style={{marginRight: 8, width: 18, height: 18}} source={require('../../assets/img/weight.png')}/>
                    <Text style={{
                      fontFamily: 'poppins_regular',
                      fontSize: 13,
                      lineHeight: 17
                    }}>{pokemon.weight} kg</Text>
                  </View>
                  <Text style={{
                    flex: 2,
                    alignSelf: 'center',
                    fontFamily: 'poppins_regular',
                    fontSize: 10,
                    lineHeight: 14,
                    color:'#666666'
                  }}>Weight</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={{flex: 1, backgroundColor: 'transparent'}}></View>
                <View style={styles.verticalLine}></View>
                <View style={{flex: 1, backgroundColor: 'transparent'}}></View>
              </View>
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