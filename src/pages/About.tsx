import React from "react";
import styled from 'styled-components';
import {useRouter} from "../components/hooks/useRouter";

const Container = styled.div`
  height : 100vh;
  display:flex;
  justify-content : center;
  align-items:center;
`

const Title = styled.p`
  margin:0 0 10px 0;
  text-align : center;
`

const Button = styled.button`
  background : #ecebeb;
  &:hover{
    background : #252525;
    color : white;
  }
`

const About : React.FC = () => {
  const {push} = useRouter();

  return (
    <Container>
      <div>
        <Title>About</Title>
        <Button onClick={() => (push("/"))}>Go Root</Button>
      </div>
    </Container>
  )
}

export default About;