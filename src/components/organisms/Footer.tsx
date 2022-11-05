import React, { useState } from "react";
import "../../assets/scss/main.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";


function Footer() {
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setCheck(e.target.checked);
  };

  return (
    <footer className="footer">
      {window.innerWidth > 753 ? <hr /> : null}
      <div className="bg-white sx:grid sx:grid-row-4">
        <div className="footer__give">
          <input
            className="footer__give-input"
            placeholder="Give an email, get the newsletter."
          />
          <Arrow className="footer__give-arrow" />
          <div className="absolute flex flex-start mt-16 sx:hidden">
            <br />
            <input
              type="checkbox"
              value="check"
              onChange={handleChange}
              checked={check}
            />{" "}
            <p className="font-medium mb-1 ml-1">
              I agree to the website's terms and conditions
            </p>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-colum">
            <div>
              <ul className="text-dark-gray sm:font-normal sm:text-[16px] hover:text-black">
                <li className="mb-4">
                  <a href=".">CONTACT</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-dark-gray sm:font-normal sm:text-[16px] hover:text-black">
                <li className="mb-4">
                  <a href=".">TERMS OF SERVICES</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-dark-gray sm:font-normal sm:text-[16px] hover:text-black">
                <li className="mb-4">
                  <a href=".">SHIPPING AND RETURNS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__shelly">
          <div className="flex mt-2 mb-12 space-x-6 sm:mr-0 sm:space-x-[30px] sm:mt-[30px] sm:justify-center sx:mr-14">
            <span className="relative flex flex-start sx:hidden">
              {" "}
              Follow us
              {"   "}
              <span className="px-2 sx:hidden">_____</span>
            </span>
            <a href="." className="text-dark-gray md:text-xl xl:text-xxl hover:text-black">
              <Linkedin />
            </a>
            <a
              href="."
              className="text-dark-gray md:text-xl xl:text-xxl  hover:text-black"
            >
              <Facebook />
            </a>
            <a
              href="."
              className="text-dark-gray sm:font-normal sm:text-[16px]  hover:text-black"
            >
             <Instagram /> 
            </a>
            <a
              href="."
              className="text-dark-gray sm:font-normal sm:text-[16px]  hover:text-black"
            >
             <Twitter /> 
            </a>
          </div>
          <span className="text-sm text-dark-gray sm:font-normal sm:text-[16px] sm:mb-0 mb-4 sx:flex-start">
            <a href="." className="text-dark-gray sm:font-normal sm:text-[16px] hover:underline">
              © 2021 Shelly
            </a>
            . Terms of use{" "}
            <a href="." className="text-dark-gray sm:font-normal sm:text-[16px] sm:mx-[1px]">
              and
            </a>{" "}
            privacy policy.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
