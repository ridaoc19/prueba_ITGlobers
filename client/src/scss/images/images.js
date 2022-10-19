import { FaUmbrella } from "react-icons/fa";
import { GiSchoolBag, GiSteampunkGoggles } from "react-icons/gi";
import { MdChair } from "react-icons/md";
import una from './una.jpeg';
import dos from './dos.jpeg';
import tres from './tres.jpeg';

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

  carousel: [una, dos, tres],
};
