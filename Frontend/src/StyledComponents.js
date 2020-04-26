import styled from "styled-components";

export const Bar = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    background-color: ${props => props.background};
    border: 0px solid transparent;
    border-radius: ${props => props.border}px;
    box-shadow: #${props => props.darkShadow} 2px 2px 5px 0px inset, #${props => props.lightShadow} -2px -2px 5px 0px inset;
    
    `;

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

export const DefaultButton = styled.button`
    width: 100%;
    background-color:${props => props.background};
    border: 1px solid ${props => props.background};
    transition: background-color .5s, color .5s;       
    color:${props => props.color};
    font-weight: bold;
    padding: .375rem .75rem;
    border-radius: ${props => props.radius}px;
    box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
          -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};           
    :hover {
        background-color: ${props => props.color};
        color: ${props => props.background};
    }   
    :active {
        box-shadow: inset ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
                    inset -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};
        background-color: ${props => props.background};
        color: ${props => props.color};
    }     
    `;