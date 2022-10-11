import { useState, useContext } from "react";
import "./styles/nav.scss";
import { ElementContext } from "../../../utils/elementContext";
import folderIcon from "../../../assets/icons/folder.svg";
import folderIcon2 from "../../../assets/icons/folder-2.svg";
import navIcon2 from "../../../assets/icons/nav-2.svg";

const Nav = () => {
  const { codeNavData } = useContext(ElementContext);
  const [navData, setNavData] = codeNavData;

  const warehouseData = JSON.parse(localStorage.getItem("warehouse-data"));
  const [schema, setSchema] = useState(1000);
  const [tables, setTables] = useState(1000);
  const [views, setViews] = useState(1000);

  const TablesViews = ({ data }) => {
    return (
      <div
        className="codenav-tables-views1"
        onClick={(e) => {
          setNavData(data);
        }}
      >
        "{data}"
      </div>
    );
  };

  const Schema = ({ data, id }) => {
    return (
      <div className="codenav-subschema1">
        <div className="codenav-subschema2" key={id}>
          <div
            className="codenav-subschema3"
            onClick={() => {
              setTables(tables === id ? 1000 : id);
            }}
          >
            <img src={navIcon2} alt="nav" />
            <img src={folderIcon} alt="folder" />
            Tables
          </div>
          {id === tables && data.tables.map((i) => <TablesViews data={i} />)}
        </div>
        <div className="codenav-subschema2" key={id}>
          <div
            className="codenav-subschema3"
            onClick={() => {
              setViews(views === id ? 1000 : id);
            }}
          >
            <img src={navIcon2} alt="nav" />
            <img src={folderIcon} alt="folder" />
            Views
          </div>
          {id === views && data.views.map((i) => <TablesViews data={i} />)}
        </div>
      </div>
    );
  };

  return (
    <div className="codenav-container">
      {warehouseData.map((i, index) => {
        return (
          <div key={index} className="codenav-schema1">
            <div
              className="codenav-schema2"
              onClick={() => {
                setSchema(schema === index ? 1000 : index);
              }}
            >
              <img src={folderIcon2} alt="folder" /> {i.schema}
            </div>
            {index === schema && <Schema data={i} id={index} />}
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
