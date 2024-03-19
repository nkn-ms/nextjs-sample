import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function SimpleTabs() {
  const data = [
    {
      label: "Card",
      value: "card",
    },
    {
      label: "Table",
      value: "table",
    },
  ];

  return (
    <Tabs value="card">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}