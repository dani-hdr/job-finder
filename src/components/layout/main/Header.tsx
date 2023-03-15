import { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Tabs,
  Tab,
  Container,
  Button,
  IconButton,
  useMediaQuery,
  Backdrop,
} from "@mui/material";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "./../../../theme";

interface LinkTabProps {
  label?: string;
  href?: string;
  icon?: React.ReactElement;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      sx={{
        py: 3.5,
        fontWeight: "bold",
      }}
      iconPosition="start"
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header: React.FC = () => {
  const [value, setValue] = useState(0);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setOpen] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "background",
        boxShadow: "none",
        mb: 5,
        py: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            gap: 10,
          }}
        >
          <Typography
            fontWeight="bold"
            href="/"
            color="text.primary"
            component="a"
            variant="h4"
            sx={{
              textDecoration: "none",
            }}
          >
            JobFinder
          </Typography>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => 5 }}
            open={isOpen}
            onClick={() => setOpen(false)}
          > </Backdrop>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: { xs: "100vh", md: "0" },
                position: { xs: "fixed", md: "static" },
                top: 0,
                right: isOpen ? 0 : -200,
                boxShadow: { xs: (theme) => theme.shadows[2], md: "none" },
                zIndex: 10,
              }}
            >
              <Tabs
                value={value}
                orientation={matches ? "vertical" : "horizontal"}
                onChange={handleChange}
                aria-label="nav tabs example"
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  "& .MuiTabs-indicator ": {
                    height: "4px",
                    borderRadius: "100px",
                  },
                }}
              >
                <LinkTab
                  icon={<BusinessCenterOutlinedIcon />}
                  label="Portfolio"
                  href="/portfolio"
                />
                <LinkTab
                  icon={<WorkOutlineOutlinedIcon />}
                  label="Job Offer"
                  href="/job"
                />
                <LinkTab
                  icon={<ChatBubbleOutlineOutlinedIcon />}
                  label="Message"
                  href="/message"
                />
                <LinkTab
                  icon={<PeopleOutlinedIcon />}
                  label="Community"
                  href="/community"
                />
                <LinkTab
                  icon={<NotificationsNoneOutlinedIcon />}
                  label="Notifications"
                  href="/notifications"
                />
              </Tabs>
            </Box>
         

          <Button
            sx={{ py: "5", ml: "auto", display: { xs: "none", md: "block" } }}
            variant="contained"
            size="large"
            color="primary"
          >
            Logout
          </Button>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "blcok", md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
