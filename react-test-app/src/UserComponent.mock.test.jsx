import {render,screen} from '@testing-library/react';
import{describe,test,expect} from 'vitest';
import {vi} from "vitest";
import UsersComponent from './UsersComponent';
import axios from "axios"

vi.mock("axios"); //enable mock for axios module


//it is container which holds more than one test case
describe("User Mock Rest API testing",()=>{



    test.skip("Mock user data testing", async()=>{

            //mock data for axios.get method
            //provider
        axios.get.mockResolvedValue({
        data:[
            {"id":100, "firstName":"John"},
            {"id":101, "firstName":"Steven"},
            {"id":102, "firstName":"Raj"}
            ]
        })

        render(<UsersComponent/>)
        
        let userData = await screen.findAllByRole("userInfo")
        
        expect(userData.length).toBe(3);
        expect(userData[0]).toHaveTextContent("Emily")
    })

})