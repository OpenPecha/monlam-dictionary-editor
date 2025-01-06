import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Usercard from "../Components/Usercard";

const pathlist = [
  {
    id: 1,
    name: "ཚིག་གསར།",
    path: "/tsigsar",
  },
  {
    id: 2,
    name: "དཔར་ཁང་།",
    path: "/parkhang",
  },
  {
    id: 3,
    name: "མི་སྣ།",
    path: "/mina",
  },
  {
    id: 4,
    name: "དཔེ་ཆ།",
    path: "/pecha",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
      <div className="flex flex-col items-center justify-center h-screen"> 
        {/* <Usercard /> */}
        <div className="flex items-center justify-center mt-8 mb-2">
          <img className=" w-16 h-16 rounded-md" src={logo} alt="Logo" />
        </div>
        <div className="flex align-middle justify-center">
          <p className="cursor-default text-2xl font-semibold font-monlam">
            སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ།
          </p>
        </div>

        <div className="grid align-middle justify-center mt-8">
          {pathlist.map((item) => (
            <div
              key={item.id}
              onClick={() =>navigate(item.path)}
              className="rounded cursor-pointer transition-all w-72 flex justify-between items-center hover:bg-slate-100 p-2"
            >
              <p className=" text-lg font-medium font-monlam">{item.name}</p>
              <p className="text-lg">+</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
