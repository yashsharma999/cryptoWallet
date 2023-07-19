import { Button, Grid, Stack } from "@mui/material";
import CardWrapper from "./common/CardWrapper";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function BuySell() {
  return (
    <Grid container mt={2} spacing={2}>
      <Grid item xs={6}>
        <Button sx={{ width: "100%", textTransform: "capitalize" }}>
          <CardWrapper>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <MonetizationOnIcon fontSize="large" />
              Buy BTC
            </Stack>
          </CardWrapper>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button sx={{ width: "100%", textTransform: "capitalize" }}>
          <CardWrapper>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <MonetizationOnIcon fontSize="large" />
              Sell BTC
            </Stack>
          </CardWrapper>
        </Button>
      </Grid>
    </Grid>
  );
}
