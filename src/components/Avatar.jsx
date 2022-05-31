import React from "react";
import styled from "styled-components";

const AvatarTag = styled.img`
  border-radius: 50%;
  display: inline-block;
  border-style: none;
  height: ${(props) => props.width || "56px"};
  width: ${(props) => props.width || "56px"};
`;

function Avatar({ image, width }) {
  return <AvatarTag src={image} width={width} alt="avatar" />;
}

export default Avatar;
