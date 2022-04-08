import { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, Image } from "react-native";

import { Container, Title, CustomInput, SecundaryTitle } from "./Form.styled";

const Form = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = () => console.log("submit");

  return (
    <View>
      <Container>
        <Title>!Make It Real</Title>
        <CustomInput
          placeholder="Email"
          placeholderTextColor="#f2f2f2"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <CustomInput
          placeholder="Contraseña"
          placeholderTextColor="#f2f2f2"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View>
          <Button title="Enviar" onPress={handleSubmit} />
          <Text style={styles.text}>Olvidé mi contraseña</Text>
          <SecundaryTitle>Crear Cuenta</SecundaryTitle>
        </View>
      </Container>
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dkcbxnhg0/image/upload/v1613259321/sprinter/ui/patron_qwxtdz.png",
          }}
          style={{ width: 450, height: 280 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#f2f2f2",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Form;
