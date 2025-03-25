import Image from "next/image";
import FindUsContent from "../components/find-us/FindUsContent";
import ClientFindUsWrapper from "./ClientFindUsWrapper";

const FindUs = () => {
  return (
    <ClientFindUsWrapper>
      <FindUsContent />
    </ClientFindUsWrapper>
  );
};

export default FindUs;
