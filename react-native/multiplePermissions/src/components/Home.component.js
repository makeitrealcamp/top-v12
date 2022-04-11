import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button, View, Text, Image} from 'react-native';

export default function HomeScreen({route, navigation}) {
  const {title} = route.params;
  const [photos, setPhotos] = useState([]);

  const handleBtnPress = async () => {
    const data = await launchImageLibrary({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (data?.assets) {
      setPhotos(data.assets);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {`${title}`}</Text>
      {photos.map(photo => (
        <Image style={{width: 250, height: 250}} source={{uri: photo.uri}} />
      ))}
      <Button title="Get Images" onPress={handleBtnPress} />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            description: 'More details will be revealed later.',
          })
        }
      />
    </View>
  );
}
