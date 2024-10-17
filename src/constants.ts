import { MenuItem } from "./type";

export const menuData: MenuItem[] = [
  {
    id: '824d5523-cefc-4842-94f5-1beb75472d11',
    label: "Item 1",
    children: [
      {
        id: '824d5523-cefc-4842-94f5-1beb75472d12',
        label: "Sub Item 1.1",
        children: [
          {
            id: '824d5523-cefc-4842-94f5-1beb75472d13',
            label: "Sub Sub Item 1.1.1"
          },
          { id: '824d5523-cefc-4842-94f5-1beb75472d14', label: "Sub Sub Item 1.1.2" }
        ]
      },
      { id: '824d5523-cefc-4842-94f5-1beb75472d15', label: "Sub Item 1.2" }
    ]
  },
  {
    id: '824d5523-cefc-4842-94f5-1beb75472d16',
    label: "Item 2",
    children: [
      { id: '824d5523-cefc-4842-94f5-1beb75472d17', label: "Sub Item 2.1" },
      { id: '824d5523-cefc-4842-94f5-1beb75472d18', label: "Sub Item 2.2" }
    ]
  }
];
