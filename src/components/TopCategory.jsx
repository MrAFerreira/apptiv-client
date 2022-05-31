import React from 'react'
import styled from "styled-components";

const TopCategoryTag = styled.div`
margin: 30px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.h4 {
  text-align: center;
  position: absolute;
  width: 341px;
  height: 47px;
  color: black;

.p {
box-sizing: border-box;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 18.11%;
background: black;
border: 1px solid black;
border-radius: 8px;
}

}
`;

function TopCategory(interest) {
  return (
      <TopCategoryTag> 
   <h4>The category you’ve done the most</h4>
   <p> 
   <image src={interest.icon} alt='interest_img'/>
   </p>
   <p>{interest.label}</p>
    </TopCategoryTag>
  )
}

export default TopCategory