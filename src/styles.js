import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        color: 'blueviolet',
        fontWeight: '700',
    },

    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blueviolet',
        margin: 10,
    },

    formInput: {
        borderColor: 'blueviolet',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
    },

    formButton: {
        backgroundColor: 'blueviolet',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton: {
        padding: 10,
    },
    subTextButton: {
        color: 'blueviolet',
    },

    //Barra de logout
    internalContainer: {
        flex: 1,
        alignItems: 'flex-start',
        //paddingTop: 25,
    },

    topBar: {
        flexDirection: 'row-reverse',
        padding: 10,
        backgroundColor: 'blueviolet',
        width: '100%',

    },

    topBarButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },

    //Card
    containerCard: {
        padding: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%", // Deixa os cartões lado a lado
        marginBottom: 16,
    },
    cardButton: {
        backgroundColor: 'blueviolet',
        color: 'white',
        width: '100%',
        bottom: '1%',
        borderRadius: 10,
        alignItems: 'center',


    },
    titleCard: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        color: "green",
    },

});