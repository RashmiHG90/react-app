import {render,screen} from '@testing-library/react';
import{describe,test,expect} from 'vitest';
import Login from './Login';
import userEvent from '@testing-library/user-event';


//it is container which holds more than one test case
describe("Login component testing",()=>{

    test("Login component validation test", async()=>{
        render(<Login/>)
        await userEvent.click(
            screen.getByRole("button",{name: "Login"})
        )
        expect(screen.getByText("Please fill all the details")).toBeInTheDocument();        
    })

     test("Invalid email or password test", async()=>{
        render(<Login/>)
        await userEvent.type(screen.getByLabelText("Email"),"user@gmail.com");
        await userEvent.type(screen.getByLabelText( "Password"),"user123");

        await userEvent.click(
            screen.getByRole("button",{name: "Login"})
        )
        expect(screen.getByText("Invalid email or password")).toBeInTheDocument();        
    })

     test("Success test", async()=>{
        render(<Login/>)
        await userEvent.type(screen.getByLabelText("Email"),"admin@gmail.com");
        await userEvent.type(screen.getByLabelText( "Password"),"admin123");

        await userEvent.click(
            screen.getByRole("button",{name: "Login"})
        )
        expect(screen.getByText("Login successful")).toBeInTheDocument();  
        //expect(screen.getByRole("")).toHaveTextContent("Login successful");      
    })

})