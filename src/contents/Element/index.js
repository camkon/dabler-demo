import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from 'styled-components'
import Nav from "./Nav";

import { ElementContext } from "../../utils/elementContext";

const Element = () => {
  const [codeNavDatas, setCodeNavData] = useState(); //code:CODE option from NAV, Nav:nav from CODE, Datas: data
  const [codeCodeDatas, setCodeCodeData] = useState();
  const [codeTableDatas, setCodeTableData] = useState();

  return (
    <ElementContext.Provider
      value={{
        codeNavData: [codeNavDatas, setCodeNavData],
        codeCodeData: [codeCodeDatas, setCodeCodeData],
        codeTableData: [codeTableDatas, setCodeTableData],
      }}
    >
    <Container>
      <Nav />
      <Outlet />
    </Container>
    </ElementContext.Provider>
  );
};

export default Element;

const Container = styled.div`
  // background-color: #202020;
`