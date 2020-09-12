import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1,
        paddingBottom: 30
    },
    scrollViewContainer: {
        paddingHorizontal: 16
    },
    inputContainer: {
        marginBottom: 23
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
    message: {
        color: "#333333",
        marginTop: 56,
        marginBottom: 24
    },
    choppingBagPrice: {
        color: "#1A2D5A",
        fontSize: 16,
        fontWeight: "normal",
        marginRight: 9
    },
    headerShoppingButton: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mainImage: {
        width: null,
        height: 202,
        resizeMode: "cover",
        marginTop: 11
    },
    mainGreyText: {
        color: "#8D8D89",
        fontSize: 13,
        marginTop: 14
    },
    item: {
        color: "#1A2D5A",
        fontSize: 16,
        fontWeight: "bold"
    },
    itemContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cartCountContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 21,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: 'red',
        height: 40,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cartTextGroup: {
        alignItems: "center"
    },
    viewCartText: {
        color: 'white',
        fontSize: 12,
        fontWeight: "bold"
    },
    bottomShoppingButton: {
        position: 'absolute',
        bottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        width: '100%',
    },
    circleBadge: {
        width: 15,
        height: 15,
        borderRadius: 7,
        alignItems: "center",
        backgroundColor: 'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    badgeCount: {
        color: 'white',
        fontSize: 12,
    }

});

export default styles;