import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import odonto from './assets/odonto.svg';
import imagenes from './assets/g1.jpg';
import odonot from './assets/Odonot.jpg';
import odont from './assets/g2.jpg';
import doct from './assets/g3.png';
import doct1 from './assets/reg.png';
import doct2 from './assets/regis.png';
import doctor2 from './assets/doctor.jpg';
import doctor3 from './assets/juan.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [imagenes, odonot,odont];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); // Cambia de imagen cada 7 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-100 text-gray-700 m-0">
      {/* Navbar */}
      <nav className="bg-[#266AA6] text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <img src={odonto} alt="NODO" className="w-16 h-12"></img>
          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-6">
            {["Inicio", "Expediente", "Servicios", "Testimonios", "Contacto"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.replace(/ /g, "").toLowerCase()}`}
                    className="hover:text-gray-300 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[#1e5a85] transition duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-[#266AA6] p-4 rounded-md">
            {["Inicio", "Expediente", "Servicios", "Testimonios", "Contacto"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.replace(/ /g, "").toLowerCase()}`}
                    className="hover:text-gray-300 transition duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative w-full h-screen flex items-center justify-center text-center text-white"
      >
        {/* Background Images */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Text */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Expediente Odontológico Digital
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Accede fácilmente a tu historial dental con innovación y tecnología.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-[#266AA6] font-semibold rounded-full hover:bg-gray-200 transition duration-300">
            Iniciar Sesión
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="expediente" className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#266AA6]">¿Qué es un Expediente Odontológico Digital?</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          El expediente odontológico digital es una herramienta moderna que permite almacenar, gestionar y acceder al historial médico de los pacientes de manera rápida y segura, mejorando la eficiencia en los tratamientos dentales.
        </p>
        <div className="mt-12">
  <h3 className="text-2xl font-semibold text-[#266AA6]">¿Cómo funciona?</h3>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-4">
    {/* Paso 1 */}
    <div className="flex flex-col items-center md:flex-row md:items-center">
      <div className=" flex flex-col justify-center items-center text-center md:order-1 md:w-1/2 " >
        <div className="text-9xl text-[#266AA6]">1</div>
        <p className="mt-3 text-3xl" >Registra los datos del paciente.</p>
      </div>
      <div className="mt-4 md:mt-0 md:order-2 md:w-1/2 flex justify-center">
        <img
          src={doct1}
          alt="Registra datos"
          className="md:w-4/12 h-auto rounded-lg sm:w-1/2 "
        />
      </div>
    </div>

    {/* Paso 2 */}
    <div className="flex flex-col items-center md:flex-row md:items-center">
  {/* Texto */}
  <div className="text-center order-1 md:order-2 md:w-1/2">
    <div className="text-9xl text-[#266AA6]">2</div>
    <p className="mt-3 text-3xl">Actualiza el historial médico.</p>
  </div>
  {/* Imagen */}
  <div className="mt-4 md:mt-0 order-2 md:order-1 md:w-1/2 flex justify-center items-center">
    <img
      src={doct2}
      alt="Actualiza historial"
      className="md:w-4/12 h-auto rounded-lg sm:w-1/2"
    />
  </div>
</div>

    {/* Paso 3 */}
    <div className="flex flex-col items-center md:flex-row md:items-center">
      <div className="text-center md:order-1 md:w-1/2">
        <div className="text-9xl text-[#266AA6]">3</div>
        <p className="mt-3 text-3xl">Accede a los datos en cualquier momento.</p>
      </div>
      <div className="mt-4 md:mt-0 md:order-2 md:w-1/2 flex justify-center items-center" >
        <img
          src={doct}
          alt="Accede datos"
          className="md:w-4/12 h-auto rounded-lg sm:w-1/2"
        />
      </div>
    </div>
  </div>
</div>
      </section>

      <section id="servicios" className="py-20 px-8 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold text-[#266AA6]">
    Servicios Odontológicos Disponibles
  </h2>
  <div className="mt-8 grid gap-8 md:grid-cols-3">
    <div className="card" data-content="Consultas Dentales">
      <h3 className="text-xl font-semibold text-[#266AA6]"></h3>
      <p className="mt-2">
        Consulta tu historial y agenda tus citas de forma digital.
      </p>
    </div>
    <div className="card" data-content="Ortodoncia">
      <h3 className="text-xl font-semibold text-[#266AA6]"></h3>
      <p className="mt-2">Accede a los registros de tus tratamientos de ortodoncia.</p>
    </div>
    <div className="card" data-content="Implantes Dentales">
      <h3 className="text-xl font-semibold text-[#266AA6]"></h3>
      <p className="mt-2">
        Guarda información detallada sobre tus procedimientos de implantes.
      </p>
    </div>
  </div>
</section>
      {/* Testimonials Section */}
      <section id="testimonios" className="w-full max-w-4xl bg-neutral-300 rounded-3xl text-neutral-300 p-8 flex flex-col items-center justify-center gap-6 hover:bg-gray-400 hover:shadow-2xl hover:shadow-sky-400 transition-shadow mx-auto">
        <h2 className="text-3xl font-bold text-[#266AA6]">Testimonios</h2>
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {/* Testimonio 1 */}
          <div className="bg-[#266AA6] p-6 rounded-2xl flex items-center gap-4">
            <img src={doctor2} alt="Foto de Marío López" className="w-16 h-16 rounded-full object-cover" />
            <div className="text-left">
              <p className="italic">Excelente servicio, fácil acceso al expediente digital de mis pacientes.</p>
              <p className="mt-4 font-bold">- Marío López</p>
            </div>
          </div>
          {/* Testimonio 2 */}
          <div className=" bg-[#266AA6] p-6 rounded-2xl flex items-center gap-4">
            <img src={doctor3} alt="Foto de Juan Pérez" className="w-16 h-16 rounded-full object-cover" />
            <div className="text-left">
              <p className="italic">La tecnología ha mejorado significativamente mi experiencia.</p>
              <p className="mt-4 font-bold">- Juan Pérez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#266AA6]">Contáctanos</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#266AA6]"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#266AA6]"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#266AA6]"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#266AA6] text-white p-3 rounded-lg hover:bg-[#1e5a85] transition duration-300"
          >
            Enviar
          </button>
        </form>
      </section>

      <footer className="bg-[#266AA6] text-white text-center py-8">
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaFacebook className="h-6 w-6" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaTwitter className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>

      {/* "Elaborado por" Link */}
      <div className="text-sm text-gray-300">
        <p>
          <a
            href="https://www.ejemplo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            Elaborado por: Facultad de Ingenieria en Sistemas
          </a>
        </p>
      </div>

      <p className="mt-4">&copy; 2025 Expediente Odontológico Digital UNAH. Todos los derechos reservados.</p>
    </footer>

    </div>
  );
};

export default Landing;
