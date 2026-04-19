import React from "react";
import { Dialog, DialogContent, IconButton, Slide } from "@mui/material";
import "../../styles/Page.css";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ReactMarkdown from "react-markdown";
import "./ServiceGrid.css";

const ICONS = {
  1: PhoneInTalkOutlinedIcon,
  2: GroupsOutlinedIcon,
  3: PersonSearchOutlinedIcon,
  4: FilterAltOutlinedIcon,
  5: BalanceOutlinedIcon,
  6: AssessmentOutlinedIcon,
};

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const ServiceModal = ({ service, open, onClose }) => {
  const Icon = service ? (ICONS[service.id] || AssessmentOutlinedIcon) : null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      transitionDuration={280}
      maxWidth={false}
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(15, 0, 52, 0.45)",
          },
        },
        paper: {
          sx: {
            borderRadius: "1.25rem",
            padding: "0.5rem",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            width: "100%",
            maxWidth: "45rem",
          },
        },
      }}
    >
      {service && (
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="service-modal-header">
            <div className="service-modal-title-row">
              <div className="service-icon-wrap">
                <Icon className="service-icon" />
              </div>
              <h2 className="service-modal-title">{service.title}</h2>
            </div>
            <IconButton
              onClick={onClose}
              size="small"
              className="service-modal-close"
              aria-label="Zamknij"
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="service-modal-body">
            <ReactMarkdown>{service.full}</ReactMarkdown>
          </div>

          <div className="service-modal-footer">
            <button className="expand-btn" onClick={onClose}>
              Zamknij
            </button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ServiceModal;
