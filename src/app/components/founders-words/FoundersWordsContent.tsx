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
          <div className="absolute left-0 top-1/4 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 opacity-5 xs:opacity-8 sm:opacity-10 bg-[url('/tea-leaf-pattern.png')] bg-contain bg-no-repeat transform -rotate-12 hidden md:block"></div>

          <div className="absolute right-0 bottom-1/4 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 opacity-5 xs:opacity-8 sm:opacity-10 bg-[url('/tea-leaf-pattern.png')] bg-contain bg-no-repeat transform rotate-12 hidden md:block"></div>

          <ClientFoundersImage />
          <ClientFoundersMessage />
        </div>
      </Container>
    </div>
  );
}

export default FoundersWordsContent;
