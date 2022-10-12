import { useState, useContext, useEffect } from "react";
import "./styles/nav.scss";
import { ElementContext } from "../../../utils/elementContext";
import folderIcon from "../../../assets/icons/folder.svg";
import folderIcon2 from "../../../assets/icons/folder-2.svg";
import navIcon2 from "../../../assets/icons/nav-2.svg";

const Nav = () => {
  const { codeNavData } = useContext(ElementContext);
  const [navData, setNavData] = codeNavData;

  var warehouseData = JSON.parse(localStorage.getItem("warehouse-data"));
  const [toggle, setToggle] = useState(true);
  const [schema, setSchema] = useState();
  const [tables, setTables] = useState(1000);
  const [views, setViews] = useState(1000);

  useEffect(() => {
    warehouseData.map((i,index) => i.id = index);
    warehouseData.map((i) => i.show = false);
    warehouseData.map((i) => i.tableShow = false);
    warehouseData.map((i) => i.viewShow = false);
    setSchema(warehouseData)
  }, [])


  const TablesViews = ({ data }) => {
    return (
      <div className="codenav-tables-views1" onClick={() => {setNavData(data)}}> "{data}" </div>
    );
  };

  const Schema = ({ data, id }) => {
    console.log(data);
    return (
      <div className="codenav-subschema1">
        <div className="codenav-subschema2" key={id}>
          <div
            className="codenav-subschema3"
            onClick={() => {
              let newSchema = schema.filter((i) => {
                if(i.id === id) {
                  i.tableShow ? i.tableShow = false : i.tableShow = true
                }
                return i
              })
              setSchema(newSchema)
            }}
            >
            <img src={navIcon2} alt="nav" />
            <img src={folderIcon} alt="folder" />
            Tables
          </div>
          {schema[id].tableShow && schema[id].tables.map((i) => <TablesViews data={i} />)}
        </div>
        <div className="codenav-subschema2" key={id}>
          <div
            className="codenav-subschema3"
            onClick={() => {
              let newSchema = schema.filter((i) => {
                if(i.id === id) {
                  i.viewShow ? i.viewShow = false : i.viewShow = true
                }
                return i
              })
              setSchema(newSchema)
            }}
          >
            <img src={navIcon2} alt="nav" />
            <img src={folderIcon} alt="folder" />
            Views
          </div>
          {schema[id].viewShow && schema[id].views.map((i) => <TablesViews data={i} />)}
        </div>
      </div>
    );
  };

  return (
    <div className="codenav-container">
      {schema && schema.map((i, index) => {
        return (
          <div key={index} className="codenav-schema1">
            <div className="codenav-schema2" onClick={() => {
              let newSchema = schema.filter((i) => {
                if(i.id === index) {
                  i.show ? i.show = false : i.show = true
                }
                return i
              })
              setSchema(newSchema)
            }}>
              <img src={folderIcon2} alt="folder" /> {i.schema}
            </div>
            {i.show && <Schema id={index} />}
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
