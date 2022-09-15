import React from "react";
import {
  Box,
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Box className="about-section">
      <Stack direction="row" className="head">
        <Typography>About Gebbhaly.com</Typography>
      </Stack>
      <Divider />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        className="about-body"
      >
        <Stack flexBasis="50%">
          <Typography color="#557799" fontWeight="bold" fontSize="1.2rem">
            Looking for the best products?
          </Typography>
          <Typography variant="body1" sx={{ margin: "1rem 0" }}>
            Pellentesque at ipsum tempor nisi laoreet finibus. Donec consectetur
            quam tortor, ut tempor eros rhoncus finibus. Aenean cursus a elit
            vel volutpat. Cras auctor et massa eget congue vest nec.
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <SquareIcon sx={{ fontSize: "0.8rem" }} />
              </ListItemIcon>
              <ListItemText primary="Lorem ipsum dolor sit amet" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <SquareIcon sx={{ fontSize: "0.8rem" }} />
              </ListItemIcon>
              <ListItemText primary="Consectetur an adipisicing elit" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <SquareIcon sx={{ fontSize: "0.8rem" }} />
              </ListItemIcon>
              <ListItemText primary="It aquecorporis nulla aspernatur" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <SquareIcon sx={{ fontSize: "0.8rem" }} />
              </ListItemIcon>
              <ListItemText primary="Corporis, omnis doloremque" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <SquareIcon sx={{ fontSize: "0.8rem" }} />
              </ListItemIcon>
              <ListItemText primary="Non cum id reprehenderit" />
            </ListItem>
          </List>
          <Button className="read-more-btn">Read More</Button>
        </Stack>
        <Box
          display="flex"
          flexBasis="50%"
          sx={{ paddingTop: { xs: 2, md: 0 } }}
        >
          <Image
            loader={() => "/assets/feature-image.jpg"}
            src="/assets/feature-image.jpg"
            width={570}
            height={350}
            alt=""
            unoptimized={true}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutSection;
