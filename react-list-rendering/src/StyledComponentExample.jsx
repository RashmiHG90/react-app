import styled from 'styled-components';
//it takes as props and return component with styles applied to it
let Container =styled.div`
    background-color: lightblue;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`

let Textcolor = styled.h2`
    color: green;`

function StyledComponentExample() {

    return(
        <div>
            <Container>
                <Textcolor>Styled Component Example with text color green</Textcolor>
                <h2>Styled Component Example</h2>
            </Container>
        </div>
    )
}

export default StyledComponentExample;