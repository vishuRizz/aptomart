import ProductDescription from "@/components/ProductDescription"
import ReviewSection from "@/components/ReviewSection"
import SimilarProducts from "@/components/SimilarProducts"
import { allProducts } from "@/constants/products";
import { useParams } from 'react-router-dom';


function ProductDetailPage() {
  const { vendorName, productName } = useParams();

  // Find the correct product data based on vendorName and productName
  const products = allProducts[vendorName as keyof typeof allProducts] || [];
  const product = products.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductDescription
        title={product.title}
        description={product.description}
        main_image={product.main_image}
        thumbnail_1={product.thumbnail_1}
        thumbnail_2={product.thumbnail_2}
        thumbnail_3={product.thumbnail_3}
      />
      <ReviewSection />
      <SimilarProducts />
    </>
  )
}

export default ProductDetailPage