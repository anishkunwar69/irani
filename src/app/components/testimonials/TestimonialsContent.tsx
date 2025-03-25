import Container from "../Container";
import ClientTestimonialsGrid from "./client/ClientTestimonialsGrid";
import { TestimonialType } from "./client/ClientTestimonialCard";

const testimonials: TestimonialType[] = [
  {
    name: "Shrawan Kumar",
    content:
      "Irani Chiya offers a fantastic tea experience with its rich and flavorful brew, served in a warm and inviting setting. The ambiance makes it a great place to relax and enjoy a good cup of tea. While it's a bit pricier than a regular tea shop, the quality and experience make it worth the occasional treat!",
    reviewUrl: "https://g.co/kgs/6nSFqJS",
    initials: "SK",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXCLG-cEm616JbS8jv8rzhHYUaiME1JHaxROIbzm2H1OmcA_JwsPQ=w120-h120-p-rp-mo-ba4-br100",
  },
  {
    name: "Saurav prasad Singh",
    content:
      "If you are looking for the best tea this is the best place for you. Nowadays this is the best place for tea lovers in Kathmandu valley. Irani tea is the best tea which brings me every day at once to drink tea at this place .",
    reviewUrl: "https://g.co/kgs/vKcJYFy",
    initials: "SS",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVX_15ThKFPVC5-zIW1exEEZi4F8pRfcO2gNqGQnotmwyPmork=w120-h120-p-rp-mo-ba4-br100",
  },
  {
    name: "Anup Humagain",
    content:
      "Irani Chiya is an absolute gem of a tea house! The cozy atmosphere and the aroma of freshly made tea welcomed me. The tea selection is exceptional, and the staff's knowledge and passion for tea are evident. I enjoyed a delightful cup of irani chai that was both flavorful and comforting. The warm hospitality and charming ambiance make Irani Chiya a must-visit for tea enthusiasts.",
    reviewUrl: "https://g.co/kgs/TxdyPn7",
    initials: "AH",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWT7ZOnYtYgVWV-WPX9LBQXrK_mmjwibpFIyxcIaIB3gEzRUHVmPQ=w120-h120-p-rp-mo-ba3-br100",
  },
  {
    name: "Arjun Dahal",
    content:
      "Irani Chiya offers a delightful variety of teas, predominantly infused with Iranian flavors. The Masala tea stands out as a personal favorite, boasting a rich blend of spices. For coconut enthusiasts, the Premium option provides a satisfying and unique experience. The diverse tea selection caters to different tastes, making it a recommended spot for tea enthusiasts seeking flavorful and aromatic brews.",
    reviewUrl: "https://g.co/kgs/3G5DdV3",
    initials: "AD",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVCxTwdDCD5hfRXCSvfm4rWwM6nQP4_AvJInKXd3dYezGfJI4u0=w72-h72-p-rp-mo-ba4-br100",
  },
  {
    name: "Purushottam Kunwar",
    content:
      "This cozy tea shop is a hidden gem for Iriani Chiya and Masala Chiya lovers. Exceptional customer service and a tranquil atmosphere make it a must-visit for a genuine taste of Nepal's tea culture.",
    reviewUrl: "https://g.co/kgs/D2jJKYP",
    initials: "PK",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWWEyE03u6U7eHQJ-ars0n_aOKEMtx4SFGvAqVfnDIdRsGw28Zp=w72-h72-p-rp-mo-ba5-br100",
  },
  {
    name: "Sopnil Koirala",
    content:
      "Getting to choose from among a number of tea flavors ,at what i believe, was a reasonable price, was such a relief to get around the Sinamangal area. The hospitality was top notch, would definitely recommend a visit!! ☕️👌",
    reviewUrl: "https://g.co/kgs/6RrDC72",
    initials: "SK",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWpPxwZEBNwjsU1BkipNLRTsj1IWPtd-D9w2uZilRpkl6kHAKMU3Q=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Mega kitchen fabricator nepal",
    content:
      "I had matka chiya it was amazing and was topped with coconut spread which made it more amazing . It is a nice place for tea and chatting with your friends. They also serve biscuits and cookies with the tea. The price was amazingly cheap also .",
    reviewUrl: "https://g.co/kgs/rxW2pw6",
    initials: "MN",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUJ1g6mTmi2Pl1g_nfgMf3JdcQhSSXmmd5gjm80jtfN45xZ1Bk=w72-h72-p-rp-mo-ba4-br100",
  },
  {
    name: "Funny B",
    content: `I was returning from looking at granite for a house at Pashupati Marble in Imadol, Lalitpur. I saw a signboard saying "Iranian Tea" right in front of the gate. Curious about what Iranian tea might be like, I went there and had a cup. It had a different taste than I expected, and I really liked it. After reaching 3 kilometers away, I remembered the taste of that tea and decided to go back. I had another two cups. Great!`,
    reviewUrl: "https://g.co/kgs/tJnMZue",
    initials: "FB",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocL0Jta-Q3TZyT9b5FEQM2qRPbrEMQ-0VUHJQVzXQP92CejlTw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Amit Yadav",
    content:
      "One of the coolest and chill place to hangout with friends along with a huge delicacy of different varieties of at such a affordable price. Everytime the visiting experience is just awesome",
    reviewUrl: "https://g.co/kgs/crRf9pm",
    initials: "AY",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWn4pPfDUnHUsb9FhK7L2D1feUTJayYVcBAFospKYtM5Px8hnuQ6Q=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    name: "Nishant Karn",
    content:
      "So few days back I went at it's Koteshwor branch along with my friend Anjali. The Irani special tea tasted soo good that as she was half insane, and after drinking your tea she became full insane. Such a good tea. 🙂",
    reviewUrl: "https://maps.app.goo.gl/DwLruK5GCm9x6j2j9",
    initials: "NK",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLdvQLTW5Y20Sbk0T0s_8a96cm6vIjN8K-Xi8lQt6haLEL_q7cc=w120-h120-p-rp-mo-br100",
  },
  {
    name: "Anish Jaiswal",
    content:
      "It's a good place to have a tea and enjoy with your friends. It provides good service. It has tea options with snacks as well as lassi,too. Tea that I like most from irani chiya is masala tea...",
    reviewUrl: "https://g.co/kgs/1NXouJ6",
    initials: "AJ",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKFUKuQnYObgMW5_e_V7RVny1axsEhteoPlVp7LW36NMF82rw=w72-h72-p-rp-mo-br100",
  },
  {
    name: "veshraj prasai",
    content:
      "Nice spot with a variety of teas, including their signature Irani tea, though I personally didn't enjoy its taste. The regular tea is great and reasonably priced. The place has a cool seating area, and it's usually packed during mornings and evenings. Worth visiting if you're curious about Irani tea!",
    reviewUrl: "https://g.co/kgs/2Uu8UY7",
    initials: "VH",
    rating: 4,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXsE6ed7QlO-bOCVFCiORdIR8aE4AhlUYQPL9VX0JHLqjiVARTrmw=w72-h72-p-rp-mo-ba5-br100",
  },
];

function TestimonialsContent() {
  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <div className="relative space-y-12 xs:space-y-16">
          <ClientTestimonialsGrid testimonials={testimonials} />
        </div>
      </Container>
    </div>
  );
}

export default TestimonialsContent;
