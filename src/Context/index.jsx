// import React, { useEffect, useMemo } from 'react';
import React, { useMemo, useState, useCallback } from 'react';
import { DataProjects } from '../components/DataProjects';
import { Technologies } from '../components/Technologies';
import { Diplomas } from '../components/Diplomas'; 

const Server = React.createContext();

export function ServerProvider(props) {

  const[ onlyDiploma, setOnlyDiploma ] = useState([]);

  const openDiploma = useCallback((e) => {
    const diploma = Diplomas.filter(diploma => diploma.id === parseInt(e));
    setOnlyDiploma(diploma[0]);
  },[]);

  const value = useMemo(() => {
    return ({
      onlyDiploma,
      DataProjects,
      Technologies,
      Diplomas,
      openDiploma
    })
  }, [ onlyDiploma, openDiploma]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}