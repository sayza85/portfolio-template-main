import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column } from "../Styles/StyledComponents";

const Container = styled(Column)`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 32px;
  box-sizing: border-box;
`;

const ProfileLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.4fr);
  align-items: start;
  gap: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const ProfileDetails = styled(Column)`
  min-width: 0;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 390px;
  aspect-ratio: 4 / 5;
  border-radius: 16px;
  object-fit: cover;
  border: 5px solid rgb(238, 231, 166);
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 320px;
    justify-self: center;
  }
`;

const NameTitle = styled.h1`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  color: #fff;
  line-height: 1.2;
  margin: 0 0 12px;
`;

const SubTitle = styled.h3`
  font-size: 1.15rem;
  color: #aaa;
  margin: 0;
  font-weight: normal;
  line-height: 1.6;
`;

const AboutText = styled.p`
  line-height: 1.9;
  margin: 28px 0 0;
  white-space: pre-line;
  color: #ddd;
  font-size: 1.15rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsBox = styled.div`
  width: 100%;
  background: #1a1a1a;
  padding: 22px 24px;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: left;
  border: 1px solid #333;
  margin-top: 28px;

  h4 {
    color: rgb(238, 231, 166);
    margin-bottom: 10px;
    text-align: center;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    color: #ccc;
    font-size: 1rem;
    line-height: 1.7;

    li {
      margin-bottom: 6px;
    }
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfileLayout>
        <ProfileImage src={PersonalInfo.image} alt="Kanthira Phannin" />
        <ProfileDetails>
          <NameTitle>Kanthira Phannin (กานต์ธีรา พันธ์นิน)</NameTitle>
          <SubTitle>Year 4 Computer Science Student | Rajamangala University of Technology Isan</SubTitle>

          <AboutText>{PersonalInfo.description}</AboutText>

          <SkillsBox>
            <h4>Technical Skills & Tools</h4>
            <ul>
              <li><strong>Game Development:</strong> Unity, C# (Gameplay Mechanics, Atmosphere Systems)</li>
              <li><strong>Programming Languages:</strong> JavaScript, TypeScript, C#, Golang, Dart</li>
              <li><strong>Frontend & Backend:</strong> React, Tailwind CSS, Node.js, Golang</li>
              <li><strong>Database & Tools:</strong> MongoDB, PostgreSQL, Git, Docker, Firebase</li>
            </ul>
          </SkillsBox>

        </ProfileDetails>
      </ProfileLayout>
    </Container>
  );
};

export default AboutMe;