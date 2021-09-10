import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1620px;

  display: grid;
  grid-template-columns: 1fr 5fr 3fr;

  padding: 20px;
  gap: 20px;

  @media (max-width: 1200px) { 
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;

    .asides { order: 1; }

    .posts-list { max-width: 600px; }
  }

  @media (max-width: 840px) { 
    .posts-list { 
      order: 1; 
      max-width: 600px;
    }

    .asides { 
      margin-top: 100px;
      order: 2;
      width: 100%;
      max-width: 600px; 
    }
  }

  .posts-list {
    order: 2;
    width: 100%;
    min-width: 400px;
    max-width: 800px;
    height: 400px;
    
    @media (max-width: 800px) {
      margin-bottom: 80px;
    }
  }

  .asides {
    order: 3;
    height: 400px;
    min-width: 400px;
  } 
`;

