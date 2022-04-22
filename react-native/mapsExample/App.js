import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {decode} from '@mapbox/polyline';

const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = 'AIzaSyAptGpUwrymNQ_ilvvViFTBWXp4A3ijwTI'; //TODO move to .env
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`,
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    console.log('points', points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1],
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};

export default function App() {
  const [coords, setCoords] = useState([]);
  const berlinRestobar = {
    latitude: -12.1216597,
    longitude: -77.032464,
    latitudeDelta: 17.68,
    longitudeDelta: 17.68,
  };

  const [region, setRegion] = useState({
    latitude: -12.1256553,
    longitude: -77.0315745,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    getDirections('-12.1235195,-77.0325365', '-12.1234316,-77.0265002')
      .then(c => setCoords(c))
      .catch(err => console.log('Something went wrong'));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -12.1234316,
          longitude: -77.0265002,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={r => setRegion(r)}>
        <Marker coordinate={berlinRestobar} />
        {coords.length > 0 && <Polyline coordinates={coords} />}
      </MapView>
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
