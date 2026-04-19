import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import servicesData from "../../data/services";
import "./ServiceGrid.css";

const ServiceGrid = () => {
  const [openId, setOpenId] = useState(null);

  const openService = servicesData.find((s) => s.id === openId) || null;

  return (
    <>
      <div className="service-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-wrapper" data-animate>
            <ServiceCard service={service} onOpen={setOpenId} />
          </div>
        ))}
      </div>

      <ServiceModal
        service={openService}
        open={openId !== null}
        onClose={() => setOpenId(null)}
      />
    </>
  );
};

export default ServiceGrid;
