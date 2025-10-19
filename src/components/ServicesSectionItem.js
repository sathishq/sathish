import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ServicesSectionItemStyles = styled.div`
  text-align: center;
  .services__item {
    svg {
      height: 4rem;
      margin-bottom: 1rem;;
    }
    .services__item__title {
      font-size: 2.5rem;
      font-family: "Montserrat SemiBold";
    }
    p {
      font-size: 1.6rem;
      margin-top: 2rem;
    }
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium minus, eos ullam omnis aliquid voluptate.",
}) {
  return (
    <ServicesSectionItemStyles>
      <div className="services__item">
        {icon}
        <div className="services__item__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ServicesSectionItemStyles>
  );
}
