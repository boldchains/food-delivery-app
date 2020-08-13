import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    image1: {
        width: 300,
        height: 309,
        resizeMode: "contain"
    },
    image2: {
        width: 124,
        height: 124,
        resizeMode: "contain"
    },
    imageContainer: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    boldText: {
        fontSize: 16,
        color: "#333333",
        fontWeight: "bold",
        marginTop: 16
    },
    normalText: {
        color: "#333333",
        textAlign: "center",
        marginTop: 16
    }
});

export default styles;