import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0.6rem;
  width: 25.6rem;
  height: 40rem;
  background: var(--pink-ju);
  border-radius: 3.2rem;
  box-shadow: 1px 2px 4px var(--purple-ju);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  max-width: 19.2rem;

  margin: 2.4rem 0;
  font-style: italic;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;

  color: var(--dark1);
`;

export const Content = styled.div`
  width: 23rem;
  height: 26.2rem;

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--dark-purple-ju);
`;
