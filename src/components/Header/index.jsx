import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;

`

function Header() {
    return ( 
        <nav>
            <StyledLink to ="/">Accueil</StyledLink>
            <StyledLink to ="/survey">Questionnaires</StyledLink>
            <StyledLink to ="/profils">Profils</StyledLink>
        </nav>
     );
}

export default Header;