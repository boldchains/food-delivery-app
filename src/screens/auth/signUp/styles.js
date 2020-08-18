import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        flex: 1
    },
    scrollViewContainer: {
        paddingHorizontal: 16
    },
    headerContainer: {
        marginTop: "20%",
        marginBottom: 189,
        marginLeft: 16,
        alignItems: "center"
    },
    buttonContainer: {
        marginTop: 14
    },
    headerText: {
        fontSize: 34,
        fontWeight: "bold",
        color: "#74CCDC"
    },
    welcomeLogo: {
        width: 246,
        height: 54,
        resizeMode: "contain",
        marginTop: 17
    }
});

export default styles;