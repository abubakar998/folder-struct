import { MenuItem } from "@/type";
import MenuItemComponent from "./MenuItemComponent";

const NestedMenu: React.FC<{ data: MenuItem[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <MenuItemComponent key={index} item={item} />
      ))}
    </ul>
  );
};
export default NestedMenu;