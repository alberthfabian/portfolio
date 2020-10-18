// import React, { useEffect, useMemo } from 'react';
import React, { useMemo, useState, useCallback } from 'react';
import { DataProjects } from '../components/DataProjects';
import { Technologies } from '../components/Technologies';
import { Diplomas } from '../components/Diplomas'; 
import { Areas } from '../components/Areas';

const Server = React.createContext();

export function ServerProvider(props) {

  const[ onlyDiploma, setOnlyDiploma ] = useState([]);
  const[ menu, setMenu ] = useState(false);

  const openDiploma = useCallback((type, id) => {
    const diploma = Diplomas.filter(diploma => diploma.type === type);
    const value = diploma[0].description.filter(value => value.id === parseInt(id));
    setOnlyDiploma(value[0]);
  },[]);

  const modal = useCallback((e) => {
    setMenu(e);
  },[]);

  const value = useMemo(() => {
    return ({
      menu,
      Areas,
      onlyDiploma,
      DataProjects,
      Technologies,
      Diplomas,
      openDiploma,
      modal
    })
  }, [ menu, onlyDiploma, openDiploma, modal ]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}