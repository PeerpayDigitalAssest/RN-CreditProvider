import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    borderContainer: {
        height: 100, alignSelf: 'center',
        width: '100%', borderColor: 'grey', borderWidth: .5, borderRadius: 8
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: 'rgba(48, 54, 91, 1)',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    container: {
        width: 'auto', backgroundColor: "grey", borderRadius: 16, padding: 20, marginHorizontal: 30, boxShadow: [
            {
                offsetX: 0,
                offsetY: 1,
                blurRadius: '0px',
                spreadDistance: '0px',
                color: '#778899',
            }
        ]
    },
    screenCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: .5,
        color: 'white',
        borderColor: 'grey',
        padding: 8,
        borderRadius: 4,
        fontFamily: 'Montserrat'
    },
    // TEXTS
    text38: {
        fontSize: 38,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text24: {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text18: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text16: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text14: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text12: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text10: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: 'white'
    },
    text8: {
        fontSize: 8,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: 'white'
    },
});
