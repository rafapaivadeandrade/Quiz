import styled, { css } from 'styled-components';
import { useField, Field, FieldAttributes } from "formik";

interface ContainerProps {
  isfocused?: Boolean;
  isfilled?: string;
  iserroed?: string;
}

export const Container = styled(Field)<ContainerProps>`

  background-color: #f2f2f2;
  border: 2px solid #DBE2EA;
  height: 126px;
  width: 581px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: #757575;
  display: flex;
  flex-direction: column;
  outline: none;
  font-size: 31.3px;
  border-radius: 10px;

  ${(props) =>
    props.iserroed && props.isfocused &&
    css`
      border-color: #e83f5b;
    `}

  ${(props) =>
    props.isfocused && !props.iserroed && 
    css`
      border-color: #c2c2c2;
    `}

  ${(props) =>
    props.isfilled && !props.iserroed &&
    css`
      border-color: #c2c2c2;
    `}

    &::placeholder {
      color: #bbc7d5;
      text-decoration: none;
    }
`;

export const Error = styled.span`
  color: #e83f5b;
  font-size: 41.3px;
  margin-top: -35px;
`;
