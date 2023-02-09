export const getPokemonColorType = (type) => {
  console.log("type is " + type);
    switch(type){
      case 'grass': 
        return {
          backgroundColor: '#74CB48'
        };
      case 'bug': 
        return {
          backgroundColor: '#A7B723'
        };
      case 'dark': 
        return {
          backgroundColor: '#75574C'
        };
      case 'dragon': 
        return {
          backgroundColor: '#7037FF'
        };
      case 'electric': 
        return {
          backgroundColor: '#F9CF30'
        };
      case 'fairy': 
        return {
          backgroundColor: '#E69EAC'
        };
      case 'fighting': 
        return {
          backgroundColor: '#C12239'
        };
      case 'fire': 
        return {
          backgroundColor: '#F57D31'
        };
      case 'flying': 
        return {
          backgroundColor: '#A891EC'
        };
      case 'ghost': 
        return {
          backgroundColor: '#70559B'
        };
      case 'normal': 
        return {
          backgroundColor: '#AAA67F'
        };
      case 'ground': 
        return {
          backgroundColor: '#DEC16B'
        };
      case 'ice': 
        return {
          backgroundColor: '#9AD6DF'
        };
      case 'poison': 
        return {
          backgroundColor: '#A43E9E'
        };
      case 'psychic': 
        return {
          backgroundColor: '#FB5584'
        };
      case 'rock': 
        return {
          backgroundColor: '#B69E31'
        };
      case 'steel': 
        return {
          backgroundColor: '#B7B9D0'
        };
      case 'water': 
        return {
          backgroundColor: '#6493EB'
        };
      default: 
        return {
          backgroundColor: 'black'
        }
    }
  };