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
        marginBottom: 8
    },
    forgotPasswordButtonText: {
        color: "#333333"
    },
    socialLoginContainer: {
        alignItems: "center",
        marginBottom: 44,
        marginTop: 41
    },
    rowContainer: {
        flexDirection: "row",
        marginTop: 12
    },
    socialButtonContainer: {
        width: 92,
        height: 64,
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    socialButtonIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain"
    }
});

export default styles;