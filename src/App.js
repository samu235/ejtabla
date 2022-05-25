import MyTable from './componets/MyTable';
import React, { useState, useEffect } from 'react';
import { CenterContainer } from './componets/styleComponets/MainContainer';
import SelectItem from './componets/SelectItem';

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [filterType, setFilterType] = useState("")
  const [select, setSelect] = useState({})

  useEffect(() => {
    fetch("./data.json")
      .then(response => {
        return response.json();
      })
      .then(jsondata => {
        setData(jsondata)
        console.log(jsondata)
      });
  }, [])

  function busquedaOnChange() {
    let filter = document.getElementById('inputBusqueda').value
    setFilter(filter.toUpperCase())

  }
  function newSelect() {
    setFilterType(document.getElementById('select').value)

  }
  


  return (
    <div>
      <CenterContainer>
        <select id="select" defaultValue={"all"} onChange={newSelect}>
          <option value="all" >Busqueda en todo</option>
          <option value="name">Busqueda por nombre</option>
          <option value="lastname" >Busqueda por apellido</option>
          <option value="phone">Busqueda por telefono</option>

        </select>
        <input type="text" id="inputBusqueda" placeholder="busqueda" onChange={busquedaOnChange} />

      </CenterContainer>
      <MyTable data={data} filter={filter} setSelect={setSelect} filterType={filterType} />
      <CenterContainer>
        <SelectItem select={select} />
      </CenterContainer>

    </div>
  );
}

export default App;
