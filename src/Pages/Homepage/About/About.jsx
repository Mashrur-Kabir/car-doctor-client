import person from '../../../assets/images/person.jpg'
import parts from '../../../assets/images/parts.jpg'

const About = () => {
    return (
      <section className="my-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-6 md:px-16 py-12 bg-white">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="relative">
            {/* Main Image */}
            <img
              src={person}
              alt="Mechanic"
              className="rounded-lg shadow-lg"
            />
            {/* Overlay Image */}
            <img
              src={parts}
              alt="Car Parts"
              className="absolute -bottom-10 -right-8 w-1/2 border-8 border-white rounded-lg shadow-xl"
            />
          </div>
        </div>
  
        {/* Right Section */}
        <div className="md:mt-10 lg:w-1/2">
          <h3 className="text-green-600 font-bold text-xl mb-2 font-mont">About Us</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-mont">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg font-cant">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            The majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.
          </p>
          <button className="bg-lime-500 text-black px-6 py-3 rounded-lg font-medium shadow hover:text-white hover:bg-black transition duration-200">
            Get More Info
          </button>
        </div>
      </section>
    );
  };
  
  export default About;
  