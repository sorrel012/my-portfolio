import styled from 'styled-components';
import rabbit from '../assets/images/home/rabbit.png';
import mushroom from '../assets/images/home/mushroom.png';
import mushroomHover from '../assets/images/home/mushroom-hover.png';
import flower1 from '../assets/images/home/flower1.png';
import flower2 from '../assets/images/home/flower2.png';
import flower3 from '../assets/images/home/flower3.png';
import flower4 from '../assets/images/home/flower4.png';
import flower5 from '../assets/images/home/flower5.png';
import { useState } from 'react';
import { motion } from 'framer-motion';

const GRASS = '/src/assets/images/home/grass.png';
const BUTTERFLY_RIGHT = '/src/assets/images/home/butterfly1.png';
const BUTTERFLY_LEFT = '/src/assets/images/home/butterfly2.png';

const Wrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.home.bgColor};
`;

const Login = styled.img`
  width: 3vw;
  min-width: 50px;
  aspect-ratio: 1 / 1;
  margin-top: 10px;
  margin-right: 10px;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 9vw;
  font-weight: bold;
  margin-bottom: 40px;
  position: relative;
  top: -5%;
  z-index: 90;
`;

const CategoryWrapper = styled.main`
  display: flex;
  width: 100%;
`;

const Category = styled(motion.button)`
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 99;
`;

const Mushroom = styled.img`
  width: 90%;
  cursor: pointer;
`;

const PageLabel = styled.h2`
  position: absolute;
  bottom: 17%;
  font-size: 2.1vw;
  font-family: 'LeeSeoyun', sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.home.textColor};
`;

const BackgroundWrapper = styled.div`
  width: 100vw;
`;

const Butterfly = styled.img`
  position: absolute;
  width: 7%;
  top: ${(props) => props.top};

  @media (max-width: 1100px) {
    top: ${(props) => (props.top === '24%' ? '10%' : props.top)};
  }

  @media (max-width: 768px) {
    top: ${(props) => (props.top === '24%' ? '15%' : props.top)};
  }
`;

const Grass = styled.div`
  max-height: 200px;
  width: 100%;
  aspect-ratio: 1/ 3;
  position: absolute;
  bottom: 0;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-repeat: repeat-x;
  display: flex;
  justify-content: space-around;
`;

const Flowers = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const FlowerFirstRow = styled.div`
  width: 100%;
  margin-bottom: -2.5%;
  display: flex;
  justify-content: space-between;
`;

const FlowerSecondRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5%;
`;

const Flower = styled.img`
  width: 8%;
  max-width: 120px;
  transform: ${(props) => props.transform};
`;

interface IMushroomState {
  profile: string;
  skills: string;
  project: string;
  contact: string;
}

enum CategoryText {
  PROFILE = 'profile',
  SKILLS = 'skills',
  PROJECT = 'project',
  CONTACT = 'contact',
}

const mushroomVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

function Home() {
  const [mushroomImg, setMushroomImg] = useState<IMushroomState>({
    [CategoryText.PROFILE]: mushroom,
    [CategoryText.SKILLS]: mushroom,
    [CategoryText.PROJECT]: mushroom,
    [CategoryText.CONTACT]: mushroom,
  });

  const onMushroomHover = (category) =>
    setMushroomImg((prev) => {
      return {
        ...prev,
        [category]: mushroomHover,
      };
    });
  const onMushroomInitial = (category) =>
    setMushroomImg((prev) => {
      return {
        ...prev,
        [category]: mushroom,
      };
    });

  return (
    <Wrapper className="align-center">
      <div className="align-right">
        <Login src={rabbit} alt="rabbit" />
      </div>
      <Butterfly src={BUTTERFLY_LEFT} top="0" />
      <Title className="font-fairy-tail">Hyowon's Portfolio</Title>
      <Butterfly src={BUTTERFLY_RIGHT} top="24%" />
      <CategoryWrapper>
        <Category
          variants={mushroomVariants}
          whileHover="hover"
          className="transform-center-left"
        >
          <Mushroom
            src={mushroomImg[CategoryText.PROFILE]}
            onMouseEnter={() => onMushroomHover(CategoryText.PROFILE)}
            onMouseLeave={() => onMushroomInitial(CategoryText.PROFILE)}
          ></Mushroom>
          <PageLabel
            onMouseEnter={() => onMushroomHover(CategoryText.PROFILE)}
            onMouseLeave={() => onMushroomInitial(CategoryText.PROFILE)}
          >
            Profile
          </PageLabel>
        </Category>
        <Category variants={mushroomVariants} whileHover="hover">
          <Mushroom
            src={mushroomImg[CategoryText.SKILLS]}
            onMouseEnter={() => onMushroomHover(CategoryText.SKILLS)}
            onMouseLeave={() => onMushroomInitial(CategoryText.SKILLS)}
          />
          <PageLabel
            onMouseEnter={() => onMushroomHover(CategoryText.SKILLS)}
            onMouseLeave={() => onMushroomInitial(CategoryText.SKILLS)}
          >
            Skills
          </PageLabel>
        </Category>
        <Category variants={mushroomVariants} whileHover="hover">
          <Mushroom
            src={mushroomImg[CategoryText.PROJECT]}
            onMouseEnter={() => onMushroomHover(CategoryText.PROJECT)}
            onMouseLeave={() => onMushroomInitial(CategoryText.PROJECT)}
          />
          <PageLabel
            onMouseEnter={() => onMushroomHover(CategoryText.PROJECT)}
            onMouseLeave={() => onMushroomInitial(CategoryText.PROJECT)}
          >
            Projects
          </PageLabel>
        </Category>
        <Category
          variants={mushroomVariants}
          whileHover="hover"
          className="transform-center-right"
        >
          <Mushroom
            src={mushroomImg[CategoryText.CONTACT]}
            onMouseEnter={() => onMushroomHover(CategoryText.CONTACT)}
            onMouseLeave={() => onMushroomInitial(CategoryText.CONTACT)}
          />
          <PageLabel
            onMouseEnter={() => onMushroomHover(CategoryText.CONTACT)}
            onMouseLeave={() => onMushroomInitial(CategoryText.CONTACT)}
          >
            Contact
          </PageLabel>
        </Category>
      </CategoryWrapper>
      <BackgroundWrapper>
        <Grass src={GRASS} />
        <Flowers>
          <FlowerFirstRow>
            <Flower src={flower1} transform="matrix(-1, 0, 0, 1, 0, 0)" />
            <Flower src={flower3} transform="matrix(-1, 0, 0, 1, 0, 0)" />
            <Flower src={flower5} transform="matrix(-1, 0, 0, 1, 0, 0)" />
          </FlowerFirstRow>
          <FlowerSecondRow>
            <Flower src={flower2} transform="" />
            <Flower src={flower4} transform="" />
          </FlowerSecondRow>
        </Flowers>
      </BackgroundWrapper>
    </Wrapper>
  );
}

export default Home;
