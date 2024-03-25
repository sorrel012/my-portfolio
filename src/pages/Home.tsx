import styled from 'styled-components';

const Login = styled.button``;

const Title = styled.h1``;

const CategoryWrapper = styled.div``;

const Category = styled.button``;

const Butterfly = styled.div``;

const Grass = styled.div``;

const Flower = styled.div``;

function Home() {
  return (
    <>
      <Login />
      <Title>Hyowon's Portfolio</Title>
      <Butterfly />
      <CategoryWrapper>
        <Category>Profile</Category>
        <Category>Skills</Category>
        <Category>Projects</Category>
        <Category>Contact</Category>
      </CategoryWrapper>
      <Grass />
      <Flower />
    </>
  );
}

export default Home;
