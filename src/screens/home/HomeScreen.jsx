import { Explore } from "../../components/hero/Explore";
import { Hero } from "../../components/hero/Hero";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen, setModalOpen } from "../../redux/slices/modalSlice";
import Modal from "../../components/common/Modal";
import Booking from "../../components/common/Booking";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <>
      {isModalOpen && <Modal />}
      <Hero />
      <Explore />
      <Booking />
    </>
  );
};
