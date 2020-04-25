import styled from "styled-components";

export const Bar = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    background-color: ${props => props.background};
    border: 1px solid transparent;
    border-radius: ${props => props.border}px;`;

export const Badge = styled.span`
     padding: 5px 4px;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;
export const Badge_chosen = styled.span`
     padding: 5px 6px;
     font-weight: bold;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;