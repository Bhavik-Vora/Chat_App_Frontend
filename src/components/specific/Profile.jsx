import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalenderIcon } from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  const avatarUrl = typeof user?.avatar?.url === "string" ? transformImage(user.avatar.url) : "";
  return (

    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
      <Avatar 
        src={avatarUrl}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={user?.bio} />
      <ProfileCard
        heading={"Username"}
        text={user?.username}
        Icon={<UsernameIcon />}
      />
      <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalenderIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, heading, Icon }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing="1rem"
    color="white"
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1" color={"white"}>{text}</Typography>
      <Typography color={"white"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
