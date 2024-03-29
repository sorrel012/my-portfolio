import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100vh;
  width: 90%;
  background: ${(props) => props.theme.projects.contentBgColor};
`;

const Title = styled.h3``;

const ImageContainer = styled.div``;

const Image = styled.img``;

const Content = styled.section``;

const Label = styled.div``;

const LabelImg = styled.img``;

const LabelText = styled.span``;

const Text = styled.div``;

const Period = styled.div``;

const Skills = styled.div``;

const Overview = styled.div``;

const TroubleShooting = styled.div``;

const Links = styled.div``;

const ButtonLogo = styled.img``;

const ButtonText = styled.span``;

const Github = styled.button``;

const Deployment = styled.button``;

function ProjectItem() {
  return (
    <Wrapper>
      <Title />
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Content>
        <Period>
          <Label>
            <LabelImg />
            <LabelText></LabelText>
          </Label>
          <Text></Text>
        </Period>
        <Skills>
          <Label>
            <LabelImg />
            <LabelText></LabelText>
          </Label>
        </Skills>
        <Overview>
          <Label>
            <LabelImg />
            <LabelText></LabelText>
          </Label>
        </Overview>
        <TroubleShooting>
          <Label>
            <LabelImg />
            <LabelText></LabelText>
          </Label>
        </TroubleShooting>
      </Content>
      <Links>
        <Github>
          <ButtonLogo />
          <ButtonText></ButtonText>
        </Github>
        <Deployment>
          <ButtonLogo />
          <ButtonText></ButtonText>
        </Deployment>
      </Links>
    </Wrapper>
  );
}

export default ProjectItem;
