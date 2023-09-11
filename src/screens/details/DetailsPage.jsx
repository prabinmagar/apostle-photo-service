import ImageGallery from "react-image-gallery";
import { staticImages } from "../../images";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const DetailsPage = () => {
  const images = [
    {
      original: staticImages.img1,
      thumbnail: staticImages.img1,
    },
    {
      original: staticImages.img2,
      thumbnail: staticImages.img2,
    },
    {
      original: staticImages.img3,
      thumbnail: staticImages.img3,
    },
    {
      original: staticImages.img4,
      thumbnail: staticImages.img4,
    },
    {
      original: staticImages.img5,
      thumbnail: staticImages.img5,
    },
    {
      original: staticImages.img6,
      thumbnail: staticImages.img6,
    },
  ];

  const comments = [
    {
      id: 1,
      name: "John Doe",
      image: staticImages.user,
      comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, odio."
    },
    {
      id: 2,
      name: "Sarah Winston",
      image: staticImages.wed1,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati consequuntur veniam facilis dolorem nulla magnam blanditiis labore iste rem?"
    },
    {
      id: 3,
      name: "Rajesh Hamal",
      image: staticImages.nature1,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique sapiente corporis natus!"
    }
  ]

  return (
    <div className="flex bg-whitesmoke px-3 py-12">
      <div className="containers w-full bg-white shadow">
        <div className="px-2 flex items-center justify-between border-b-[1px] border-black/10 py-4 w-full">
          <div className="flex items-center">
            <div className="rounded-full w-[40px] h-[40px] overflow-hidden me-3 bg-green-700">
              <img
                src="/src/assets/images/user.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black/70 font-inter">
                Marcus Arthur
              </span>{" "}
              <span className="text-xs font-inter">@marcus</span>
            </div>
          </div>
          <p className=" font-semibold hidden text-base lg:inline-block font-inter text-black/70">
            Summer Vacation Camping
          </p>
        </div>

        <div className="my-4">
          <ImageGallery items={images.slice(0, 3)} />
        </div>

        <div className="flex items-center border-t-[1px] border-gray-200">
          <form className="w-full max-w-xl bg-white rounded-lg pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-semibold font-inter">
                Add a new comment
              </h2>
              <div className="w-full px-3">
                <textarea
                  className="bg-white rounded border border-gray-300 resize-none w-full h-40 p-3 placeholder-gray-700 font-inter text-sm focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                ></textarea>
                <Button className="mt-2 rounded font-inter">
                  Send Your Comment
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="comments grid gap-6 mt-4 mb-12">
          {
            comments.map(comment => (
              <CommentsItem key = {comment.id} data = {comment} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

export const CommentsItem = (props) => {
  return (
    <div className="flex items-start space-x-2">
      <div className="flex w-[40px] h-[40px] min-w-[40px]">
        <img
          src={props.data.image}
          alt=""
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div className="block">
          <div className="bg-gray-100 w-auto rounded-xl p-3">
            <div className="font-medium mb-1">
              <a href="#" className="hover:underline font-inter">
                <small>{props.data.name}</small>
              </a>
            </div>
            <div className="text-sm font-inter">
              {props.data.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CommentsItem.propTypes = {
  data: PropTypes.any,
}
