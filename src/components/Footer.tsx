// src/components/Footer.tsx
const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p className="text-sm">Designed with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
  
  export default Footer;
  