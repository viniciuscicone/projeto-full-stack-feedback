import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 1.0vw;
`;

export const CardLeaguer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 16px;
  width: 24rem;
  height: 6rem;
  margin-top: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 1.0vw;
`;

export const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;