import React, { useEffect, useState, useContext } from "react";
import "./styles/data.scss";
import { ElementContext } from "../../../utils/elementContext";

const Data = () => {
  const { codeTableData } = useContext(ElementContext);
  const [codeTable, setTable] = codeTableData;

  useEffect(() => {
    console.log('data recieved from Nav using ',codeTable);
  }, [codeTable])

  // const data = JSON.parse(localStorage.getItem("table-data"));
  var tableValues = new Array();
  const [tableKeys, setTableKeys] = useState([]);
  const [tableValuesSet, setTableValuesSet] = useState([]);

  useEffect(() => {
    if (codeTable != undefined) {
      setTableKeys(Object.keys(codeTable[0]));
      codeTable.map((i) => {
        tableValues.push(Object.values(i));
      });
      setTableValuesSet(tableValues);
    }
  }, [codeTable]);

  if (codeTable != undefined) {
    return (
      <div className="codedata-container">
        <div className="code-data-th1">
          {tableKeys && tableKeys.map((i) => {
            return <div className="code-data-th2">{i}</div>;
          })}
        </div>
        <div className="code-data-td1">
          {tableValuesSet && tableValuesSet.map((data) => {
            return (
              <div className="code-data-td2">
                {data.map((i) => {
                  return <div className="code-data-td3">{i}</div>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    <div className="codedata-container-null">No Data Available !!!</div>;
  }
};

export default Data;
