import React from "react";
import styled from "styled-components";
import uploadPic from "../assets/images/uploadpicture.png";
// Style the Button component
const Button = styled.button`
  /* Insert your favorite CSS code to style a button */

  border: 0.065rem dashed grey;
  border-radius: 10px;
  height: 80px;
  width: 100%;
  background-color: transparent;

  .upload-pic {
    width: 50px;
  }

  .button-upload-pic {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const UploadPictureButton = (props) => {
  const { handlePicture } = props;
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    /* props.handleFile(fileUploaded); */
    handlePicture(fileUploaded);
  };
  return (
    <>
      <label className="picture-input" htmlFor="picture">
        Add picture*
      </label>
      <Button className="button-upload-pic" onClick={handleClick}>
        <img className="upload-pic" src={uploadPic} alt="upload-pic" />
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default UploadPictureButton;
