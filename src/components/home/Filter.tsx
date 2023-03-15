import React from "react";
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  Paper,
  Rating,
  Slider,
  Stack,
  Typography,
} from "@mui/material";

const availabilityItems = ["Urgent", "Remote", "Full-Time"];
const experienceItems = [
  "Graphic Designer",
  "UI Designer",
  "UX Designer",
  "Developer",
  "Data Analyst",
  "User Testing",
];
function valuetext(value: number) {
  return `${value}°C`;
}
const Filter = () => {
  const [ratingValue, setRatingValue] = React.useState<number | null>(2);
  const [value, setValue] = React.useState<number[]>([300, 5000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Paper
      
      elevation={0}
      sx={{ display: { xs: "none", md: "block" } }}
    >
     <Box p={3}>
     <Box mb={3}>
        <Typography variant="h5" component="span" fontWeight="bold">
          Filter
        </Typography>
      </Box>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Salary
          </Typography>
          <Slider
            sx={{
              "& .MuiSlider-valueLabel ": {
                background: (theme) => theme.palette.primary.main,
                opacity: "100%",
                borderRadius: "10px",
                width: "40px",
                height: "40px",
              },
            }}
            min={300}
            max={5000}
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold" color="text.secondary">
              $300
            </Typography>
            <Typography fontWeight="bold" color="text.secondary">
              $5k
            </Typography>
          </Stack>
        </Box>
        <Stack>
          <Typography variant="h6" fontWeight="bold">
            Availability
          </Typography>
          {availabilityItems.map((item) => (
            <FormControlLabel
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                  color: "text.secondary",
                },
              }}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label={item}
            />
          ))}
        </Stack>
        <Box>
          <Typography variant="h6" mb={2} fontWeight="bold">
            Rating
          </Typography>
          <Stack direction="row" justifyContent="space-between" gap={1}>
            <Chip
              sx={{
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: 16,
                color: "text.secondary",
              }}
              label={ratingValue}
              variant="outlined"
            />
            <Rating
              size="large"
              name="simple-controlled"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
          </Stack>
        </Box>
        <Stack>
          <Typography variant="h6" fontWeight="bold">
            Experience
          </Typography>
          {experienceItems.map((item) => (
            <FormControlLabel
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                  color: "text.secondary",
                },
              }}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label={item}
            />
          ))}
        </Stack>
      </Stack>
     </Box>
    </Paper>
  );
};

export default Filter;
