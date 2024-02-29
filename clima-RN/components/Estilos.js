import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 15,
    },
    location: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    currentTemp: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 6,
        textAlign: 'center',
    },
    condition: {
        fontSize: 20,
        marginBottom: 2,
        textAlign: 'center',
    },
    currentIcon: {
        width: 170,
        height: 100,
        alignSelf: 'center',
    },
    weatherInfoContainer: {
        backgroundColor: '#AC8DC8',
        padding: 10,
    },
    weatherInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    weatherInfoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    weatherInfoValue: {
        fontSize: 16,
    },
    forecastContainer: {
        width: '100%',
    },
    forecastTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    forecastItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#A991BF',
    },
    forecastDate: {
        flex: 1,
        fontSize: 16,
    },
    forecastIcon: {
        width: 45,
        height: 40,
        marginRight: 5,
    },
    forecastTemp: {
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
    },
    color: {
        backgroundColor: '#AC8DC8',
        padding: 10,
        marginTop: 8,
    },
    hourlyContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    hour: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    hourIcon: {
        width: 55,
        height: 40,
    },
    hourTemperature: {
        fontSize: 16,
    },
    shadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1},
        textShadowRadius: 2,
    },
});
