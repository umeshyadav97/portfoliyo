import { Box } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { aboutTheme } from "./aboutTheme";

const iconMap = {
  briefcase: BusinessCenterOutlinedIcon,
  globe: LanguageOutlinedIcon,
  person: PersonOutlineOutlinedIcon,
  speed: SpeedOutlinedIcon,
  spark: AutoAwesomeOutlinedIcon,
  target: TrackChangesOutlinedIcon,
  tools: AutoAwesomeOutlinedIcon,
  trend: TrendingUpOutlinedIcon,
  users: GroupsOutlinedIcon,
};

function AboutIcon({ name, color = aboutTheme.purple, size = 42 }) {
  const Icon = iconMap[name] || AutoAwesomeOutlinedIcon;

  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: "grid",
        placeItems: "center",
        borderRadius: 2,
        bgcolor: `${color}12`,
        color,
        flex: "0 0 auto",
      }}
    >
      <Icon fontSize={size > 44 ? "medium" : "small"} />
    </Box>
  );
}

export default AboutIcon;
