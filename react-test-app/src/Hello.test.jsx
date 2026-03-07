import {render,screen} from '@testing-library/react';
import Hello from './HelloComponent';
import{describe,test,expect} from 'vitest';

//it is container which holds more than one test case
describe("Hello component testing",()=>{

    test("Hello component should render correctly", ()=>{
        render(<Hello/>);
        expect(screen.getByText("This is a simple React component.created to test with JEST"))
        .toBeInTheDocument();
    })

})