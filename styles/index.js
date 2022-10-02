import styled from "styled-components/native"

export const ContainerGlobal = styled.View`
  flex: 1;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  
`


export const Input = styled.TextInput`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: black;
  background-color: #ffffff;
  padding: 10px;
  margin: 10px;
  border-radius: 50px;
  width: 75%; 
  border: 3px solid #0A9918;
`


export const TextoBotao = styled.Text`
    align-items: center;
    text-align: center;
    width: 160px;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
    padding: 0 25px;
`

export const BotaoMenuPrincipal = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 40px;
    align-items: center;
    margin: 20px;
    width: 50%;
    background-color: #0A9918;
    border: 3px solid #ffffff;
`;

export const BotaoGlobal = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 40px;
    align-items: center;
    width: 45%;
    background-color: #0A9918;
    border: 3px solid #ffffff;
`;

export const BotaoRedondoAvatar = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 40px;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #0A9918;
    border: 3px solid #ffffff;
`;

export const BotaoSemFundo = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 40px;
    align-items: center;
    width: 45%;
    background-color: transparent;
    border: 3px solid #ffffff;
`;

export const styleBtnSlideAvatar = {
    width: 44,
    height: 44,
    backgroundColor: '#0A9918',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
}

export const BotaoRedondoMenu = styled.TouchableOpacity`
    padding: 15px;
    border-radius: 40px;
    align-items: center;
    /* width: 30px; */
    /* height: 30px; */
    background-color: transparent;
    border: 3px solid #ffffff;
`;


export const TextWhite = styled.Text`
  justify-content: center;
  color: white;
  font-size: 20px;
`

export const TextWhiteBold = styled.Text`
  justify-content: center;
  color: white;
  font-weight: 600;
  letter-spacing: 1.5px;
  font-size: 20px;
`

export const TextBtnSlideAvatar = {
  marginLeft: 3,
  color: "#fff",
  fontSize: 20,
  fontWeight: "800",
}


export const DivAvatar = styled.View`
  display: flex; 
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
`

export const DivColors = styled.View`
  display: flex; 
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
`

export const DivGlobal = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  display: flex;
`

export const Div  = styled.View`
align-items: center;
  width: 100%;
`

export const DivBotoes = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  display: flex;
`


export const Divisor = styled.View`
  border: 1px solid #fff;
  width: 100%;
`