import Link from "next/link";

import { wrapper, link } from "./header.module.scss";

const Header = () => {
  return (
    <header className={wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <ul className="row ml-auto mb-0">
              <li className="col-4 mr-3">
                <Link href="/">
                  <a className={link} title="home">
                    Home
                  </a>
                </Link>
              </li>
              <li className="col-4">
                <Link href="/about">
                  <a className={link} title="about">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
