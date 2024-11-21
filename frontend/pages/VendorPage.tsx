export default function VendorPage() {
  const vendors = [
 
    { name: 'Bandcamp', image: '/images/bandcamp.png', link: '/vendors/bandcamp' },
    { name: 'Udemy', image: '/images/udemy.png', link: '/vendors/udemy' },

  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8">
      {/* Large Image Section */}
      
      {/* Vendor Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Organizations</h2>
      </div>

      {/* Vendor Logos Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {vendors.map((vendor, index) => (
          <a href={vendor.link} key={index}>
            <div className="rounded-lg shadow-md bg-white p-4 cursor-pointer hover:shadow-lg text-center">
              <img src={vendor.image} alt={vendor.name} className="w-full h-20 object-contain mb-2" />
              <span className="text-sm font-medium">{vendor.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
