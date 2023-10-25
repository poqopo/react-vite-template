import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const curPage = useSelector((state: any) => state.page.page);

  return (
    <div className="fixed bottom-0 backdrop-blur w-screen h-[84px] px-5 border-t">
      asdfdsa
    </div>
  );
}

export default Header;
