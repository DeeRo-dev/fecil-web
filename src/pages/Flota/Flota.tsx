import { Link } from "react-router-dom";
import { CarCard } from "../../components/CarCard/CarCard";
import FormHome from "../../components/FormHome/FormHome";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Flota() {
  return (
    <>
      <div className="w-11/12 m-auto mt-5 flex">
        <div className="w-96 px-2 h-auto ">
          <FormHome />
        </div>

        <div className="flex flex-col w-full  m-auto items-center">
          <div className="flex w-full flex-col my-5">
            <div className="flex">
              <div className="pl-15">
              <Link to="/" className="flex items-center">  
              <FaArrowLeftLong />
                <p className="ml-2">
                  Volver
                </p>
              </Link>
              </div>
              <h2 className="text-xl ml-15 font-semibold text-colorText m-auto">
                Nueva Reserva
              </h2>
            </div>
            <div>
              <p>/Flota</p>
            </div>
          </div>

          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </>
  );
}
