import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 12.2rem 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: unset;
  }
`;

export const SideContainer = styled.div`
  width: 36.2rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    align-items: unset;
  }

  > a {
    margin-top: 4.2rem;
    width: 30rem;
    height: 6rem;
    left: 12.2rem;
    background-color: var(--primary);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;

    font-weight: 700;
    font-size: 2.4rem;
    text-decoration: none;
    color: var(--background);

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-primary);
    }

    @media (min-width: 1100px) {
      margin-top: 8.6rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 12.8rem;
    width: 12.8rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 2.4rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Pompiere;
    font-size: 4.2rem;
    color: var(--dark1);
  }

  h2 {
    font-family: Pompiere;
    font-size: 2.8rem;
    color: var(--dark-primary);
  }
`;

export const Filters = styled.div`
  margin-top: 3.6rem;
  max-width: 136px;

  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    background: transparent;
    color: var(--dark-primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    h1 {
      font-family: Pompiere;
      font-size: 3.6rem;
    }

    svg {
      margin-left: 1.2rem;
    }
  }

  div {
    margin-top: 2.4rem;
    width: 30rem;
  }

  #filterButton {
    color: var(--background);
    background-color: var(--primary);
    margin-top: 2.4rem;
    width: 30rem;
    height: 6rem;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    font-size: 2.4rem;
    font-weight: 700;
    transition: background-color 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
      background-color: var(--dark-primary);
    }
  }

  @media (min-width: 700px) {
    margin-top: 5.2rem;
  }

  @media (min-width: 1100px) {
    align-items: unset;
  }
`;

export const ItensContainer = styled.div`
  margin-top: 3.6rem;
  max-width: 83.4rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Pompiere;
    font-size: 4.8rem;
    color: var(--dark1);
  }

  @media (min-width: 700px) {
    margin-top: 0;
  }

  @media (min-width: 1100px) {
    align-items: unset;
  }
`;

export const ItensScroll = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: Pompiere;
    color: var(--dark1);
    font-size: 3.2rem;
  }

  div + div {
    margin-top: 9.6rem;
  }

  @media (min-width: 700px) {
    margin-left: 3.2rem;
  }

  @media (min-width: 1100px) {
    max-height: 80rem;
    margin-bottom: -10rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 9.6rem;
    grid-column-gap: 8rem;

    div + div {
      margin-top: 0;
    }

    overflow: scroll;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--dark-primary);
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }
`;
