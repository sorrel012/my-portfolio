import styled from 'styled-components';

import sun from '../assets/images/skills/sun.png';
import tree from '../assets/images/skills/tree.png';
import apple from '../assets/images/skills/apple.png';
import peach from '../assets/images/skills/peach.png';
import orange from '../assets/images/skills/orange.png';
import { motion } from 'framer-motion';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.skills.bgColor};
`;

const Sun = styled.h2`
  position: absolute;
  top: 10%;
  left: 5%;
`;

const Image = styled.img`
  width: 20vw;
`;

const TreeWrapper = styled.section`
  position: absolute;
  bottom: -2%;
  right: 30%;
`;

const Tree = styled.img`
  width: 40vw;
`;

const Apple = styled.div`
  position: absolute;
  top: 32%;
  left: 2%;
`;

const AppleImg = styled(motion.img)`
  width: 30%;
  transform: rotate(-20deg);
  cursor: pointer;
`;

const Peach = styled.div`
  position: absolute;
  top: 45%;
  left: 60%;
`;

const PeachImg = styled(motion.img)`
  width: 65%;
  transform: rotate(15deg);
  cursor: pointer;
`;

const Orange = styled.div`
  position: absolute;
  top: 8%;
  left: 47%;
`;

const OrangeImg = styled(motion.img)`
  width: 47%;
  transform: rotate(-3deg);
  cursor: pointer;
`;

const AppleOpen = styled.div`
  position: absolute;
  width: 25%;
  left: 5%;
  bottom: 5%;
  background-color: rgba(204, 47, 52, 0.5);
  border: none;
  border-radius: 50%;
  padding: 50px;
  box-shadow: 8px 6px 15px rgba(119, 26, 29, 0.25);
`;

const BackLogo = styled.svg`
  width: 30%;
  padding: 0 10px;
`;

const PeachOpen = styled.div`
  position: absolute;
  width: 25%;
  right: 5%;
  bottom: 5%;
  background-color: rgba(252, 132, 117, 0.38);
  border: none;
  border-radius: 50%;
  padding: 50px;
  box-shadow: 8px 6px 15px rgba(117, 10, 58, 0.38);
`;

const FrontLogo = styled.img``;

const OrangeOpen = styled.div`
  position: absolute;
  width: 25%;
  top: 5%;
  right: 5%;
  background-color: rgba(254, 182, 66, 0.4);
  border: none;
  border-radius: 50%;
  padding: 50px;
  box-shadow: 8px 6px 15px rgba(129, 87, 19, 0.25);
`;

const ToolLogo = styled.img``;

const fruitVariants = (degree: string) => ({
  initial: { scale: 1, rotate: `${degree}deg` },
  hover: {
    scale: 1.2,
    rotate: `${Number(degree) - 10}deg`,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 8,
    },
  },
});

const Skills = function Skills() {
  return (
    <Wrapper>
      <Sun>
        <Image src={sun} />
      </Sun>
      <TreeWrapper>
        <Tree src={tree} />
        <Apple>
          <AppleImg
            src={apple}
            variants={fruitVariants('-20')}
            initial="initial"
            whileHover="hover"
          />
        </Apple>
        <Peach>
          <PeachImg
            src={peach}
            variants={fruitVariants('15')}
            initial="initial"
            whileHover="hover"
          />
        </Peach>
        <Orange>
          <OrangeImg
            src={orange}
            variants={fruitVariants('-3')}
            initial="initial"
            whileHover="hover"
          />
        </Orange>
      </TreeWrapper>
      <AppleOpen>
      </AppleOpen>
      <PeachOpen>
        <FrontLogo />
      </PeachOpen>
      <OrangeOpen>
        <ToolLogo />
      </OrangeOpen>
    </Wrapper>
  );
};

export default Skills;
