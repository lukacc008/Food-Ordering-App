import React, { Fragment } from "react";
import Card from "../components/UI/Card";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import classes from "./Contact.module.css";

const containerStyle = {
  width: "",
  height: "400px",
  top: "4.10rem",
};

const center = {
  lat: 44.80180067683327,
  lng: 20.386125341525528,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC9UQQJY9uwZBh8mBc4YE1mzNV0BU-RGaI",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Fragment>
      <header className={classes.header}>
        <h1>Svratite do nas!</h1>
        <h2>Mobilni: 060 000 111 2</h2>
        <h3>Adresa: Jurija Gagarina 151, Beograd</h3>
      </header>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </Fragment>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
