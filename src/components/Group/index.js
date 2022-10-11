import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import folderIcon from '../../assets/icons/folder.svg'

const Group = () => {
  const nav = useNavigate();
  const [selectedHouse, setSelectedHouse] = useState("");

  const getWarehouseData = (id) => {
    fetch("https://transform.dabler.app/api/test/getwarehouseitems", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        warehouseid: id,
      }),
    })
    .then((res) => res)
    .then(async (getData) => {
      const data = await getData.json()
      if (getData.status === 200) {
        localStorage.setItem('warehouse-data', JSON.stringify(data))
        nav(`${selectedHouse}`);
      }
    });
  };

  return (
    <div className="group-container">
      <div
        className="group-links"
        onClick={() => {
          getWarehouseData(0);
          setSelectedHouse('warehouse-1');
        }}
      >
        <img src={folderIcon} alt="folder" />
        Warehouse 1
      </div>
      <div
        className="group-links"
        onClick={() => {
          getWarehouseData(1);
          setSelectedHouse('warehouse-2');
        }}
      >
        <img src={folderIcon} alt="folder" />
        Warehouse 2
      </div>
      <div
        className="group-links"
        onClick={() => {
          getWarehouseData(2);
          setSelectedHouse('warehouse-3');
        }}
      >
        <img src={folderIcon} alt="folder" />
        Warehouse 3
      </div>
    </div>
  );
};

export default Group;
