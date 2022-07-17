import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import classes from "./Map.module.css";

const containerStyle = {
    width: "",
    height: "550px",
    top: "4.10rem",
  };
  
  const center = {
    lat: 44.80180067683327,
    lng: 20.386125341525528,
  };
  
  function Map() {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyC9UQQJY9uwZBh8mBc4YE1mzNV0BU-RGaI",
    });
  
    const [map, setMap] = React.useState(null);
  
    const onLoad = React.useCallback(function callback(map) {
      const marker = new google.maps.Marker({
        lat: 44.80203290514809, 
        lng: 20.38691282706356,
        map: map,
      });
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
          <h2>Svratite do nas!</h2>
          <h2>Mobilni: 060 000 111 2</h2>
          <h3>Adresa: Jurija Gagarina 151, Beograd</h3>
        </header>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
        ></GoogleMap>
      </Fragment>
    ) : (
      <></>
    );
  }
  
  export default React.memo(Map);