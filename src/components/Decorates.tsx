import styled from "styled-components";
import {Locations} from "../interfaces/Contents.ts";

const AllUniDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: floralwhite;
    margin: auto;
`;

const SingleUniDiv = styled.div<{status: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    padding: 2%;
    margin: 1%;
    background-color: antiquewhite;
    border: 2px solid cornsilk;
    text-align: center;
    font: calc(2px + 1vw) serif sans-serif small-caps;
    word-wrap: break-word;
`;

export default function UnisContents(props : {data: Locations[]}){
    console.log(typeof props.data);
    return (
        <AllUniDiv>
            {
                props.data.map((char: Locations) =>
                    <SingleUniDiv key={char.id} status={char.name}>
                        <h1>{char.name}</h1>
                        <p>{char.type}</p>
                        <p>{char.dimension}</p>
                    </SingleUniDiv>
                )
            }
        </AllUniDiv>
    );
}