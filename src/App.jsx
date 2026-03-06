import DropdownX from './bootstrapComponents/DropdownX';
import { Button } from 'react-bootstrap';
import IntegrateModal from './bootstrapComponents/IntegrateModal';
import './App.css'

function App() {


  return (
    <>
      <DropdownX data={[{key: "a", text: "A", active: true}, {key: "b", text: "B"}]} onSelect={console.log} />
      
      <IntegrateModal footer={<>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </>} title="Siddharth Chattopadhyay" body="Integrated Modal Form Inside. This title and body was passed inside props."/>
    </>
  )
}

export default App
