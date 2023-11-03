import { styled } from 'styled-components'

export const Navbox = styled.div`
display: flex;
height: 3rem;
/* background-color:#587358; */
font-family: 'Modern Antiqua', serif;
font-family: 'Raleway', sans-serif;
justify-content: space-around;
align-items: center;
margin-top: 2px;
margin-bottom: 10px;
 ul.navbar {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display : flex;
            align-items: center;
        }

        ul.navbar li a {
            margin: 15px;
            color: #506155;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 700;
            border-radius: 5px;
            margin: 2px;
            box-shadow: 1px 2px;
        }

        ul.navbar li a:hover {
            background-color: #506155;
            color :white ;
        }

        .search-button {
            padding: 4px;
            border: none;
            height: 2rem;
            border-radius: 5px;
            background-color: white;
        }
        .search-button:hover{
            cursor: pointer;
        }
        #search-bar{
            font-size: 1rem;
            border-radius: 0px;
            height: 2rem;
            border: none;
            background-color: #e6eee8;
            border-radius: 5px;
        }
        .search-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 25rem;
        }
        .hover:hover{
            cursor: pointer;
        }
        `

export default Navbox;