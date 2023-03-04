import styled from 'styled-components';

export const ContainerFlex = styled.section`
  color: #d5d5d5;
  margin-bottom: 30px;
  background: #131821;
  border-radius: 5px;
  gap: 30px;
  display: flex;
  align-items: center;
`;

export const Container = styled.section`
  color: #d5d5d5;
  padding: 22px 50px 50px 60px;
  display: block;
  margin-bottom: 30px;
  background: #131821;
  border-radius: 5px;
  
`;

export const Exiber = styled.section`
  display: block;
  max-width: 300px;
  max-height: 140px;
  overflow-y: auto;
  font-family: 'Golos Text', sans-serif;
  font-family: 'Source Code Pro', monospace;
`;

export const Title = styled.h1`
  font-family: 'Golos Text', sans-serif;
  font-size: 40px;
`;

export const SubTitle = styled.h2`
  font-family: 'Golos Text', sans-serif;
  font-size: 28px;
`;

export const Text = styled.p`
  font-family: 'Golos Text', sans-serif;
  paddin-Left: 20px;
  font-size: 18px;
`;

export const Label = styled.label`
  font-family: 'Golos Text', sans-serif;
  font-size: 20px;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  font-family: 'Golos Text', sans-serif;
  padding: 5px 15px;
  border: none;
	margin-bottom: 10px;
	border-radius: 4px;
  background-color: #E9E9E9;
  &:focus {
    background-color: #D1D1D1;
  }
`;

export const Button = styled.button`
  font-family: 'Golos Text', sans-serif;
  background-color: #E9E9E9;
  border: none;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;