import React from "react";
import SideMenu from "../main/SideMenu";
import styled from "styled-components";
import Unity, { UnityContent } from "react-unity-webgl";

const Container = styled.div`
  width: 1010px;
  height: 100%;
  margin-left: 41px;
  display: flex;
  flex-direction: column;
  position: relative;
`



const Scene: React.FC = () => {

    const unityContext = new UnityContent(
        "/build/bild.json",
        "build/UnityLoader.js"
    )

    return (
        <>
            <SideMenu/>
            <Container>
                <Unity unityContent={unityContext} />
            </Container>
        </>
    )
};

export default Scene;