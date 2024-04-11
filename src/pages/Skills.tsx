import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import sun from '../assets/images/skills/sun.png';
import tree from '../assets/images/skills/tree.png';
import apple from '../assets/images/skills/apple.png';
import peach from '../assets/images/skills/peach.png';
import orange from '../assets/images/skills/orange.png';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header.tsx';
import { ISkills } from './admin/AdminSkills.tsx';
import { useQuery } from '@tanstack/react-query';
import {
  getClientSkills,
  getServerSkills,
  getToolSkills,
} from '../util/api.ts';
import { AWS_URL } from '../util/constant.ts';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.skills.bgColor};
`;

const Sun = styled.h2`
  position: absolute;
  top: 5%;
  left: 14%;
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
  width: 50%;
  top: 32%;
  left: 2%;
`;

const AppleImg = styled(motion.img)`
  width: 65%;
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
  width: 25%;
  left: 1.5%;
  bottom: 2%;
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
  padding: 3%;
  box-shadow: 8px 6px 15px rgba(117, 10, 58, 0.38);
  text-align: center;
`;

const FrontLogo = styled.img`
  width: 22%;
  padding: 10px;
`;

const OrangeOpen = styled(motion.section)`
  position: absolute;
  width: 20%;
  top: 15%;
  right: 10%;
  background-color: rgba(254, 182, 66, 0.4);
  border: none;
  border-radius: 50%;
  padding: 50px;
  box-shadow: 8px 6px 15px rgba(129, 87, 19, 0.25);
  text-align: center;
`;

const ToolLogo = styled.img`
  width: 40%;
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

  const { data: clientData, isLoading: clientIsLoading } = useQuery({
    queryKey: ['clientSkills'],
    queryFn: getClientSkills,
  });
  const { data: serverData, isLoading: serverIsLoading } = useQuery({
    queryKey: ['serverSkills'],
    queryFn: getServerSkills,
  });
  const { data: toolData, isLoading: toolIsLoading } = useQuery({
    queryKey: ['toolSkills'],
    queryFn: getToolSkills,
  });

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
      <Sun>
        <Image src={sun} alt="skills label" />
      </Sun>
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
            {!serverIsLoading &&
              serverData &&
              serverData.map((server: ISkills) => (
                <BackLogo
                  key={server.skillsLogo}
                  src={`${AWS_URL}/${server.skillsLogo}`}
                  alt={server.skillsLogo}
                />
              ))}
          </AppleOpen>
        )}
        {isPeachClicked && (
          <PeachOpen layoutId="peach" ref={peachRef}>
            {!clientIsLoading &&
              clientData &&
              clientData.map((client: ISkills) => (
                <FrontLogo
                  key={client.skillsLogo}
                  src={`${AWS_URL}/${client.skillsLogo}`}
                  alt={client.skillsLogo}
                />
              ))}
          </PeachOpen>
        )}
        {isOrangeClicked && (
          <OrangeOpen layoutId="orange" ref={orangeRef}>
            {!toolIsLoading &&
              toolData &&
              toolData.map((tool: ISkills) => (
                <ToolLogo
                  key={tool.skillsLogo}
                  src={`${AWS_URL}/${tool.skillsLogo}`}
                  alt={tool.skillsLogo}
                />
              ))}
          </OrangeOpen>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Skills;
