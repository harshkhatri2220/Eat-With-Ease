import { render, screen } from "@testing-library/react"
import ResCard from "../ResCard"
import  MOCK_DATA from  "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"

it("Should load ResCard component with it's name ",()=>{
   render(<ResCard resData={MOCK_DATA}/>)
   
   const name = screen.getByText("Domino's Pizza");

   expect(name).toBeInTheDocument();
})