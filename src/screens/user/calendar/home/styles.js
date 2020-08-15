import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1
    },
    headerContainer: {
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 24,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        paddingBottom: 20
    },
    headerNameText: {
        color: "#333333",
        fontSize: 15,
        fontWeight: "bold"
    },
    headerBlueText: {
        color: "#2F80ED",
        fontSize: 10,
        fontWeight: "bold"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    mainContainer: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 15,
    },
    itemRowContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    headerIcon: {
        marginLeft: 9
    },
});

export default styles;