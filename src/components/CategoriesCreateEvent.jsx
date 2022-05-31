import React from "react";
import styled from "styled-components";

let catArr = [
  "Sports",
  "Social",
  "Health & Wellbeing",
  "Travel",
  "Family",
  "Brunch",
  "Spirituality",
  "Dance",
  "Others",
];

const CategoriesTag = styled.div`
  width: 85vw;
  margin: 1rem 0;

  ul {
    padding: 0;
    margin: 0;
    clear: both;
  }

  li {
    list-style-type: none;
    list-style-position: outside;
    /* padding: 10px; */
    float: left;
  }

  input[type="checkbox"]:not(:checked),
  input[type="checkbox"]:checked {
    position: absolute;
    left: -9999%;
  }

  input[type="checkbox"] + label {
    min-width: 10vw;
    font-size: 0.8rem;
    font-weight: 550;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    cursor: pointer;
    border: 0.09rem solid ${({ theme }) => theme.colors.mainOrange};
    border-radius: 35px;
    color: black;
    background-color: white;
    margin-bottom: 2px;
  }

  input[type="checkbox"]:checked + label {
    border: 0.09rem solid transparent;
    border-radius: 35px;
    color: white;
    background-color: ${({ theme }) => theme.colors.mainOrange};
  }
`;

function CategoriesCreateEvent(props) {
  return (
    <CategoriesTag>
      <label htmlFor="categories">Categories*</label>

      <ul>
        {catArr.map((cat) => {
          return (
            <li key={cat}>
              <input
                onChange={props.handleCategories}
                type="checkbox"
                id={cat}
                name={cat}
                value={cat}
              />
              <label for={cat}>{cat}</label>
            </li>
          );
        })}
      </ul>
    </CategoriesTag>
  );
}

export default CategoriesCreateEvent;
