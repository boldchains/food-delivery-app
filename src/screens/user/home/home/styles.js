import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1
    },
    scrollViewContainer: {
        //paddingHorizontal: 16
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
        color: "#1A2D5A",
        fontSize: 15,
        fontWeight: "bold"
    },
    headerBlueText: {
        color: "#1A2D5A",
        fontSize: 10,
        fontWeight: "bold"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    headerIcon: {
        marginLeft: 9
    },
    headerRightContainer: {
        alignItems: "flex-end"
    },
    mainContainer: {
        paddingTop: 24,
        paddingHorizontal: 16
    },
    mainHeaderText: {
        color: "#1A2D5A",
        fontSize: 24,
        fontWeight: "bold"
    },
    mainImage: {
        width: null,
        height: 202,
        resizeMode: "contain",
        marginTop: 11
    },
    mainGreyText: {
        color: "#8D8D89",
        fontSize: 13,
        marginTop: 14
    },
    upcomingRestaurantsImage: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        borderRadius: 8,
        marginRight: 10
    }
});

export default styles;