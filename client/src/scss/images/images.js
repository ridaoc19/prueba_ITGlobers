import { FaUmbrella, FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiSchoolBag, GiSteampunkGoggles } from "react-icons/gi";
import { MdChair, MdOutlineSecurity } from "react-icons/md";
import { BsArrowRightShort, BsTwitter } from "react-icons/bs";
import { ImQrcode } from "react-icons/im";


// eslint-disable-next-line
export default {
  icons: [
    {
      name: "PUFF",
      url1: "https://acortar.link/aw4Qrg",
      url2: "https://m.media-amazon.com/images/I/41UQ5DlsioL._AC_SX466_.jpg",
      description: "Descripcion del producto, Este es un texto simulado",
      image: <FaUmbrella />,
    },
    {
      name: "RAIN",
      url1: "https://acortar.link/mYkp1d",
      url2: "https://m.media-amazon.com/images/I/71liLP7BWWL._AC_UX522_.jpg",
      description: "Descripcion del producto, Este es un texto simulado",
      image: <GiSchoolBag />,
    },
    {
      name: "CART",
      url1: "https://acortar.link/EOQwri",
      url2: "https://m.media-amazon.com/images/I/517yDTr8-sL._AC_SY355_.jpg",
      description: "Descripcion del producto, Este es un texto simulado",
      image: <MdChair />,
    },
    {
      name: "NAP",
      url1: "https://acortar.link/NGgP1Q",
      url2: "https://m.media-amazon.com/images/I/51WCb2YH3DS._AC_UX522_.jpg",
      description: "Descripcion del producto, Este es un texto simulado",
      image: <GiSteampunkGoggles />,
    },
  ],

  carousel: [
    "https://images.pexels.com/photos/871060/pexels-photo-871060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://acortar.link/epopXD",
    "https://acortar.link/G6S3Bv",
  ],

  instagram: [
    "https://images.pexels.com/photos/404960/pexels-photo-404960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://acortar.link/EOQwri",
    "https://acortar.link/epopXD",
    "https://acortar.link/mYkp1d",
    "https://acortar.link/G6S3Bv",
    "https://acortar.link/NGgP1Q",
  ],

  arrow: <BsArrowRightShort/>,

  social:[
    <FaFacebookF/>,
    <BsTwitter/>,
    <FaInstagram/>
  ],

  security: [
    <MdOutlineSecurity/>,
    <ImQrcode/>
  ],

  finally:"https://ecommerceday.org.ar/2022/wp-content/uploads/2022/06/Brandlive.png",


};
