import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const IMAGES_URL = [
  "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
]

interface movieItem {
  title: string;
  releaseYear: string;
}

export default function TabTwoScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
       const response = await fetch('https://reactnative.dev/movies.json');
       const json = await response.json();
       setData(json.movies);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
   getMovies();
  }, []);

  if (isLoading) {
    return <Text>Is Loading...</Text>
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item: movieItem, index) => (
          <Card key={`${index}${item.title}`}>
            <Card.Title>{item.title}</Card.Title>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: IMAGES_URL[index] }}
            />
            <Text style={styles.releaseYear}>{item.releaseYear}</Text>
          </Card>
        ))
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  releaseYear: {
    fontSize: 12,
    marginTop: 5
  },
  image: {
    width: 120,
    height: 120,
  }
});
