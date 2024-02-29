import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, FlatList } from 'react-native';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { estilos } from './Estilos'; // Importa los estilos desde Estilos.js

const Clima = () => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110%20&q=huejutla&days=10&aqi=no&alerts=no&lang=es')
            .then(res => res.json())
            .then(obj => {
                setData(obj);
                setLoad(true);
            })
            .catch(err => Alert.alert('Error inesperado : ' + err));
    }, []);

    return (
        <View style={estilos.container}>
            {load ? (
                <View style={estilos.content}>
                    <Text style={[estilos.location, {marginTop: 40, marginLeft:14, color: 'black'}]}>{data.location.name}</Text>
                    <Text style={[estilos.currentTemp,{color:'white',}]}>{data.current.temp_c}°C</Text>
                    <Text style={estilos.condition}>{data.current.condition.text}</Text>
                    <Image style={estilos.currentIcon} source={{ uri: 'https:' + data.current.condition.icon }} />
                    
                    <View style={estilos.weatherInfoContainer}>
                        <View style={estilos.weatherInfoItem}>
                            <Text style={estilos.weatherInfoLabel}>Sensación térmica:</Text>
                            <Text style={estilos.weatherInfoValue}>{data.current.feelslike_c}°C</Text>
                        </View>
                        <View style={estilos.weatherInfoItem}>
                            <Text style={estilos.weatherInfoLabel}>Humedad:</Text>
                            <Text style={estilos.weatherInfoValue}>{data.current.humidity}%</Text>
                        </View>
                        <View style={estilos.weatherInfoItem}>
                            <Text style={estilos.weatherInfoLabel}>Viento:</Text>
                            <Text style={estilos.weatherInfoValue}>{data.current.wind_kph} km/h</Text>
                        </View>
                        <View style={estilos.weatherInfoItem}>
                            <Text style={estilos.weatherInfoLabel}>Índice UV:</Text>
                            <Text style={estilos.weatherInfoValue}>{data.current.uv}</Text>
                        </View>
                    </View>
                    
                    <View style={estilos.color}>
                        <Text style={[estilos.forecastTitle, estilos.shadow, {color: 'white'}]}>Pronóstico por hora:</Text>
                        <FlatList
                            horizontal
                            data={data.forecast.forecastday[0].hour}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={estilos.hourlyContainer}>
                                    <Text style={estilos.hour}>{item.time.split(' ')[1]}</Text>
                                    <Image style={estilos.hourIcon} source={{ uri: 'https:' + item.condition.icon }} />
                                    <Text style={estilos.hourTemperature}>{item.temp_c}°C</Text>
                                </View>
                            )}
                        />
                    </View>


                    <View style={estilos.forecastContainer}>
                        <Text style={[estilos.forecastTitle, estilos.shadow, {color: 'white'}]}>Pronóstico para los próximos días:</Text>
                        <FlatList
                            data={data.forecast.forecastday}
                            renderItem={({ item }) => (
                                <View style={estilos.forecastItem}>
                                    <Text style={estilos.forecastDate}>{format(new Date(item.date), 'EEEE, d MMMM', { locale: es })}</Text>
                                    <Image style={estilos.forecastIcon} source={{ uri: 'https:' + item.day.condition.icon }} />
                                    <Text style={estilos.forecastTemp}>{item.day.maxtemp_c}°C / {item.day.mintemp_c}°C</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    
                </View>
            ) : (
                <View style={estilos.loadingContainer}>
                    <ActivityIndicator size={'large'} color={'black'} />
                    <Text style={estilos.loadingText}>Cargando datos...</Text>
                </View>
            )}
        </View>
    );
};

export default Clima;
