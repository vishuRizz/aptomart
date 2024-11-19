export default function VendorPage() {
  const vendors = [
    { name: 'Hulu', image: '/images/hulu.png', link: '/vendors/hulu' },
    { name: 'Adobe', image: '/images/adobe.png', link: '/vendors/adobe' },
    { name: 'Bandcamp', image: '/images/bandcamp.png', link: '/vendors/bandcamp' },
    { name: 'Udemy', image: '/images/udemy.png', link: '/vendors/udemy' },
    { name: 'Thingverse', image: '/images/thingverse.png', link: '/vendors/thingverse' },
    { name: 'Mycybersale', image: '/images/mycybersale.png', link: '/vendors/mycybersale' },
    { name: 'Gumroad', image: '/images/gumroad.png', link: '/vendors/gumroad' },
    { name: 'Steam', image: '/images/steam.png', link: '/vendors/steam' },
    { name: 'Skillshare', image: '/images/skillshare.png', link: '/vendors/skillshare' },
    { name: 'Google', image: '/images/google.png', link: '/vendors/google' },
    { name: 'Envato', image: '/images/envato.png', link: '/vendors/envato' },
    { name: 'Appsbee', image: '/images/appsbee.png', link: '/vendors/appsbee' },
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
