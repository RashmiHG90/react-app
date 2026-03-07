import {render,screen} from '@testing-library/react';
import{describe,test,expect} from 'vitest';
import userEvent from '@testing-library/user-event';
import UsersComponent from './UsersComponent';


//it is container which holds more than one test case
describe("User Real Rest API testing",()=>{

    test("Fake user data testing", async()=>{
        render(<UsersComponent/>)
        
        let userData = await screen.findAllByRole("userInfo")
        
        expect(userData.length).toBe(30);
        expect(userData[0]).toHaveTextContent("Emily")
    })

})