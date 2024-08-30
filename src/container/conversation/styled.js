import Styled from 'styled-components';

const ConversationContainer = Styled.div`
  width: 100%;

   @media (max-width: 600px) {
    width: 100%;
    bottom: 0;
  }
`;

const ConversationWrapper = Styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

const Heading = Styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const ConversationBox = Styled.div`
  margin-top: 15px;
  padding: 5px 10px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.07);
`;

const StyledInput = Styled.input`
  border-radius: 9999px;
  border: 0.5px solid #0eb4fb;
  width: 100%;
  height: 45px;
  padding: 0px 36px 0px 10px;
  font-weight: 500;
  color: black;

  ::placeholder {
    color: gray;
    font-weight: 400;
  }
`;

const StyledContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 3px;
  border-radius: 6px;
  box-shadow: 0px 6px 6px -6px rgba(0, 0, 0, 0.3); /* Bottom-only shadow */
`;

const StyledParagraph = Styled.p`
  margin: 0; 
  padding: 5px; 
  background-color: white; 
  flex: 0 1 auto;
`;


export { ConversationBox, ConversationContainer, ConversationWrapper, Heading, StyledContainer, StyledInput, StyledParagraph };

