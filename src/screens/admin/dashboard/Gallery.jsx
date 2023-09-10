import { Typography } from "@material-tailwind/react";
import { imagesData } from "../../../images";
import PropTypes from 'prop-types';

export const Gallery = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6  md:grid-cols-3 xxl:grid-cols-5">
        {
            imagesData.map((image) => (
                <GalleryItem key = {image.id} data={image} />
            ))
        }
      </div>
    </section>
  );
};

export const GalleryItem = (props) => {
  return (
    <article className="rounded-xl bg-white p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl h-[200px]">
          <img src={props.data.image} className="w-full h-full object-cover" />
        </div>

        <div className="mt-1 p-2">
          <Typography className="font-inter font-medium text-sm">
            Uploaded By: { props.data.author}
          </Typography>
          <p className="mt-1 text-dark-moonstone font-inter text-xs">
            {props.data.date}
          </p>
        </div>
      </a>
    </article>
  );
};

GalleryItem.propTypes = {
    data: PropTypes.any,
}