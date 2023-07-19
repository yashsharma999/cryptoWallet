import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CardWrapper from "./common/CardWrapper";
import GraphComponent from "./common/GraphComponent";

export default function ChartComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (ev, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiButtonBase-root": {
            minWidth: "70px",
            fontSize: "12px",
            textTransform: "capitalize",
            padding: "0px",
          },
        }}
      >
        <Tab label="Day" />
        <Tab label="Week" />
        <Tab label="Month" />
        <Tab label="Year" />
      </Tabs>
      <CardWrapper>
        <TabPanel value={value} index={0}>
          <GraphComponent format={0} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GraphComponent format={1} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GraphComponent format={2} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GraphComponent format={3} />
        </TabPanel>
      </CardWrapper>
    </>
  );
}

function TabPanel({ value, index, children }) {
  return <div hidden={value !== index}>{children}</div>;
}
