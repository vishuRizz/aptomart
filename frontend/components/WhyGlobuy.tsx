const WhyGlobuy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6"></h1>
      <h1 className="text-3xl font-bold mb-6"></h1>
      
      <h1 className="text-3xl font-bold mb-6">Why Globuy?</h1>
      <p className="text-center max-w-2xl mb-10">
        A global ecommerce platform that partners with other ecommerce and manufacturers to enable shopping from anywhere, even in restricted countries, with secure, automated transactions and real-time tracking.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mb-10 w-full max-w-6xl">
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/1.png"
                  alt="Barcode Scanning"
                  width={289.84}
                  height={246.72}
                  className="h-48 rounded-md"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/images/2.png"
                  alt="Container Ship"
                  width={153.33}
                  height={205.28}
                  className="h-48 rounded-md"
                />
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/images/3.png"
                alt="Delivery Illustration"
                width={244.67}
                height={186.45}
                className="h-48 rounded-md mb-4"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-3 text-left">
          <div className="flex items-center mb-4">
    <span className="text-green-500 text-2xl mr-4">✓</span>
    <p className="text-3xl">Decentralised transactions</p>
</div>
<div className="flex items-center mb-4">
    <span className="text-green-500 text-2xl mr-4">✓</span>
    <p className="text-3xl">Enhanced Security</p>
</div>
<div className="flex items-center mb-4">
    <span className="text-green-500 text-2xl mr-4">✓</span>
    <p className="text-3xl">Transparency</p>
</div>
<div className="flex items-center mb-4">
    <span className="text-green-500 text-2xl mr-4">✓</span>
    <p className="text-3xl">Regulatory Compliance</p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGlobuy;
