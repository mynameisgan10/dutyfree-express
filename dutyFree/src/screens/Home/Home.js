import React from 'react'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  color: palevioletred;
  font-size: 50
`
const StyledView = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center
`

const Home = () => {
    return (
        <StyledView>
          <StyledText>asd</StyledText>
        </StyledView>
      );
}

export default Home