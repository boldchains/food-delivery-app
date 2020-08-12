import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#E5E5E5"
    },
    container: {
        flex: 1
    },
    scrollViewContainer: {
        paddingHorizontal: 16
    },
    inputContainer: {
        marginBottom: 23
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    skipButton: {
        padding: 5
    },
    skipButtonText: {
        color: "#333333",
        fontSize: 15,
        fontWeight: "bold"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        marginBottom: 22
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
    cvvIcon: {
        position: "absolute",
        right: 22
    },
    masterCardIcon: {
        width: 32,
        height: 25,
        resizeMode: "contain"
    }
});

export default styles;