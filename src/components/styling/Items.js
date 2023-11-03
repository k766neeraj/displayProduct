import { styled } from 'styled-components'

export const Items = styled.div`
margin: 10px;
.card{
    padding: 5px;
    background-color: #f0dcbe;
    border-radius: 5px;
}
.card-body{
    width: 28rem;
}
.Item{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-text{
    text-align: center;
    font-size: 1.0rem;
    margin-top: -1rem;
}
.card-link{
    display: flex;
    justify-content: space-between;
    width: 25rem;
}
.price,.rating,.cart{
    display: flex;
    align-items: center;
}
.addcart{
    color: white;
    font-size: 1rem;
    border: 1px solid #506155;
    border-radius: 5px;
    background-color: #506155;
    width: 4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
}
`
export const Foot = styled.div`
display: flex;
align-items: center;
/* background-color: black; */
height:8rem;
flex-direction: column;
color: #506155;
.copyright,.socialhandel{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.twitter,.instagram,.facebook{
    font-size: 2.5rem;
}
.socialhandel{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40rem;
}

` 