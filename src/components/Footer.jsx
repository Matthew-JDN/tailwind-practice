const Footer = () => {
  return (
    <div className="flex justify-between bg-green-800">
      <div className="text-green-500 p-2 ">
        &lt; this is not a real site &gt;
      </div>
      <div className="text-green-500 p-2">
        Made with 💀 and{" "}
        <a href="https://tailwindcss.com" className="underline font-medium">
          tailwindCSS
        </a>
      </div>
      <div className="text-green-500 p-2">
        Created by{" "}
        <a
          href="https://www.facebook.com/matthew.peralta.80039"
          className="underline font-medium"
        >
          Matthew Peralta
        </a>
      </div>
    </div>
  );
};

export default Footer;
