import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background: #FFF;

  border-radius: 10px;
  margin-bottom: 14px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      width: 64px;
      height: 64px;
      
      border: 4px solid #2C5E90;
      border-radius: 50%;
  
      img {
        width: 56px;
        height: 56px;
  
        border: 1px solid #FFF;
        border-radius: 50%;
      }
    }

    .post-header-data {
      width: 100%;
      padding: 10px;

      #author {
        font-size: 1.2rem;
        font-weight: bold;
        color: #2C5E90;
      }

      span {
        font-size: 0.8rem;
        margin-right: 10px;
        font-weight: 600;
        letter-spacing: -0.5px;
        color: #555555;

        display: inline-flex;
        align-items: center;

        img { margin-right: 2px; }
      }
    }

    #options-btn {
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  #post-body {
    margin: 15px 0;
    width: 100%;
  }


  footer {
    margin-top: 20px;

    .post-footer-data {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 0.8rem;
        margin-right: 10px;
        letter-spacing: -0.5px;
        color: #555555;
      }
    }

    .footer-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 15px 5px 0;
      gap: 10px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        padding: 7px;
        gap: 5px;

        border: 1px solid #555555;
        border-radius: 20px;

        font-size: 1rem;
        color: #555555;

        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
      .isLiked {
        svg path {
          fill: #2C5E90;
        }
      }
    }
  }
`;
