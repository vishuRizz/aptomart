import { allProducts } from "@/constants/products";
import { Link, useParams } from "react-router-dom";

export default function ProductListPage() {
  const { vendorName } = useParams();

  // Check if the vendor is "Bandcamp" or not
  if (vendorName?.toLowerCase() !== "bandcamp") {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-700">Products coming soon.</h1>
      </div>
    );
  }

  // If the vendor is "Bandcamp", show the products
  const products = allProducts[vendorName as keyof typeof allProducts] || [];

  return (
    <div className="bg-gray-50 min-h-screen px-[120px]">
      <div className="max-w-full mx-auto p-8">
        {/* Logo Section */}
        <div className="bg-orange-500 p-4 rounded-lg mb-6 flex justify-center">
          <img src={`/images/${vendorName?.toLowerCase()}-banner.png`} alt={`${vendorName} logo`} className="h-16" />
        </div>

        {/* Categories */}
        <div className="flex justify-center space-x-4 mb-8">
          {['Genres', 'Vinyl', 'CDs', 'Cassettes', 'T-Shirts'].map((category, index) => (
            <button key={index} className="px-4 py-2 bg-white rounded-md shadow-md text-gray-600 hover:text-gray-800">
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg shadow-md bg-white">
              <a href={product.link}>
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  <span className="text-xs font-semibold text-orange-500">{product.storeLabel}</span>
                  <p className="mt-2 text-lg font-medium">{product.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
