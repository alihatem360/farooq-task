import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function BasicButtonExample({ title, items }) {
  return (
    <DropdownButton
      id="dropdown-basic-Secondary"
      variant="secondary"
      size="md"
      title={title}
      className="nav-link "
    >
      {items.map((item) => (
        <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default BasicButtonExample;
