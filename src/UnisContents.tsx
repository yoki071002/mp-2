import styled from "styled-components";
import {Universities} from "./Universities.ts";

const AllUniDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: floralwhite;
    margin: auto;
`;

const SingleUniDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 20%;
    padding: 2%;
    margin: 1%;
    background-color: antiquewhite;
    border: 2px solid cornsilk;
    text-align: center;
    font: calc(2px + 1vw) serif sans-serif small-caps;
    word-wrap: break-word;
`;

export default function UnisContents(props : {data: Universities[]}){
    return (
        <AllUniDiv>
            {
                props.data.map((unis: Universities) =>
                    <SingleUniDiv key={unis.name}>
                        <h3>{unis.name}</h3>
                        <p>{unis.country}</p>
                        <p>{unis.web_pages}</p>
                    </SingleUniDiv>
                )
            }
        </AllUniDiv>
    );
}
