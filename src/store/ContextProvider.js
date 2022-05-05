import React, { useReducer, useState, useCallback } from "react";

import Context from "./context";

const initialState = {
  dataset: [],
  coords: {
    lat: "33.72148",
    lng: "73.04329",
  },
};
const reducerFunction = (prevState, action) => {
  if (action.type === "SEARCH") {
    const newItem = action.value;
    const newCoords = action.coords;

    return {
      dataset: newItem,
      coords: newCoords,
    };
  }
  return initialState;
};

const ContextProvider = (props) => {
  const [appContext, dispatch] = useReducer(reducerFunction, initialState);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAPI = async function (ip) {
    try {
      let objectData = {};
      setIsLoading(true);
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_dNtGmPIIcnmeKXKEmzGwGMV1CTz6P&ipAddress=${ip}`
      );

      const data = await response.json();
      if (!response.ok) {
        setError(true);
        setIsLoading(false);
      }

      const dataObj = {
        ip: data.ip,
        location: `${data.location.city} ${data.location.country}`,
        timezone: data.location.timezone,
        isp: data.isp,
      };

      const coords = {
        lat: data.location.lat,
        lng: data.location.lng,
      };

      Object.assign(objectData, dataObj);

      const valuesObj = Object.values(dataObj);

      const keysObj = Object.keys(objectData);
      let vals = [];
      valuesObj.forEach((val, inx) => {
        vals.push({ [keysObj[inx]]: val });
      });

      dispatch({
        type: "SEARCH",
        value: vals,
        coords: coords,
      });
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const appContextFinal = {
    dispatchAction: dispatch,
    data: appContext.dataset,
    coords: appContext.coords,
    getData: getAPI,
    isLoading,
    error,
  };

  return (
    <Context.Provider value={appContextFinal}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
