import React from 'react';
import styled from "styled-components";
import WaveBackground from "../assests/footer/wave.png"
import MailIcon from '../assests/footer/gmail.png';
import LinkedInIcon from '../assests/footer/linkedin.png';
import GitHubIcon from '../assests/footer/github.png';
import {mobile} from "../responsive";

const Container = styled.div `
  display: flex;
  align-items: center;
  margin: -0.5rem -3.5rem;
  position: relative;
`;

const BackgroundImage = styled.img `
  width: 100%;
`;

const Content = styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;

  ${mobile({
    marginTop: '2rem'
  })}
`;

const Text = styled.span `
  color: white;
  text-align: center;
  
  ${mobile({
    display: 'none'
  })}
`;

const Icons = styled.div `
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;

const Mail = styled.img `
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const LinkedIn = styled.img `
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const GitHub = styled.img `
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const Footer = () => {
    return (
        <Container>
            <BackgroundImage src={WaveBackground} alt="Background"/>
            <Content>
                <Text>
                    Built with <span style={{ fontWeight: 'bold' }}>React.Js</span>, deployed with GitHub pages. <br/>
                    By <span style={{ fontWeight: 'bold' }}>Nischal Dwaral: nischal.dwaral@gmail.com</span>
                </Text>
                <Icons>
                    <Mail src={MailIcon} onClick={() => window.location.href = 'mailto:nischal.dwaral@gmail.com'}/>
                    <LinkedIn src={LinkedInIcon} onClick={() => window.open('https://www.linkedin.com/in/nischal-srinivas-dwaral/', '_blank')}/>
                    <GitHub src={GitHubIcon} onClick={() => window.open('https://github.com/Nischal-S-Dwaral', '_blank')}/>
                </Icons>
            </Content>
        </Container>
    );
};

export default Footer;
