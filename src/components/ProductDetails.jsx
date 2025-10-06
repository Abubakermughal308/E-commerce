import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import { useDispatch } from "react-redux";
import { AddItems } from "../utils/CartSlice";
import { Check, Outdent, X } from "lucide-react";
import { toast } from "react-toastify";
const button = [
  {
    id: 1,
    name: "Small",
  },
  {
    id: 2,
    name: "Medium",
  },
  {
    id: 3,
    name: "Large",
  },
  {
    id: 4,
    name: "X-Large",
  },
];
const colors = [
  {
    id: 1,
    color: "bg-zinc-400",
  },
  {
    id: 2,
    color: "bg-gray-700",
  },
  {
    id: 3,
    color: "bg-stone-600",
  },
];
const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("P");
  const [productData, setProductData] = useState([]);
  const { images, price, title, description } = productData;
  const [sizeBgColor, setSizeBgColor] = useState("bg-zinc-400");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");
  const [image, setImage] = useState();
  const [reviews, setReviews] = useState(true);
  const [pDetails, setPDetails] = useState(false);
  const [Faqs, setFaqs] = useState(false);
  const dispatch = useDispatch();

  const details = {
    id: Date.now(),
    name: title,
    img:image,
    price: price,
    size: size,
    quantity: quantity,
    totalQuantity:quantity,
    color: sizeBgColor,
  };
  useEffect(() => {
    handleProductDetails();
  }, []);
  const handleProductDetails = async () => {
    // https://api.escuelajs.co/api/v1/products/1/related
    const data = await axios.get(
      "https://api.escuelajs.co/api/v1/products/" + productId
    );
    console.log("datarelated" , data);

    setProductData(data.data);
    setImage(data.data.images[0]);
  };

  return productData.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="w-full px-7 my-10">
      <div className="md:flex w-full ">
        {/* image section */}
        <div className="  md:w-5/12 flex flex-col-reverse md:flex-row  ">
          <div className="md:w-4/12 w-full h-full md:block flex justify-around my-4 md:my-0">
            {images.map((img, index) => (
              <img
                onClick={() => {
                  setImage(img);
                }}
                key={index}
                className={`w-30 h-32 mb-2 rounded-2xl ${
                  image === img ? "border-2" : ""
                }`}
                src={img}
                alt=""
              />
            ))}
          </div>
          <div className="w-full">
            <img className="w-full h-auto  rounded-2xl overflow-y-hidden " src={image} alt="" />
          </div>
        </div>
        {/* details section  */}
        <div className="md:w-7/12 w-full md:mx-5 ">
          <div className=" ">
            <h1 className="text-4xl  font-extrabold">{title}</h1>
            <h1 className="text-lg my-1">
              ⭐⭐⭐⭐ <span className="opacity-80">4.2/5</span>
            </h1>
            <h1 className="text-2xl font-bold my-2">
              $ {price} <span className="opacity-30">-30%</span>
            </h1>
            <p className="text-sm opacity-75 my-1">{description}</p>
          </div>
          <div className=" w-full border-b opacity-25 md:my-2  my-4 "></div>
          <div className=" my-1 ">
            <h1 className="text-lg ">Select Colors</h1>
            <div className="flex gap-2 my-1">
              {colors.map((col) => (
                <h1
                  key={col.id}
                  onClick={() => {
                    setSizeBgColor(col.color);
                  }}
                  className={`${col.color} w-10  h-10 rounded-full ${
                    col.color == sizeBgColor ? "border-4 border-stone-500" : ""
                  }`}
                ></h1>
              ))}
            </div>
          </div>
          <div className=" w-full border-b opacity-25 md:my-2  my-4 "></div>
          <div className=" my-1">
            <h1 className="text-lg">Choose Size</h1>
            <div className="flex gap-2 my-2 ">
              {button.map((btn) => (
                <button
                  key={btn.id}
                  className={`md:text-lg text-sm px-4 rounded-2xl py-1 cursor-pointer bg-stone-300 ${
                    size === btn.name ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize(btn.name)}
                >
                  {btn.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex mt-4 ">
            <div className="w-4/12  rounded-full flex bg-stone-300 mx-5  ">
              <button
                className="px-4 text-2xl  py-2 cursor-pointer"
                onClick={() => {
                  quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
                }}
              >
                -
              </button>
              <h1 className="w-full text-2xl text-center py-2">{quantity}</h1>
              <button
                className="px-4 text-2xl  py-2 cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className={`w-full rounded-full py-2 px-4 text-white bg-black text-xl cursor-pointer `}
              onClick={() => {
                dispatch(AddItems(details));
                toast.success("Item Added");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-20 mt-10 mb-10 ">
        <div>
          <div className="flex justify-evenly text-xl font-semibold ">
            <h1
              className={`${pDetails ? "font-extrabold md:text-2xl " : ""}  cursor-pointer`}
              onClick={() => {
                setReviews(false);
                setFaqs(false);
                setPDetails(true);
              }}
            >
              Product Details
            </h1>
            <h1
              className={`${reviews ? "font-extrabold text-2xl" : ""} cursor-pointer`}
              onClick={() => {
                setReviews(true);
                setFaqs(false);
                setPDetails(false);
              }}
            >
              Reviews
            </h1>
            <h1
              className={`${Faqs ? "font-extrabold text-2xl" : ""}  cursor-pointer`}
              onClick={() => {
                setReviews(false);
                setFaqs(true);
                setPDetails(false);
              }}
            >
              FAQS
            </h1>
          </div>
          <div className="border-b opacity-35 my-5"></div>
          <div>
            {reviews && <RatingAndReviews />}
            {pDetails && <Details />}
            {Faqs && <FAQS />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
export const RatingAndReviews = () => {
  const [comment, setComment] = useState(false);

  const customerComment = [
    {
      name: "Sarah M.",
      ratings: "⭐⭐⭐⭐⭐",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Sarah M.",
      ratings: "⭐⭐⭐⭐⭐",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      ratings: "⭐⭐⭐⭐⭐",
      comment:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L",
      ratings: "⭐⭐⭐⭐⭐",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "James L",
      ratings: "⭐⭐⭐⭐⭐",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "James L",
      ratings: "⭐⭐⭐⭐⭐",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  return (
    <div>
      {comment && (
        <div className="w-full h-auto py-4 border rounded-2xl border-gray-300 px-2">
          <X className="float-right my-2 cursor-pointer" onClick={() => setComment(false)} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              customerComment.push({
                name: "Abubaker",
                ratings: "⭐⭐⭐⭐⭐",
                comment: e.target.value,
              });
              setComment(false);
            }}
          >
            <input
              className="p-3  border-gray-400 border w-full"
              placeholder="Drop Your Comment"
              type="text"
            />
            <button className="py-2 px-4 bg-black text-white rouded-full  my-1 ">
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="md:px-7 px-1 md:py-10 py-4">
        <div className="flex justify-between   my-3">
          <h1 className="text-2xl font-bold">All Reviews</h1>
          <div className="md:flex ">
            <button className="bg-stone-300 md:text-lg text-base hover:bg-stone-400 px-4 py-2 mx-1 rounded-full cursor-pointer">
              Latest
            </button>
            <button
              className="px-4 py-2 rounded-full bg-black text-white text-base md:text-lg cursor-pointer"
              onClick={() => setComment(true)}
            >
              Write a Review
            </button>
          </div>
        </div>
        <div className="md:flex flex-wrap  w-full">
          {customerComment.map((cmnt, index) => (
            <div
              key={index}
              className=" md:w-6/12  w-full my-2 md:my-1 p-5 field-sizing-content  border border-gray-400 rounded-2xl shrink-0 "
            >
              <h1 className="my-3">{cmnt.ratings}</h1>
              <h1 className="font-bold my-2 md:text-xl text-lg">{cmnt.name}</h1>
              <p className="text-sm md:text-md">"{cmnt.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const Details = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at id quia
      sint possimus voluptatum quis! Error velit nulla ut nam quasi neque
      cupiditate iure nihil quia ratione et eveniet est natus, enim minus illo
      voluptatem suscipit repellat qui voluptatum iusto maiores? Est, labore
      alias.
    </div>
  );
};
export const FAQS = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, quaerat
      rerum magnam est delectus beatae optio expedita nostrum iure architecto
      culpa esse autem doloremque adipisci ipsam accusamus dolore nobis
      consectetur ea ipsa! Perspiciatis, vero amet assumenda expedita placeat
      magni dicta quidem ad ab. Beatae, officia dolorum atque est tempore
      tempora amet esse excepturi, nostrum eaque praesentium.
    </div>
  );
};
