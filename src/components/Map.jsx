import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
        fill="#111827"
        stroke="#FFFFFF"
        strokeWidth={1}
        strokeOpacity={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Marker coordinates={[1.2522, 41.8566]}>
        <circle r={8} fill="white" />
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;
