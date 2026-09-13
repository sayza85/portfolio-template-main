import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 60px;
  padding: 20px 32px;
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 30px;
    padding: 20px 10px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-top: 20px;
  h2 {
    font-size: 1.8rem;
    color: #fff;
  }
  p {
    color: #aaa;
    font-size: 0.95rem;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const MainPage: React.FC = () => (
  <GamesContainer>
    <SectionHeader>
      <h2>Featured Projects</h2>
      <p>Game Development & Software Engineering Portfolio</p>
    </SectionHeader>
    
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== games.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </GamesContainer>
);

export default MainPage;