import React, { useState } from "react";
import filterIcon from "../assets/images/filter_list.svg";
import arrowBack from "../assets/images/arrow_back.svg";
import styled from "styled-components";

function ButtonFilter() {
  const [open, setOpen] = useState(false);

  const OpenCanvas = styled.div`
    width: 24px;
    height: 16px;
    position: fixed;
  `;
  const CloseCanvas = styled.div`
    position: fixed;
    left: 17px;
    top: 57px;
  `;

  const OffCanvas = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    overflow-x: hidden;
    transition: 2s;
    background-color: ${({ theme }) => theme.colors.white};

    .filterForm {
      position: fixed;
      top: 95px;
    }
  `;

  const handlOpen = () => {
    console.log("clicking");
    setOpen(!open);
  };

  return (
    <>
      <OpenCanvas onClick={handlOpen}>
        <img src={filterIcon} alt="icon" />
      </OpenCanvas>
      {open && (
        <>
          <OffCanvas className="offCanvas">
            <CloseCanvas className="arrowBack" onClick={handlOpen}>
              <img src={arrowBack} alt="icon" />
            </CloseCanvas>
            <div className="filterForm">
              {/* here the filterComponent goes*/}
            </div>
          </OffCanvas>
        </>
      )}
    </>
  );
}

export default ButtonFilter;
