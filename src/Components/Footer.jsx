const Footer = () => {
  return (
    <footer className="bg-[#fff] py-6 m-3 flex gap-3 flex-col items-center">
      <div className="flex flex-wrap gap-3 max-w-4xl mx-auto text-center space-y-2">
        <p>Email: support@yourcompany.com |</p>
        <p>Phone: +91 12345 67890 |</p>
        <p>Address: 123 Food Street, Hyderabad, India</p>
      </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
