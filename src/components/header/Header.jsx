import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="logo w-[10%]">
        <Image
          src="https://www.vadi.az/frontend/web/uploads//images/news/Trendyolonline.png"
          alt="Trendyol Logo"
          width={1200}
          height={405}
        />
      </div>

      <div className="nav-links">
        <ul className="flex space-x-6">
          <li><a href="" className="font-bold text-gray-800 hover:text-orange-500">HOME</a></li>
          <li><a href="" className="font-bold text-gray-800 hover:text-orange-500">SHOP</a></li>
          <li><a href="" className="font-bold text-gray-800 hover:text-orange-500">ABOUT</a></li>
          <li><a href="" className="font-bold text-gray-800 hover:text-orange-500">CONTACT</a></li>
        </ul>
      </div>

      <div className="search flex items-center space-x-2">
        <input  
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border border-gray-300"
        />
        <button className="px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          Search
        </button>
      </div>
    </header>
  );
}
