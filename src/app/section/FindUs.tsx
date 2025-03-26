import FindUsContent from "../components/find-us/FindUsContent";
import ClientFindUsWrapper from "./ClientFindUsWrapper";
import { memo } from "react";

const FindUs = () => {
  return (
    <ClientFindUsWrapper>
      <FindUsContent />
    </ClientFindUsWrapper>
  );
};

export default memo(FindUs);
