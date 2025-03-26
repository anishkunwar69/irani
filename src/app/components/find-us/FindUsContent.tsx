import Container from "../Container";
import ClientFindUsHeader from "./client/ClientFindUsHeader";
import ClientMapGrid from "./client/ClientMapGrid";
import { BranchType } from "./types";
import { memo } from "react";

// Pre-define branches data to avoid computation during render
const branches: BranchType[] = [
  {
    name: "Irani Chiya - Main Branch",
    address: "Tinkune, Kathmandu",
    phone: "+977-9763596372",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIwpHi5I27gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQl0ZWFfc3RvcmU&phdesc=R8YRAXBR-Y0&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVVPjBsAGes5MXLzzkuNjCPF&daddr=M8MW%2B974,+Subidha+Marg,+Kathmandu+44600",
    coordinates: { lat: 27.6833983, lng: 85.3457092 },
  },
  {
    name: "Irani Chiya - Jadibuti",
    address: "Jadibuti, Kathmandu",
    phone: "+977-9849887974",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps/dir//Kathmandu+44600/@27.6724266,85.2656097,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb198954b9ea11:0xfdc36dd62c528c08!2m2!1d85.3480065!2d27.6724534?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    coordinates: { lat: 27.6724534, lng: 85.3480065 },
  },
  {
    name: "Irani Chiya - Setopul",
    address: "Setopul, Kathmandu",
    phone: "+977-9808921454",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps/dir//Setopul,+Kathmandu+44600/@27.7022099,85.2541167,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb19d241dad4c1:0x617fde978538cae5!2m2!1d85.3365569!2d27.7022255?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
    coordinates: { lat: 27.7022255, lng: 85.3365569 },
  },
  {
    name: "Irani Chiya - Lokanthali",
    address: "Lokanthali, Kathmandu",
    phone: "+977-9818791384",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps/dir//M9C4%2BXMR,+Bhaktapur+44600/@27.6724515,85.2742364,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb1b005e6cd1f5:0x18105445f9806969!2m2!1d85.3566375!2d27.6724793?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    coordinates: { lat: 27.6724793, lng: 85.3566375 },
  },
  {
    name: "Irani Chiya - Tikathali",
    address: "Tikathali, Lalitpur",
    phone: "+977-9851310532",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIr6rH8s-ygIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=7g6-WLqNVWA&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYN4ElEAG-s5McrLW08wWk8m&daddr=Mahalaxmi+44600",
    coordinates: { lat: 27.6652582, lng: 85.3580772 },
  },
  {
    name: "Irani Chiya - Sinamangal",
    address: "Sinamangal, Kathmandu",
    phone: "+977-9849300844",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIg9_99py9gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=9Yex5RGu8rE&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KVPOFEsAGes5MWOiV-cQGCgb&daddr=M8XX%2B3PG,+Kathmandu+44600",
    coordinates: { lat: 27.6976913, lng: 85.3493278 },
  },
  {
    name: "Irani Chiya - Baneshwor",
    address: "Bhimsengola Marga, Kathmandu",
    phone: "+977-9767648218",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFI0NPcsaW7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=1TO3F6bfh7I&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KWuxMnQAGes5MblsGPBxC9OX&daddr=M8VV%2B8RF,+Bhimsengola+Marg,+Kathmandu+44600",
    coordinates: { lat: 27.693311, lng: 85.3445585 },
  },
  {
    name: "Irani Chiya - Imadol",
    address: "Bojepokhari, Lalitpur",
    phone: "+977-9807659081",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIy9-d4Pm6gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQtjb2ZmZWVfc2hvcA&phdesc=h25d7u2FR84&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KYtjiFsAGes5MXhWuRT_XrPb&daddr=M87X%2B3HC,+Mahalaxmi+44705",
    coordinates: { lat: 27.6625973, lng: 85.3489757 },
  },
  {
    name: "Irani Chiya - Mahalaxmi",
    address: "Mahalaxmi, Lalitpur",
    phone: "+977-9849136505",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=da1ae0c58ff6cd0b&lqi=ChNpcmFuaSBjaGl5YSBuZWFyIG1lIgOQAQFIxfznmoy7gIAIWiEQABABGAAYASITaXJhbmkgY2hpeWEgbmVhciBtZTICbmWSAQRjYWZl&phdesc=ukpzSAcLP_Y&vet=12ahUKEwjW3rPllo6MAxX4UGcHHZbxE4QQ8UF6BAgEEFw..i&lei=JIvWZ9a8O_ihnesPluPPoAg&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=Kb0koU4AF-s5MWR92ielfnxr&daddr=M84X%2BR7M,+Mahalaxmi",
    coordinates: { lat: 27.6570835, lng: 85.3481791 },
  },
  {
    name: "Irani Chiya - Chyasal",
    address: "Chyasal, Lalitpur",
    phone: "+977-9742831495",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KeWKWwUAGes5MbErX1Pm2-MC&daddr=M8FP%2B22R,+Shahid+Shukra+Raj+Sadak+Paschim,+Lalitpur+44600",
    coordinates: { lat: 27.6773, lng: 85.3248 },
  },
  {
    name: "Irani Chiya - Chabahil",
    address: "Chabahil, Kathmandu",
    phone: "+977-9709737912",
    hours: "6:00 AM - 9:00 PM",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5b982d6d415b0dfc&vet=12ahUKEwjG2e-hnpSMAxUC1TgGHRNtHwIQ8UF6BAgFEFw..i&lei=SbjZZ4aREIKq4-EPk9r9EA&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KQtbkHwAGes5MfB3RjVxAwh_&daddr=P88W%2B8J9,+Kathmandu+44600",
    coordinates: { lat: 27.7135, lng: 85.3447 },
  },
];

function FindUsContent() {
  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container className="relative">
        <div className="relative space-y-12 xs:space-y-16">
          <ClientFindUsHeader />
          <ClientMapGrid branches={branches} initialBranch={branches[0]} />
        </div>
      </Container>
    </div>
  );
}

export default memo(FindUsContent);
