import Container from "../Container";
import ClientFoundersHeader from "./client/ClientFoundersHeader";
import ClientFoundersImage from "./client/ClientFoundersImage";
import ClientFoundersMessage from "./client/ClientFoundersMessage";

function FoundersWordsContent() {
  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <ClientFoundersHeader />

        <div className="grid grid-cols-1 min-[1539px]:grid-cols-5 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
          <ClientFoundersImage />
          <ClientFoundersMessage />
        </div>
      </Container>
    </div>
  );
}

export default FoundersWordsContent;
