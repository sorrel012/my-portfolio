import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import sun from '../assets/images/skills/sun.png';
import tree from '../assets/images/skills/tree.png';
import apple from '../assets/images/skills/apple.png';
import peach from '../assets/images/skills/peach.png';
import orange from '../assets/images/skills/orange.png';
import java from '../assets/images/tmp/back/java.png';
import spring from '../assets/images/tmp/back/spring.png';
import springboot from '../assets/images/tmp/back/spring boot.png';
import oracle from '../assets/images/tmp/back/oracle.png';
import postgresql from '../assets/images/tmp/back/postgre.png';
import html from '../assets/images/tmp/front/html.png';
import css from '../assets/images/tmp/front/css.png';
import javascript from '../assets/images/tmp/front/js.png';
import typescript from '../assets/images/tmp/front/ts.png';
import vue from '../assets/images/tmp/front/vue.png';
import react from '../assets/images/tmp/front/react.png';
import next from '../assets/images/tmp/front/next.png';
import webstorm from '../assets/images/tmp/tool/webstorm.png';
import intellij from '../assets/images/tmp/tool/intellij.png';
import git from '../assets/images/tmp/tool/git.png';
import figma from '../assets/images/tmp/tool/figma.png';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header.tsx';

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

const Apple = styled(motion.div)`
  position: absolute;
  top: 32%;
  left: 2%;
`;

const AppleImg = styled(motion.img)`
  width: 30%;
  transform: rotate(-20deg);
  cursor: pointer;
`;

const Peach = styled(motion.div)`
  position: absolute;
  top: 45%;
  left: 60%;
`;

const PeachImg = styled(motion.img)`
  width: 65%;
  transform: rotate(15deg);
  cursor: pointer;
`;

const Orange = styled(motion.div)`
  position: absolute;
  top: 8%;
  left: 47%;
`;

const OrangeImg = styled(motion.img)`
  width: 47%;
  transform: rotate(-3deg);
  cursor: pointer;
`;

const AppleOpen = styled(motion.section)`
  position: absolute;
  width: 30%;
  left: 2%;
  bottom: 5%;
  background-color: rgba(204, 47, 52, 0.5);
  border: none;
  border-radius: 50%;
  padding: 30px;
  box-shadow: 8px 6px 15px rgba(119, 26, 29, 0.25);
  text-align: center;
`;

const BackLogo = styled.img`
  width: 40%;
  padding: 10px;
`;

const PeachOpen = styled(motion.section)`
  position: absolute;
  width: 30%;
  right: 5%;
  bottom: 5%;
  background-color: rgba(252, 132, 117, 0.38);
  border: none;
  border-radius: 50%;
  padding: 50px;
  box-shadow: 8px 6px 15px rgba(117, 10, 58, 0.38);
  text-align: center;
`;

const FrontLogo = styled.img`
  width: 30%;
  padding: 20px;
`;

const OrangeOpen = styled(motion.section)`
  position: absolute;
  width: 25%;
  top: 5%;
  right: 5%;
  background-color: rgba(254, 182, 66, 0.4);
  border: none;
  border-radius: 50%;
  padding: 50px;
  box-shadow: 8px 6px 15px rgba(129, 87, 19, 0.25);
  text-align: center;
`;

const ToolLogo = styled.img`
  width: 35%;
  padding: 0 10px;
`;

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
  const [isAppleClicked, setIsAppleClicked] = useState(false);
  const [isPeachClicked, setIsPeachClicked] = useState(false);
  const [isOrangeClicked, setIsOrangeClicked] = useState(false);

  const appleRef = useRef<HTMLDivElement>(null);
  const peachRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        appleRef.current &&
        !appleRef.current.contains(event.target as Node)
      ) {
        setIsAppleClicked(false);
      }
      if (
        peachRef.current &&
        !peachRef.current.contains(event.target as Node)
      ) {
        setIsPeachClicked(false);
      }
      if (
        orangeRef.current &&
        !orangeRef.current.contains(event.target as Node)
      ) {
        setIsOrangeClicked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onAppleClick = () => {
    setIsAppleClicked(true);
    setIsPeachClicked(false);
    setIsOrangeClicked(false);
  };
  const onPeachClick = () => {
    setIsPeachClicked(true);
    setIsAppleClicked(false);
    setIsOrangeClicked(false);
  };
  const onOrangeClick = () => {
    setIsOrangeClicked(true);
    setIsAppleClicked(false);
    setIsPeachClicked(false);
  };

  return (
    <Wrapper>
      <Header category="skills" />
      {!isAppleClicked && (
        <Sun>
          <Image src={sun} alt="skills label" />
        </Sun>
      )}
      <AnimatePresence>
        <TreeWrapper>
          <Tree src={tree} alt="skills" />
          <Apple layoutId="apple">
            <AppleImg
              src={apple}
              alt="back-end"
              variants={fruitVariants('-20')}
              initial="initial"
              whileHover="hover"
              onClick={onAppleClick}
            />
          </Apple>
          <Peach layoutId="peach">
            <PeachImg
              src={peach}
              alt="front-end"
              variants={fruitVariants('15')}
              initial="initial"
              whileHover="hover"
              onClick={onPeachClick}
            />
          </Peach>
          <Orange layoutId="orange">
            <OrangeImg
              src={orange}
              alt="tool"
              variants={fruitVariants('-3')}
              initial="initial"
              whileHover="hover"
              onClick={onOrangeClick}
            />
          </Orange>
        </TreeWrapper>
        {isAppleClicked && (
          <AppleOpen layoutId="apple" ref={appleRef}>
            <BackLogo src={java} alt="java" />
            <BackLogo src={spring} alt="spring" />
            <BackLogo src={springboot} alt="spring-boot" />
            <BackLogo src={oracle} alt="oracle" />
            <BackLogo src={postgresql} alt="postgresql" />
          </AppleOpen>
        )}
        {isPeachClicked && (
          <PeachOpen layoutId="peach" ref={peachRef}>
            <FrontLogo src={html} alt="html" />
            <FrontLogo src={css} alt="css" />
            <FrontLogo src={javascript} alt="javascript" />
            <FrontLogo src={typescript} alt="typescript" />
            <FrontLogo src={vue} alt="vue" />
            <FrontLogo src={react} alt="react" />
            <FrontLogo src={next} alt="next" />
          </PeachOpen>
        )}
        {isOrangeClicked && (
          <OrangeOpen layoutId="orange" ref={orangeRef}>
            <ToolLogo src={webstorm} alt="webstorm" />
            <ToolLogo src={intellij} alt="intellij" />
            <ToolLogo src={git} alt="git" />
            <ToolLogo src={figma} alt="figma" />
          </OrangeOpen>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Skills;
