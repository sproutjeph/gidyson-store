const Footer = () => {
  return (
    <footer className=" bg-[#222] py-4 px-4 text-xs capitalize tracking-wider text-white">
      <div className="flex items-center justify-center gap-14 ">
        <a href="#">help center</a>
        <a href="#">contact us</a>
        <a href="#">Terms & conditions</a>
      </div>
      {/* <div className="flex items-center justify-center mt-3 mb-3 gap-14">
        <a href="#">report A product</a>
      </div> */}
      <div className="flex items-center justify-center my-3 gap-14">
        <a href="#">ship your package anywhere in nigeria</a>
      </div>
      <hr className="mb-3 text-gray-500" />
      <a
        className="flex items-center justify-center gap-2 text-primary"
        href="https://mbah-jephthah.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <h4>Jeph</h4> +2347065406165
      </a>
    </footer>
  );
};

export default Footer;
