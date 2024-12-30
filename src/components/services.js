import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                We provide the best solutions for your dream software project
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Professional Trainings"
              description="Empower your team with expert-led training programs designed to upskill and inspire. 
              Whether you’re looking to master the latest technologies, improve workflow efficiency, or foster innovation, our custom-tailored training solutions ensure impactful learning experiences"
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Custom Software Engineering"
              description="Transform your ideas into reality with our cutting-edge software engineering services. From initial design to deployment, we build reliable, scalable, 
              and user-centric software solutions tailored to meet your unique business needs."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Expert Consulting"
              description="Achieve your business goals with strategic guidance from industry experts. We help you navigate complex challenges, identify opportunities, and optimize your processes to drive success."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
