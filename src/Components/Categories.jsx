import { TiThSmallOutline } from "react-icons/ti";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { LiaHamburgerSolid } from "react-icons/lia";
import { IoPizzaOutline } from "react-icons/io5";
import { BsFillCupHotFill } from "react-icons/bs";
import { MdNoMeals } from "react-icons/md";

const Categories = [
  {
    id: 1,
    name: "All",
    Image: <TiThSmallOutline className="w-[50px] h-[50px] text-green-400" />,
  },
  {
    id: 2,
    name: "breakfast",
    Image: <BsFillCupHotFill className="w-[50px] h-[50px] text-green-400" />,
  },
  {
    id: 3,
    name: "soups",
    Image: <LuSoup className="w-[50px] h-[50px] text-green-400" />,
  },
  {
    id: 4,
    name: "pasta",
    Image: <CiBowlNoodles className="w-[50px] h-[50px] text-green-400" />,
  },
  {
    id: 5,
    name: "burger",
    Image: <LiaHamburgerSolid className="w-[50px] h-[50px] text-green-400" />,
  },
  {
    id: 6,
    name: "pizza",
    Image: <IoPizzaOutline className="w-[50px] h-[50px] text-green-400" />,
  },
  {
    id: 7,
    name: "main_course",
    Image: <MdNoMeals className="w-[50px] h-[50px] text-green-400" />,
  },
];

export default Categories;
