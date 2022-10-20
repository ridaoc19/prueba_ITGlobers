import { FaUmbrella } from "react-icons/fa";
import { GiSchoolBag, GiSteampunkGoggles } from "react-icons/gi";
import { MdChair } from "react-icons/md";
import una from "./una.jpeg";
import dos from "./dos.jpeg";
import tres from "./tres.jpeg";

// eslint-disable-next-line
export default {
  icons: [
    {
      name: "PUFF",
      image: <FaUmbrella />,
    },
    {
      name: "RAIN",
      image: <GiSchoolBag />,
    },
    {
      name: "CART",
      image: <MdChair />,
    },
    {
      name: "NAP",
      image: <GiSteampunkGoggles />,
    },
  ],

  carousel: [
    "https://images.pexels.com/photos/404960/pexels-photo-404960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://acortar.link/epopXD",
    "https://acortar.link/G6S3Bv",
  ],
};
