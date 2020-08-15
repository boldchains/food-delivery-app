import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 7,
        marginHorizontal: 2
    },
    dayText: {
        color: "#333333",
        fontSize: 14,
        fontWeight: "bold"
    },
    dateText: {
        color: "#959595",
        fontSize: 10,
        marginTop: 2
    },
    restaurantName: {
        textAlign: "center",
        color: "#333333",
        fontSize: 7,
        marginTop: 8
    },
    restaurantImage: {
        width: 30,
        height: 25,
        resizeMode: "contain",
        marginTop: 6
    }
});

export default styles;