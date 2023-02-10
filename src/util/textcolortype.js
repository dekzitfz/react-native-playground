export const getTextColor = (type) => {
    switch(type){
      case 'grass': 
        return {
          color: '#74CB48'
        };
      case 'bug': 
        return {
          color: '#A7B723'
        };
      case 'dark': 
        return {
          color: '#75574C'
        };
      case 'dragon': 
        return {
          color: '#7037FF'
        };
      case 'electric': 
        return {
          color: '#F9CF30'
        };
      case 'fairy': 
        return {
          color: '#E69EAC'
        };
      case 'fighting': 
        return {
          color: '#C12239'
        };
      case 'fire': 
        return {
          color: '#F57D31'
        };
      case 'flying': 
        return {
          color: '#A891EC'
        };
      case 'ghost': 
        return {
          color: '#70559B'
        };
      case 'normal': 
        return {
          color: '#AAA67F'
        };
      case 'ground': 
        return {
          color: '#DEC16B'
        };
      case 'ice': 
        return {
          color: '#9AD6DF'
        };
      case 'poison': 
        return {
          color: '#A43E9E'
        };
      case 'psychic': 
        return {
          color: '#FB5584'
        };
      case 'rock': 
        return {
          color: '#B69E31'
        };
      case 'steel': 
        return {
          color: '#B7B9D0'
        };
      case 'water': 
        return {
          color: '#6493EB'
        };
      default: 
        return {
          color: 'black'
        }
    }
  };