import Link from 'next/link';
import styled from 'styled-components';

const BackgroundDiv = styled.div `
    background-color: yellow
`

const Header = () => (
    <BackgroundDiv>
        <h1> Header </h1>
    </BackgroundDiv>
)

export default Header;

