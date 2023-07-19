import {
  Box,
  Chip,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CardWrapper from "./common/CardWrapper";
import { FaBitcoin } from "react-icons/fa";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import BuySell from "./BuySell";

export default function BitcoinInfo() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <CardWrapper>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          mb={2}
        >
          <Stack direction={"row"} alignItems="center" gap={2}>
            <FaBitcoin fontSize={"32px"} />
            <Typography variant="caption">Bitcoin</Typography>
          </Stack>
          <Typography sx={{ fontSize: "13px" }} color={"gray"}>
            BTC
          </Typography>
        </Stack>
        <Typography variant="h4" mb={1}>
          3.529020 BTC
        </Typography>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography color={"gray"} variant="h5">
            $19.513 USD
          </Typography>
          <Chip
            sx={{
              background: "#e74083",
              color: "#fff",
            }}
            label={"-2.13%"}
          ></Chip>
        </Stack>
        <Stack justifyContent={"center"} alignItems="center">
          <IconButton onClick={() => setChecked((p) => !p)}>
            {checked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Stack>
        <Collapse in={checked}>
          <BuySell />
        </Collapse>
      </CardWrapper>
    </>
  );
}
