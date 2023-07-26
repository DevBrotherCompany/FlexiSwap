import { Item, Menu } from "react-contexify";

type FlexiContextMenuProps = {
  id: string;
  menuItems: {
    label: string;
    onClick: () => void;
  }[];
};

const FlexiContextMenu: React.FC<FlexiContextMenuProps> = ({
  id,
  menuItems,
}) => {
  return (
    <>
      <Menu id={id}>
        {menuItems.map(({ label, onClick }) => (
          <Item onClick={onClick}>{label}</Item>
        ))}
      </Menu>
    </>
  );
};

export default FlexiContextMenu;
