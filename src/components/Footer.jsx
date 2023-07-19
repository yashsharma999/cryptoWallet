import { IconButton, Stack } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Footer() {
  return (
    <div
      style={{
        background: "#fff",
        position: "absolute",
        bottom: "0px",
        width: "100%",
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} gap={"1rem"} justifyContent="space-between">
        <IconButton>
          <AccountBalanceWalletIcon />
        </IconButton>
        <IconButton>
          <ExploreIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
