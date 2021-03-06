import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #FFF;

  border-radius: 10px;

  margin: 10px 0 20px;
  
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 10px;

    color: #238967;
    font-size: 1.1rem;

    img {
      width: 32px;
      height: 32px;
      margin: 5px;
    }
  }

  .horizontal-line {
    display: inline-block;
    width: 100%;
    min-height: 10px;
    background-color: #45454555;
    padding: 2px 10px;
    color: #454545;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .content {
    padding: 20px 40px;
    text-align: center;
    color: #45454595;
    font-weight: bold;
  }
`;
