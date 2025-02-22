import UnisContents from "./components/UnisContents.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Universities} from "./interfaces/Universities.ts"

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px indigo solid;
`;

export default function App(){
    const [data, setData] = useState<Universities[]>([]);

    useEffect(() => {
        async function fetchData(){
            const rawData = await fetch("http://universities.hipolabs.com/search?country=China");
            const data = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <UnisContents data={data}/>
        </ParentDiv>
    )
}