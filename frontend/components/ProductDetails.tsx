import { useNavigate, useParams } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  main_image: string;
  thumbnail_1: string;
  thumbnail_2: string;
  thumbnail_3: string;
}

function ProductDescription({ title, description, main_image, thumbnail_1, thumbnail_2, thumbnail_3 }: Props) {

  const navigate = useNavigate();
  const { vendorName, productName } = useParams();

  const handleBuyNowClick = () => {
    navigate(`/vendors/${vendorName}/${productName}/deposit`);
  };

  return (
    <div className="container mx-auto px-2 py-6 ">
      {/* Back Button */}
      <div className="flex items-center mb-4 lg:w-1/2 lg:px-[120px] px-[120px] border-l border-r ">
        <button className="text-lg text-gray-600 hover:text-gray-900  ">
          ← Yacht Page 
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">

        {/* Product Images */}
        <div className="flex lg:w-1/2 space-x-[20px] pl-[120px]">
          {/* Left side - Thumbnails */}
          <div className="flex flex-col gap-[10px]">
            <img
              src={thumbnail_1}
              alt="Thumbnail 1"
              className="w-[90px] h-[133px] object-cover border rounded-md"
            />
            <img
              src={thumbnail_2}
              alt="Thumbnail 2"
              className="w-[90px] h-[133px] object-cover border rounded-md"
            />
            <img
              src={thumbnail_3}
              alt="Thumbnail 3"
              className="w-[90px] h-[133px] object-cover border rounded-md"
            />
          </div>

          {/* Right side - Main Image */}
          <div className="flex items-center">
            <img
              src={main_image}
              alt="Xiaomi Band 3"
              className="w-[300px] h-[440px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 lg:pl-8 lg:pr-[66px] pr-[66px]">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="text-xl text-gray-500 line-through">$200.00</div>
          <div className="text-2xl font-bold text-red-600 mb-2">$100.00</div>
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">
              <span className="text-gray-500">⭐</span>
              <span className="text-gray-500">⭐</span>
              <span className="text-gray-500">⭐</span>
              <span className="text-gray-500">⭐</span>
              <span className="text-gray-500">⭐</span>
            </div>
            <div className="ml-2 text-gray-500">(32 reviews)</div>
          </div>
          <p className="text-gray-700 mb-6">
            {description}
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mb-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-4 py-2 text-gray-700">−</button>
              <input type="text" value="1" readOnly className="w-12 text-center border-t border-b border-gray-300" />
              <button className="px-4 py-2 text-gray-700">+</button>
            </div>
            <button className="ml-4 px-6 py-2 bg-black text-white rounded-md">Add to Cart</button>
          </div>
          <button onClick={handleBuyNowClick} className="w-full py-2 text-center border border-black text-black rounded-md mb-4">Buy Now</button>

          {/* Shipping Info */}
          <div className="flex items-center text-gray-600">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v4a2 2 0 002 2h3l1 2h8l1-2h3a2 2 0 002-2V3"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 13l-4 4m0 0l-4-4m4 4V7"></path></svg>
            Free worldwide shipping on all orders over $100
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7-5 7 5M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-10 0h3m7 0h3m-3-10l-7 7-7-7"></path></svg>
            Delivers in: 3-7 Working Days <a href="" className="text-blue-500 ml-1">Shipping & Return</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReviewSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="max-w-screen-xl mx-auto px-[100px]">
        {/* Tabs Section */}
        <div className="flex items-center space-x-4 mb-8 mt-10">
          <h2 className="text-2xl font-semibold">Description</h2>
          <h2 className="text-2xl font-semibold text-gray-400">|</h2>
          <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {/* Review 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                <div>
                  <p className="text-lg font-semibold">Mike Johnson</p>
                  <p className="text-gray-500">5m</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-lg">★★★★★</span>
              </div>
            </div>
            <p className="text-gray-700">
              I've been using the Mi Band 3 for a couple of weeks now, and I'm
              thoroughly impressed. The device offers a sleek design and a
              comfortable fit, making it easy to wear all day. Its OLED touch
              display is bright and responsive, allowing me to view
              notifications, track my steps, and monitor my heart rate
              effortlessly.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Reply</button>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                <div>
                  <p className="text-lg font-semibold">Mike Johnson</p>
                  <p className="text-gray-500">5m</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-lg">★★★★★</span>
              </div>
            </div>
            <p className="text-gray-700">
              The battery life is exceptional; I only need to charge it once
              every 20 days or so. For its price point, the Mi Band 3 delivers
              outstanding value with reliable performance and useful fitness
              tracking features. Highly recommended for anyone looking for an
              affordable yet efficient fitness tracker.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Reply</button>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-gray-700">Your Name:</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-100 rounded-lg p-3 mt-1"
              />
            </div>
            <div>
              <label className="text-gray-700">Your Email:</label>
              <input
                type="email"
                placeholder="person@gmail.com"
                className="w-full bg-gray-100 rounded-lg p-3 mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Write your review:</label>
            <textarea
              placeholder="Write your review..."
              className="w-full bg-gray-100 rounded-lg p-3 mt-1 h-32"
            ></textarea>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <label className="text-gray-700">Your Ratings:</label>
            <span className="text-gray-500 text-lg">☆☆☆☆☆</span>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
            Post Review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L9.75 12l7.5 5.25V6.75z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

function SimilarProducts() {
  const products = [
    {
      name: "Oppo F1",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-25%",
      image: "/images/oppo-f1.jpg",
    },
    {
      name: "Huawei Tablet",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-20%",
      image: "/images/huawei-tablet.jpg",
    },
    {
      name: "iWatch Series 5",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-13%",
      image: "/images/iwatch-series-5.jpg",
    },
    {
      name: "Samsung Z Flip",
      originalPrice: 230.0,
      discountedPrice: 200.0,
      discount: "-10%",
      image: "/images/samsung-z-flip.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-[130px] my-10">
      <h2 className="text-3xl font-bold mb-8">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg p-4 relative flex flex-col items-center"
          >
            <span className="bg-gray-800 text-white text-sm rounded-full px-2 py-1 absolute top-2 left-2">
              {product.discount}
            </span>
            <div className="bg-gray-300 rounded-lg h-54 w-full mb-4">
              <img
                src={product.image} // Use the image from the product object
                alt={product.name}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <h3 className="text-lg font-medium text-center">{product.name}</h3>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <span className="line-through text-gray-500">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-black font-semibold">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <button className="bg-gray-100 text-black p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ProductDetails = () => {
  return (
    <>
      <ProductDescription
        title="Product Title"
        description="Product Description"
        main_image="/path/to/main_image.jpg"
        thumbnail_1="/path/to/thumbnail1.jpg"
        thumbnail_2="/path/to/thumbnail2.jpg"
        thumbnail_3="/path/to/thumbnail3.jpg"
      />
      <ReviewSection />
      <SimilarProducts />
    </>
  );
};

export default ProductDetails;
