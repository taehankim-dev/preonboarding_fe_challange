import styled from 'styled-components';

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

interface LayoutType {
  title : string,
  buttonText : string,
}

function Layout({title, buttonText} : LayoutType){
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Button>{buttonText}</Button>
      </div>
    </Container>
  )
}

export default Layout;