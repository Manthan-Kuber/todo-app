import { useState } from "react";
import { TabsContainer, UnderlinedDiv } from "./Tabs.styles";
import { motion } from "framer-motion";

const tabsList: Array<string> = ["All", "Active", "Completed"];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabsList[0]);
  return (
    <TabsContainer>
      {tabsList.map((tab, index) => (
        <li key={index} onClick={() => setSelectedTab(tab)}>
          {tab}
          {tab === selectedTab && (
            <UnderlinedDiv as={motion.div} layoutId="underline" />
          )}
        </li>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
