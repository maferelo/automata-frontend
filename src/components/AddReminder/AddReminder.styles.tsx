import styled from "styled-components/native";

export const ContainerView = styled.View`
  background-color: yellow;
  border: 1px black;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

export const AddPressable = styled.Pressable`
  background-color: blue;
  border: 1px green;
  height: 60px;
  justify-content: center;
  margin: 20px;
  &.pressed {
    background-color: green;
  }
`;

export const AddText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
`;
