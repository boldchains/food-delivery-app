import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1,
        paddingVertical: 36
    },
    mainImage: {
        width: null,
        height: 202,
        resizeMode: "contain",
        marginTop: 11
    },
    boldText: {
        color: "#333333",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30
    }
});

export default styles;