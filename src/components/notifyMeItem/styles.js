import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "white",
        paddingVertical: 20
    },
    boldText: {
        color: "#333333",
        fontWeight: "bold",
        fontSize: 16
    },
    greyText: {
        fontSize: 17,
        color: "#9B9B9B"
    },
    rowContainer: {
        flexDirection: "row",
        marginTop: 16
        //alightItems: "center"
    },
    timeContainer: {
        flex: 1,
        height: 43,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)"
    },
    chooseButton: {
        width: "50%",
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2F80ED",
        alignSelf: "center"
    },
    chooseButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12
    }
});

export default styles;