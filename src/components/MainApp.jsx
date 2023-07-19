import { Box } from "@mui/material";
import BitcoinInfo from "./BitcoinInfo";
import BuySell from "./BuySell";
import ChartComponent from "./ChartComponent";

export default function MainApp() {
  return (
    <Box
      px={4}
      py={2}
      sx={{ height: "calc(100vh - 145px)", overflowY: "scroll" }}
    >
      <BitcoinInfo />
      <ChartComponent />
      <BuySell />
    </Box>
  );
}
