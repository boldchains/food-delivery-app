import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1,
        paddingBottom: 40
    },
    scrollViewContainer: {
        paddingHorizontal: 15
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 32
    },
    boldText: {
        color: "#333333",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333",
        marginTop: 40
    },
    pickerContainer: {
        width: "100%",
        height: 64,
        borderRadius: 4,
        justifyContent: "center",
        paddingLeft: 16,
        marginTop: 16,
        backgroundColor: "white"
    },
    inputField: {
        width: "100%",
        minHeight: 124,
        backgroundColor: "white",
        borderRadius: 5,
        color: "#9B9B9B",
        fontSize: 14,
        marginTop: 16,
        padding: 16,
        paddingTop: 20
    }
});

export default styles;