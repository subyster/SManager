import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--secondary);
  left: 0%;
  right: 0%;
  top: 0px;
  z-index: 5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 8rem;
  }

  @media (min-width: 1100px) {
    padding: 0 12rem;
  }
`;

export const HeaderContent = styled.div`
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: League Script;
    font-size: 3.6rem;
    color: var(--dark-primary);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  > a,
  > button {
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    text-decoration: none;
    color: var(--dark-primary);
    height: 8rem;
    transition: background-color 0.4s;

    span {
      font-family: Pompiere;
      font-size: 3.2rem;
      display: none;
    }

    svg {
      height: 3.6rem;
      width: 3.6rem;
    }

    &:hover {
      background-color: var(--background);
    }
  }

  @media (min-width: 1100px) {
    > a,
    > button {
      svg {
        display: none;
      }

      span {
        display: inline;
      }
    }
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: -2rem;
  background-color: var(--background);
  box-shadow: 1px 2px 4px var(--dark-primary);
  width: 100vw;
  z-index: 1;

  display: flex;
  flex-direction: column;

  a,
  button {
    display: flex;
    align-items: center;

    padding: 1.6rem;
    font: 500 2.8rem Pompiere;
    color: var(--dark-primary);
    transition: background-color 0.4s;

    svg {
      margin-right: 2rem;
    }

    &:hover {
      background-color: var(--secondary);
    }
  }

  button {
    color: var(--red);
    background: transparent;
  }

  @media (min-width: 700px) {
    left: unset;
    width: unset;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 2.1rem;
  }

  svg {
    color: var(--dark-primary);
    height: 3.2rem;
    width: 3.2rem;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 700px) {
    margin-left: 2.4rem;
  }

  @media (min-width: 1100px) {
    margin-left: 8rem;
  }
`;
