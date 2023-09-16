import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

const Booking = () => {
  return (
    <div className="py-16 text-white bg-blue-gradient">
      <div className="containers px-3">
        <h3 className="xl:text-3xl text-2xl mb-10 text-center font-bold font-inter">
          Contact & Book Us
        </h3>
        <div className="mt-4 flex items-center flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex gap-4 items-center justify-center">
                <BsCalendar3 size={42} />
                <div>
                    <p className="font-inter font-bold text-lg">Book Now</p>
                    <span className="text-sm italic">Anytime Available</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <AiFillPhone size={48} />
                <div>
                    <p className="font-inter font-bold text-lg">Contact No</p>
                    <span className="text-sm italic">+977 9840557689</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <AiFillFacebook size={52} />
                <div>
                    <p className="font-inter font-bold text-lg">Facebook Page</p>
                    <span className="text-sm italic">Page link here</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
