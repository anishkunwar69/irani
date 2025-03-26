import dynamic from "next/dynamic";

// Import hero component normally for faster LCP
import ClientJointVentureHero from "./client/ClientJointVentureHero";

// Dynamically import other components for better performance
const ClientJointVentureAbout = dynamic(
  () => import("./client/ClientJointVentureAbout"),
  { ssr: true }
);

const ClientJointVentureVisit = dynamic(
  () => import("./client/ClientJointVentureVisit"),
  { ssr: true }
);

import { memo } from "react";

function JointVentureContent() {
  return (
    <>
      <ClientJointVentureHero />
      <ClientJointVentureAbout />
      <ClientJointVentureVisit />
    </>
  );
}

export default memo(JointVentureContent);
