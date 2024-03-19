import {
  Tabs as MT_Tabs,
  TabsHeader as MT_TabsHeader,
  TabsBody as MT_TabsBody,
  Tab as MT_Tab,
  TabPanel as MT_TabPanel,
} from "@material-tailwind/react";

export function Tabs() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <MT_Tabs value="html">
      <MT_TabsHeader >
        {data.map(({ label, value }) => (
          <MT_Tab key={value} value={value} >
            {label}
          </MT_Tab>
        ))}
      </MT_TabsHeader>
      <MT_TabsBody >
        {data.map(({ value, desc }) => (
          <MT_TabPanel key={value} value={value}>
            {desc}
          </MT_TabPanel>
        ))}
      </MT_TabsBody>
    </MT_Tabs>
  );
}