import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import { BsCalendarDate, BsFillCameraFill } from "react-icons/bs";
import { useState } from "react";
import { setModalClose } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { imagesData } from "../../images";

const Modal = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState("/images/b2.avif");
  const handlePreviewItemClick = (newImageSrc) => {
    setSelectedImage(newImageSrc);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      dispatch(setModalClose());
    }
  };

  const images = [
    {
      original: "/src/assets/images/featured/img1.jpg",
      thumbnail: "/src/assets/images/featured/img1.jpg",
    },
    {
      original: "/src/assets/images/featured/img2.jpg",
      thumbnail: "/src/assets/images/featured/img2.jpg",
    },
    {
      original: "/src/assets/images/featured/img3.jpg",
      thumbnail: "/src/assets/images/featured/img3.jpg",
    },
    {
      original: "/src/assets/images/featured/img4.jpg",
      thumbnail: "/src/assets/images/featured/img4.jpg",
    },
    {
      original: "/src/assets/images/featured/img5.jpg",
      thumbnail: "/src/assets/images/featured/img5.jpg",
    },
    {
      original: "/src/assets/images/featured/img6.jpg",
      thumbnail: "/src/assets/images/featured/img6.jpg",
    },
  ];

  return (
    <div
      className="fixed modal-overlay w-full h-full left-0 top-0 right-0 bottom-0 bg-black/50 z-30"
      onClick={handleOverlayClick}
    >
      <div
        className="preview-modal bg-white min-h-[400px] lg:max-w-[70vw] max-w-[90vw] absolute top-10 left-1/2 w-full -translate-x-1/2 right-10 bottom-10 z-50 rounded-lg px-4 py-4 overflow-y-scroll"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div className="details-header px-2 flex items-center justify-between border-b-[1px] border-black/10 pb-3">
          <div className="flex items-center">
            <div className="rounded-full w-[40px] h-[40px] overflow-hidden me-3 bg-green-700">
              <img
                src="/src/assets/images/user.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black/90 font-inter">Marcus Arthur</span>{" "}
              <span className="text-xs font-inter">@marcus</span>
            </div>
          </div>
          <p className=" font-medium hidden text-sm lg:inline-block font-inter">
            DC009585_naturebg.jpeg
          </p>
          <button
            type="button"
            className="text-black/70"
            onClick={() => dispatch(setModalClose())}
          >
            <GrClose size={20} />
          </button>
        </div>

        <div className="my-4">
            <ImageGallery items={images.slice(0, 3)} />
        </div>

        <div className="image-description border-t-[1px] border-black/5 py-5 px-2">
          <p className="opacity-80">
            A beautiful and ancient spring fed canyon which weaves its way
            throught 400 meter.
          </p>

          <ul className="mt-4">
            <li className="flex items-center my-2">
              <span className="me-3">
                <BsCalendarDate />
              </span>
              <span className="opacity-80 text-sm">
                Uploaded on June 23, 2023
              </span>
            </li>
            <li className="flex items-center my-2">
              <span className="me-3">
                <BsFillCameraFill size={18} />
              </span>
              <span className="opacity-80 text-sm">Full HD Quality</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
};

export default Modal;
