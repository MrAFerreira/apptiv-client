import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import MyMap from "./MyMap";

/* using this component:
      <MapWrapper
        center={{ lat: 38.72726949547492, lng: -9.139262879074261 }}
      />
*/

function MapWrapper({ center }) {
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS} render={render}>
      <MyMap center={center} />
    </Wrapper>
  );
}

export default MapWrapper;
