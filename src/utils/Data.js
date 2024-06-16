import image1 from "../assets/antique_jewellery.jpeg";

// icons for sidebar
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { PiSignIn } from "react-icons/pi";
import { CgLogOut } from "react-icons/cg";
import { GrUpgrade } from "react-icons/gr";
import { SiGoogledocs } from "react-icons/si";
import { TbHelp } from "react-icons/tb";

export const navLinks = [
     {
          link: "Home",
          path: "/",
     },
     {
          link: "About",
          path: "/about",
     },
     {
          link: "Shop",
          path: "/shop",
     },
     {
          link: "Sell your Antiques",
          path: "/admin/dashboard",
     },
     {
          link: "Blog",
          path: "/blog",
     },
];

export const bannerSection = [
     {
          image: "https://media.timeout.com/images/105795964/image.jpg",
          title: "Original Arts",
          wordBreak: false,
     },
     {
          image: image1,
          title: "Jewelery",
          wordBreak: false,
     },
     {
          image: "https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_600x600.4841007885_potp.jpg",
          title: "Books",
          wordBreak: false,
     },
     {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4V_avpJAKRLxgM7zJ6obf7JdpU_hlvb67jw&s",
          title: "Home Decor",
          wordBreak: false,
     },
     {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5jLilFTUHutqiz5-KHdIVYR_1w-r0Jls6Q&s",
          title: "Vintage Cars",
          wordBreak: false,
     },
     {
          image: "https://ouchcart.com/cdn/shop/products/51dt4CMG2VL.jpg?v=1634610612",
          title: "Furniture",
          wordBreak: false,
     },
     {
          image: "https://m.media-amazon.com/images/I/71D7xsZcxkL._AC_UL480_FMwebp_QL65_.jpg",
          title: "Musical",
          wordBreak: false,
     },
     {
          image: "https://ii1.pepperfry.com/media/catalog/product/b/r/494x544/brass-antique-dial-black-hut-style-telephone-showpiece-by-exim-d-cor-brass-antique-dial-black-hut-st-lm1stz.jpg",
          title: "Upto 30% off. Terms apply",
          wordBreak: true,
     },
];

export const sideBar = [
     {
          icons: MdOutlineDashboard,
          title: "Dashboard",
          marginBottom: false,
          marginTop: false,
          path: "/admin/dashboard",
          showFirstTitle: true,
          showSecondTitle: false,
     },
     {
          icons: MdOutlineCloudUpload,
          title: "Upload Antiques",
          marginBottom: false,
          marginTop: false,
          path: "/admin/dashboard/upload",
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: MdOutlineManageHistory,
          title: "Manage Antiques",
          marginBottom: false,
          marginTop: false,
          path: "/admin/dashboard/manage",
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: FaRegUserCircle,
          title: "Users",
          marginBottom: false,
          marginTop: false,
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: RiProductHuntLine,
          title: "Products",
          marginBottom: false,
          marginTop: false,
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: PiSignIn,
          title: "Sign in",
          marginBottom: false,
          marginTop: false,
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: CgLogOut,
          title: "Log Out",
          marginBottom: true,
          marginTop: false,
          path: "/logout",
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: GrUpgrade,
          title: "Upgrade to Pro",
          marginBottom: false,
          marginTop: true,
          showFirstTitle: false,
          showSecondTitle: true,
     },
     {
          icons: SiGoogledocs,
          title: "Documentation",
          marginBottom: false,
          marginTop: false,
          showFirstTitle: false,
          showSecondTitle: false,
     },
     {
          icons: TbHelp,
          title: "Help",
          marginBottom: false,
          marginTop: false,
          showFirstTitle: false,

          showSecondTitle: false,
     },
];

export const favouriteAntiqueDescription = {
     description:
          "Explore a world of vintage charm and historical significance at Antique Vision. Our curated collection showcases exquisite antiques, each with a story to tell, preserving the essence of bygone eras for discerning collectors and enthusiasts alike.",
};

export const promoDescription = {
     description:
          "Enjoy 30% off every product at Antique Vision, your premier destination for handcrafted antique treasures. Specializing in meticulously crafted pieces made by me, Antique Vision offers a curated selection that celebrates craftsmanship and heritage, perfect for collectors and enthusiasts alike.",
};