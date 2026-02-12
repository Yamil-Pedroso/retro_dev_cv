import styled from "styled-components";

export const ContainerLayout = styled.div`
    width: 200px;
    position: relative;
    //border: 1px solid blue;

    @media (max-width: 768px) {
        width: 100%;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
`;
