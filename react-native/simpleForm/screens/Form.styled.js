import styled from "styled-components";
import { Text, View, TextInput } from "react-native";

export const Container = styled(View)`
  padding: 30px;
`;

export const Title = styled(Text)`
  color: #f2ea0d;
  font-size: 48px;
  margin: 0 auto;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const CustomInput = styled(TextInput)`
  background-color: #525666;
  font-size: 18px;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 18px;
  color: #f2f2f2;
`;

export const SecundaryTitle = styled(Text)`
  color: #f2ea0d;
  font-size: 18px;
  margin: 20px auto;
`;
