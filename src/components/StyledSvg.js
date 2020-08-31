import styled from "styled-components";

export const SvgWrapper = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

export const SvgContainer = styled(SvgWrapper)`
  line-height: 1rem;
  width: ${(props) => props.width || "3rem"};
  height: ${(props) => props.height || "3rem"};
`;

export const SvgIcon = styled.svg`
  width: 100%;
  height: 100%;
`;
