import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    scrollViewContainer: {
        paddingHorizontal: 15,
        flex: 1
    },
    container: {
        flex: 1
    },
    boldText: {
        color: "#333333",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 24
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    checkBox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderColor: "#333333",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        marginLeft: 13,
        color: "#222222"
    },
    cardImage: {
        width: null,
        height: 202,
        resizeMode: "contain",
        marginTop: 11
    },
    addPaymentContainer: {
        position: "absolute",
        right: 16,
        bottom: 40
    },
    addIcon: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    modalMainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalContainer: {
        backgroundColor: "#F9F9F9",
        width: "85%",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 16,
        paddingVertical: 26,
    },
    modalBoldText: {
        color: "#333333",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    },
    inputContainer: {
        marginBottom: 23
    },
    cvvIcon: {
        position: "absolute",
        right: 22
    },
    masterCardIcon: {
        width: 32,
        height: 25,
        resizeMode: "contain"
    },
    defaultMiniContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: "#333333"
    },
    defaultText: {
        color: "#222222",
        marginLeft: 13
    },
});

export default styles;