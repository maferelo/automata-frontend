import styled from "styled-components/native";

export const MainTouchable = styled.TouchableOpacity`
  border-width: 1px;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
  min-width: 120px;
  padding: 10px;
  background-color: red;

  ${({ type }) => {
    switch (type) {
      case "update":
        return `
            background-color: yellow;
          `;
      case "delete":
        return `
            background-color: red;
          `;
      default:
        return `
            background-color: white;
          `;
    }
  }}
`;

export const TitleText = styled.Text`
  color: #000;
`;
