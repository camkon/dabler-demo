import React, { useEffect, useState, useContext } from "react";
import "./styles/data.scss";
import { ElementContext } from "../../../utils/elementContext";

const Data = () => {
  const { codeTableData } = useContext(ElementContext);
  const [codeTable, setCodeTable] = codeTableData;
  // const [codeTable, setCodeTable] = useState(JSON.parse(localStorage.getItem('table-data')));

  var tableValues = new Array();
  const [tableKeys, setTableKeys] = useState([]);
  const [tableValuesSet, setTableValuesSet] = useState([]);

  // useEffect(() => {
  //   if (codeTable != undefined) {
  //     setTableKeys(Object.keys(codeTable[0]));
  //     codeTable.map((i) => {
  //       tableValues.push(Object.values(i));
  //     });
  //     setTableValuesSet(tableValues);
  //   }
  // }, [codeTable]);

  if (codeTable != undefined) {

    return (
      <div className="codedata-container">
        <table className="">
          <tr key={"header"}>
            {Object.keys(codeTable[0]).map((key) => (
              <th>{key.toUpperCase()}</th>
            ))}
          </tr>
          {codeTable.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table>
     
      </div>
    );
  } else {
    <div className="codedata-container-null">No Data Available !!!</div>;
  }
};

export default Data;
