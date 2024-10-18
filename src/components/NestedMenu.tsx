import { MenuItem } from "@/type";
import MenuItemComponent from "./MenuItemComponent";

const NestedMenu: React.FC<{ data: MenuItem[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <MenuItemComponent key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default NestedMenu;