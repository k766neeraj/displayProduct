import { styled } from 'styled-components'

export const Filter = styled.div`
font-size: 1.4rem;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
:hover{
    cursor: pointer;
}
.filter-buttons {
    margin: 10px;
}
`
export const Box = styled.div`
    position: absolute;
    top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background-color: #506155;
    height: 9rem;
    width: 24rem;
/* left: 29rem; */
.filtersubm{
    color:white;
    margin: 2px;
    border: 1px solid white;
    padding: 2px;
    border-radius: 5px;
    text-align: center;
}
.filtersubm:hover{
    cursor: pointer;
}
.filterclick{
    display: flex;
    flex-direction: column;
    background-color: #506155;
}
.btn{
    background-color: #506155;
    color: white;
    border-radius: 3px;
    margin: 2px;
}
`