import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1,
        paddingBottom: 35
    },
    scrollViewContainer: {
        paddingHorizontal: 16
    },
    headerNameText: {
        color: "#1A2D5A",
        fontSize: 15,
        fontWeight: "bold"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerBlueText: {
        color: "#1A2D5A",
        fontSize: 10,
        fontWeight: "bold"
    },
    headerRightContainer: {
        alignItems: "flex-end"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    headerIcon: {
        marginLeft: 9
    },
    mainImage: {
        width: null,
        height: 202,
        resizeMode: "contain",
        marginTop: 11
    },
    blackText: {
        color: "#1A2D5A",
        fontWeight: "bold",
        fontSize: 14
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowContainerModifier: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16
    },
    checkBox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)"
    },
    greyText: {
        color: "#9B9B9B",
        fontSize: 12,
        marginTop: 8
    },
    deliveryTimeContainer: {
        width: "100%",
        height: 43,
        borderRadius: 4,
        backgroundColor: "white",
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16
    },
    greyTime: {
        color: "#9B9B9B",
        fontSize: 14,
        marginLeft: 46
    },
    deliveryTimeBlack: {
        color: "#1A2D5A",
        fontSize: 18
    }
});

export default styles;