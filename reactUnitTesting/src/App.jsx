import './App.css'
import { InvoiceDetails } from './components/InvoiceDetails'

function App() {


  return (
    <>
      <InvoiceDetails
        invoiceNumber={100}
        customerName={"Dev Inc"}
        amount={250}
        dueDate={"09 October 2027"}
        taxRate={0.19}
        status={"overdue"} />

    </>
  )
}

export default App
