import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ModalExample from "./ModalExample";

function IntegrateModal({title, body, footer}){
    const [show, setShow] = useState(false);
    
    return (<>
        <div>Modal Form</div>
        <Button variant="primary" onClick={() => setShow(true)}>Show</Button>
        <ModalExample title={title} body={body} footer={footer} handleClose={() => setShow(false)} show={show}/>
        </>)
}

export default IntegrateModal;