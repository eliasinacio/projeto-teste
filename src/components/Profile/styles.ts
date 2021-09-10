import styled from 'styled-components';

export const Container = styled.div`
  min-width: 360px;
  height: 560px;

  order: 1;
  
  border-radius: 10px;
  background:#D4F1F4;

  .icon {
    border-radius: 50%;
    width: 190px;
    height: 190px;
    border: 5px solid #2C5E90;

    position: absolute;
    top: -55%;

    img {
      width: 180px;
      height: 180px;
      border: 3px solid #f0f0ff;
      border-radius: 50%;
    }
  }

  #profile-data {
    padding-top: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    #name {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2C5E90;
      margin-bottom: 5px;
    }

    #username {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2a4e72;
      margin-bottom: 5px;
    }

    #job {
      color: #232323;
    }

    footer {
      position: absolute;
      bottom: 0;
      
      padding: 40px 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        gap: 40px;
      }

      #location, #office, #university {
        display: flex;
        align-items: flex-end;
        gap: 5px;
      }
    }
  }
  
  position: relative;

  #bg1 {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 60%;

    background: #75E6DA;    
    border-radius: 30px 0 10px 10px;
  
    &:before {
      content: "";
      position: absolute;
      top: 0;
      border-radius: 30px 0 0 0;
      width: 0;
      border-top: 77px solid rgba(0,0,0,0);
      border-left: 360px solid #189AB4;
    }
  }

  #profile-data {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83%;

    background-color: #fff;

    border-radius: 30px 0 10px 10px;

    &:before {
      position: absolute;
      content: "";
      top: -56px;
      right: 0;
      width: 0px;
      height: 0px;
      border-top: 56px solid rgba(0,0,0,0);
      border-right: 330px solid #FFF;
    }
  }
`;
