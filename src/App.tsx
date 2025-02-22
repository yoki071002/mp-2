import UnisContents from "./components/Decorates.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Locations} from "./interfaces/Contents.ts"

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px indigo solid;
`;

export default function App(){
    const [data, setData] = useState<Locations[]>([]);

    useEffect(() => {
        async function fetchData(){
            const rawData = await fetch("https://rickandmortyapi.com/api/location/");
            const {results} : {results: Locations[]} = await rawData.json();
            setData(results);
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