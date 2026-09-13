import React from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  width: 100%;
  margin: 24px 0 60px;
`;

const ContactContainer = styled(Column)`
  width: min(100%, 720px);
  padding: 42px 48px;
  box-sizing: border-box;
  align-items: stretch;
  background: rgba(18, 18, 18, 0.96);
  border-radius: 14px;
  color: white;
  border: 1px solid #555;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 22px;
  }
`;

const Title = styled.h2`
  margin: 0 0 12px;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  line-height: 1.2;
  text-align: center;
  color: rgb(238, 231, 166);
`;

const Intro = styled.p`
  margin: 0 auto 28px;
  max-width: 560px;
  color: #c9c9c9;
  text-align: center;
  font-size: 1rem;
  line-height: 1.7;
`;

const ContactInfoList = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 0;
    padding: 15px 16px;
    border: 1px solid #343434;
    border-radius: 8px;
    font-size: 1.05rem;
    line-height: 1.5;
    color: #e5e5e5;

    strong {
      min-width: 72px;
      color: #fff;
    }

    a {
      color: #4da6ff;
      overflow-wrap: anywhere;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactMe: React.FC = () => {
  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Intro>
          I am currently looking for an internship position as a Game Developer / Programmer. Feel free to contact me!
        </Intro>
        
        <ContactInfoList>
          <p>📞 <strong>Phone:</strong> <a href="tel:0636406948">063-640-6948</a></p>
          <p>📧 <strong>Email:</strong> <a href="mailto:izaktrpn1@gmail.com">izaktrpn1@gmail.com</a></p>
          <p>🐙 <strong>GitHub:</strong> <a href="https://github.com/sayza85" target="_blank" rel="noopener noreferrer">github.com/sayza85</a></p>
        </ContactInfoList>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;