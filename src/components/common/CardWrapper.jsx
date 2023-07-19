import { Box } from "@mui/material";

export default function CardWrapper({ children }) {
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "1rem",
        borderRadius: "7px",
        boxShadow: "3px 4px 18px #9f9c9c",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
