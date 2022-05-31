import React, { useEffect, useRef } from "react";

function MyMap({ center }) {
  const ref = useRef();
  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom: 15,
      disableDefaultUI: true,
    });
    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, []);

  return <div ref={ref} id='map' style={{ height: "300px", width: "100%" }} />;
}

export default MyMap;
