"use client";

import QRCode from "qrcode.react";
import { Box, Typography } from "@mui/material";
import mascotsLeft from "@/assets/mascotsLeft.png";
import mascotsRight from "@/assets/mascotsRight.png";

const QRPage = () => {
  const className = "";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AED9FC",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 50,
        }}
      >
        <Typography variant="h4" p={5}>
          https://kq.fernando.is/test/
        </Typography>

        <QRCode size="256" value={`https://kq.fernando.is/test/`} />

        <Typography variant="h3" p={5}>
          <strong>Miami History</strong>
        </Typography>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 40,
          left: 35,
          right: 35,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 0,
        }}
      >
        <img
          src={mascotsLeft.src}
          alt="Mascot"
          style={{
            height: "25vw",
            objectFit: "contain",
          }}
        />
        <img
          src={mascotsRight.src}
          alt="Mascot"
          style={{
            height: "15vw",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default QRPage;
