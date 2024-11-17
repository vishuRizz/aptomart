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
    navigate(`/vendors/${vendorName}/${productName}/full-payment`);
  };

  return (
    <div className="container  px-4 py-4">
      {/* Back Button */}
      <div className="flex items-center mb-8 lg:w-1/2 lg:px-[100px] px-[100px] border-l border-r">
        <button className="text-lg text-gray-600 hover:text-gray-900">
          ← Yacht Page
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">

        {/* Product Images */}
        <div className="flex lg:w-1/2" style={{ marginLeft: '130px' }}>
          {/* Left side - Thumbnails */}
          <div className="flex flex-col justify-between" style={{ width: '90px', gap: '5px' }}>
            <img
              src={thumbnail_1}
              alt="Thumbnail 1"
              className="object-cover border rounded-md"
              style={{ width: '90px', height: '110px', marginBottom: '10px', marginTop: '0px'}}
            />
            <img
              src={thumbnail_2}
              alt="Thumbnail 2"
              className="object-cover border rounded-md"
              style={{ width: '90px', height: '110px', marginBottom: '10px', marginTop: '0px' }}
            />
            <img
              src={thumbnail_3}
              alt="Thumbnail 3"
              className="object-cover border rounded-md"
              style={{ width: '90px', height: '110px' }}
            />
          </div>

          {/* Right side - Main Image */}
          <div className="flex items-center" style={{ marginLeft: '50px' }}>
            <img
              src={main_image}
              alt="Xiaomi Band 3"
              className="object-cover border rounded-md"
              style={{ width: '300px', height: '450px' }}
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
      <hr className="my-8 border-gray-20" />
    </div>
  );
};




export default ProductDescription;

