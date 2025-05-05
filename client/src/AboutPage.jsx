
const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Introduction Section */}
      <section className="relative h-screen bg-gradient-to-r from-orange-500 to-red-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">About Phoenix</h1>
        <p className="text-xl mb-8 max-w-3xl text-center">
          At Phoenix, we are dedicated to providing top-quality products that help you transform your lifestyle. Our mission is to offer a curated collection of items that inspire, uplift, and rejuvenate.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="max-w-4xl mx-auto text-lg">
          <p className="text-gray-700 mb-6">
            Founded with the idea of renewal and transformation, Phoenix was created to offer products that spark joy and positive change. Whether you're looking for something to brighten your space, energize your routine, or simply add a bit of beauty to your life, we've got you covered.
          </p>
          <p className="text-gray-700">
            Our team works tirelessly to curate the best selection, ensuring each product we offer is of the highest quality and brings something special to the table. We believe in sustainability, quality craftsmanship, and timeless design.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="flex justify-center gap-12">
          <div className="w-1/3 text-center">
            <h3 className="text-xl font-semibold mb-4">Quality</h3>
            <p className="text-gray-700">We prioritize quality in everything we do, ensuring that every product meets the highest standards.</p>
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-gray-700">Our commitment to the environment drives us to source products that are eco-friendly and sustainably produced.</p>
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
            <p className="text-gray-700">We put our customers first, ensuring a seamless shopping experience and offering products that cater to your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
