import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputFieldContainer: {
        width: "100%",
        height: 64,
        backgroundColor: "white",
        borderRadius: 5
    },
    inputField: {
        flex: 1,
        padding: 0,
        paddingLeft: 20,
        color: "#1A2D5A"
    },
    smallPlaceholder: {
        color: "#9B9B9B",
        fontSize: 11,
        marginLeft: 20,
        marginTop: 13
    },
    errorMessage: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
        marginLeft: 20
    }
});

export default styles;