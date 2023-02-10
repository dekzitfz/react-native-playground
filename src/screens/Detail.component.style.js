import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        margin: 2,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        paddingTop: 90
    },
    image: {
      position: 'absolute',
      alignSelf: 'center',
      top: 80
    },
    title: {
      color: 'white',
      alignSelf: 'auto',
      fontSize: 24,
      fontFamily: 'poppins_bold',
      lineHeight: 32
    },
    type: {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 6,
      paddingRight: 6,
      alignItems: 'center',
      flexGrow: 0,
      flexDirection: 'row',
      maxHeight: 25,
      borderRadius: 10,
      marginStart: 4,
      marginRight: 4
    }
});