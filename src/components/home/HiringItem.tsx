import React from "react";
import { Checkbox, Paper } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { Rating } from "@mui/material";
import { Box } from "@mui/material";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import googleIcon from "../../assets/images/icons8-google.svg";

const HiringItem = () => {
  return (
   <Box width='100%'>
     <Paper
      elevation={0}
      sx={{
        
        background: (theme) => theme.palette.background.default,
        border: "1px solid",
        borderColor: "secondary.main",
        "&:hover": { boxShadow: (theme) => theme.shadows[1] },
      }}
    >
      <Box p={3}>
        <Stack flexWrap='nowrap' spacing={2} direction="row" alignItems="start">
          <img width={50} src={googleIcon} alt="" />
          <Stack>
            <Typography variant="h5" component="h2" fontWeight="bold">
              PT.Beruang Motors{" "}
              <Chip
                color="success"
                sx={{ color: "#fff", borderRadius: "12px", ml: 2 }}
                label="Urgent"
              />
            </Typography>
            <Stack flexWrap="wrap" gap={1.5} direction="row" my={1}>
              <Typography fontWeight="bold" color="text.secondary">
                1 days ago
              </Typography>
              <Typography fontWeight="bold" color="text.secondary">
                FullTime
              </Typography>
              <Typography fontWeight="bold" color="text.secondary">
                3-12 month
              </Typography>
              <Typography fontWeight="bold" color="text.secondary">
                45Applied
              </Typography>
              <Typography fontWeight="bold" color="text.primary">
                $1000-$4000
              </Typography>
            </Stack>

            <Typography
              sx={{
                textOverflow: "ellipsis",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
              mt={1}
              fontWeight="regular"
              variant="h6"
              color="text.secondary"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              veritatis temporibus assumenda delectus perferendis
              consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quidem veritatis temporibus assumenda delectus perferendis
              consequatur.
            </Typography>
            <Stack mt={2} direction="row" alignItems="center" spacing={2}>
              <Rating
                sx={{ marginLeft: "-4px" }}
                size="large"
                name="read-only"
                value={3}
                readOnly
              />
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                fontWeight="bold"
                color="text.primary"
                variant="h6"
              >
                <FmdGoodIcon />
                Paris,France
              </Typography>
            </Stack>
            <Stack mt={2} direction="row" spacing={1}>
              <Chip
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "12px",
                }}
                label="Urgent"
              />
              <Chip
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "12px",
                }}
                label="Urgent"
              />
            </Stack>
          </Stack>
          <Checkbox
            icon={<BookmarkBorderIcon fontSize="large" />}
            checkedIcon={<BookmarkIcon fontSize="large" />}
          />
        </Stack>
      </Box>
    </Paper>
   </Box>
  );
};

export default HiringItem;
