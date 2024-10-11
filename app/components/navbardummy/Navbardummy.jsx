import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';

const Alison = () => {
  return (
    <div className="w-full fixed bg-white">
      <nav className="flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg"
            alt="Logo"
            className="h-10"
          />
          <p className="text-xs transform -translate-y-4">EMPOWER YOURSELF</p>
        </div>

        {/* Search Field */}
        <div className="flex items-center">
          <input
            type="text"
            className="border border-black rounded-l px-4 py-1 w-52"
            placeholder="Search..."
          />
          <div className="bg-gray-600 p-2 rounded-r">
            <SearchIcon className="text-white" />
          </div>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li className="relative group">
            <a href="#second" className="flex items-center">
              Explore Courses <ArrowDropDownIcon className="ml-1" />
            </a>
            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 space-y-2 mt-2">
              <li><a href="#item1" className="block px-4">Item 1</a></li>
              <li><a href="#item2" className="block px-4">Item 2</a></li>
              <li><a href="#item3" className="block px-4">Item 3</a></li>
              <li><a href="#item4" className="block px-4">Item 4</a></li>
            </ul>
          </li>

          <li className="relative group">
            <a href="#explore" className="flex items-center">
              Discover Career <ArrowDropDownIcon className="ml-1" />
            </a>
            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 space-y-2 mt-2">
              <li><a href="#diploma1" className="block px-4">Diploma 1</a></li>
              <li><a href="#diploma2" className="block px-4">Diploma 2</a></li>
            </ul>
          </li>
        </ul>

        {/* Right section with icons and buttons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="border-l border-black h-8 mr-4" />
            <p className="bg-blue-100 text-xs p-2 rounded">FREE LMS</p>
            <AttachMoneyTwoToneIcon className="text-orange-500 ml-4" />
            <div className="border-l border-black h-8 ml-4" />
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-green-700 font-bold">Log in</a>
            <a href="#" className="bg-green-700 text-white px-4 py-2 rounded">Sign up</a>
          </div>

          <LanguageTwoToneIcon className="ml-8" />
        </div>
      </nav>
    </div>
  );
};

export default Alison;
