import React from "react";
import { Paper } from "@mui/material";
import "../../styles/Page.css";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import "./ServiceGrid.css";

const ICONS = {
  1: PhoneInTalkOutlinedIcon,
  2: GroupsOutlinedIcon,
  3: PersonSearchOutlinedIcon,
  4: FilterAltOutlinedIcon,
  5: BalanceOutlinedIcon,
  6: AssessmentOutlinedIcon,
  7: PersonAddOutlinedIcon,
};

const ServiceCard = ({ service, onOpen }) => {
  const Icon = ICONS[service.id] || AssessmentOutlinedIcon;
  const preview = service.full.split("\n\n")[0].replace(/\*\*/g, "");

  return (
    <Paper elevation={0} className="service-paper">
      <div className="service-card">
        <div className="service-header">
          <div className="service-icon-wrap">
            <Icon className="service-icon" />
          </div>
          <span className="service-title">{service.title}</span>
        </div>

        <p className="service-preview">{preview}</p>

        <div className="service-actions">
          <button className="expand-btn" onClick={() => onOpen(service.id)}>
            Rozwiń
          </button>
        </div>
      </div>
    </Paper>
  );
};

export default ServiceCard;
