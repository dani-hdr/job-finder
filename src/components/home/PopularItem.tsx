import React from "react";
import { Checkbox, Divider, Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import googleIcon from "../../assets/images/icons8-google.svg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CircleIcon from "@mui/icons-material/Circle";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const PopularItem = () => {
  return (
    <Paper
      sx={{
      
        cursor: "pointer",
        "&:hover": { boxShadow: (theme) => theme.shadows[2] },
      }}
      elevation={0}
    >
     <Box p={3}>
     <Stack justifyContent="start" spacing={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img width={50} src={googleIcon} alt="google" />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
            >
              Google.com
            </Typography>
          </Box>
          <IconButton>
            <Checkbox
            
              icon={<BookmarkBorderIcon fontSize="large" />}
              checkedIcon={<BookmarkIcon  fontSize="large" />}
            />
          </IconButton>{" "}
        </Box>
        <Stack>
          <Typography variant="h6" component="h2" fontWeight="bold">
            Product UI Design
          </Typography>
          <Stack gap={1} direction="row">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: "bold",
              }}
              component="span"
            >
              <StarRoundedIcon sx={{ color: "#ffd30e" }} />
              4.5 &#x2022;
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
            >
              Bounding
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ pt: 2 }} />
        <Stack alignItems="center" gap={1} direction="row">
          <CircleIcon color="success" sx={{ fontSize: "10px" }} />
          <Typography
            variant="subtitle1"
            fontWeight="Medium"
            color="text.secondary"
          >
            4 days ago - 12Applied
          </Typography>
        </Stack>
      </Stack>
     </Box>
    </Paper>
  );
};

export default PopularItem;
