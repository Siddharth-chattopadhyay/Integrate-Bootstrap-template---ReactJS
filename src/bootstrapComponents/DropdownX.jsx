import Dropdown from 'react-bootstrap/Dropdown';

function DropdownX({onSelect, data}) {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((v, i) => <Dropdown.Item key={i} eventKey={v.key} active={v.active ?? false}>{v.text}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownX;