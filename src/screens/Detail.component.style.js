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
    },
    sectionText: {
        fontFamily: 'poppins_bold',
        fontSize: 14,
        lineHeight: 16,
        alignSelf: 'center',
        margin: 4
    },
    sectionTextLabel: {
        flex: 2,
        alignSelf: 'center',
        fontFamily: 'poppins_regular',
        fontSize: 8,
        lineHeight: 12,
        color:'#666666'
    },
    sectionTextValue: {
        fontFamily: 'poppins_regular',
        fontSize: 12,
        lineHeight: 16
    },
    topbar: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        left: 10
    },
    verticalLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#E0E0E0'
    }
});