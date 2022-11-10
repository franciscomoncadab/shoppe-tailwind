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
      <div className="bg-white gap-y-[42px] sm:gap-y-0 sx:grid sx:grid-row-4">
        <div className="footer__give">
          <input
            className="footer__give-input"
            placeholder="Give an email, get the newsletter."
          />
          <Arrow className="footer__give-arrow" />
          <div className="absolute flex flex-start mt-[57px] sx:hidden">
            <br />
            <input
              type="checkbox"
              value="check"
              onChange={handleChange}
              checked={check}
            />{" "}
            <p className="font-normal text-[12px] mb-1 ml-1">
              I agree to the website's terms and conditions
            </p>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-colum">
            <div>
              <ul className="text-dark-gray font-normal text-[12px] sm:text-[16px] hover:text-black">
                <li className="">
                  <a href=".">CONTACT</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-dark-gray font-normal text-[12px] sm:text-[16px] hover:text-black">
                <li className="mt-[2px]">
                  <a href=".">TERMS OF SERVICES</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-dark-gray font-normal text-[12px] sm:text-[16px] hover:text-black">
                <li className="mt-[2px] mb-[28px] sx:mb-0">
                  <a href=".">SHIPPING AND RETURNS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__shelly">
          <div className="flex mt-2 mb-[36px] sx:space-x-[25px] gap-x-2 sm:mr-0 sm:gap-x-0 sm:space-x-[30px] sm:mt-[40px] sm:mb-0 sx:justify-center sx:mr-14">
            <span className="relative flex flex-start font-normal text-[12px] sx:hidden">
              {" "}
              Follow us
              {"   "}
              <span className="ml-[16px] sx:hidden">_______</span>
            </span>
            <a href=".">
              <Linkedin className="hidden sx:block fill-dark-gray hover:fill-black" />
            </a>
            <a
              href="."
            >
              <Facebook className="fill-dark-gray hover:fill-black w-[6.67px] h-[12px] mt-[6px] sx:mt-0 sx:w-auto sx:h-auto"/>
            </a>
            <a
              href="."
            >
             <Instagram className="fill-dark-gray hover:fill-black w-[12px] h-[12px] mt-[6px] sx:mt-0 sx:w-auto sx:h-auto"/> 
            </a>
            <a
              href="."
            >
             <Twitter className="fill-dark-gray hover:fill-black w-[14.12px] h-[12px] mt-[6px] sx:mt-0 sx:w-auto sx:h-auto"/> 
            </a>
          </div>
          <span className="text-[12px] text-dark-gray sm:mt-[47px] sm:space-x-[3px] font-normal sm:text-[16px] sm:mb-0 mb-4 sx:flex-start">
            <a href="." className="text-dark-gray sm:font-normal sm:text-[16px] hover:underline">
              © 2021 Shelly
            </a>
            . Terms of use{" "}
            <a href="." className="text-dark-gray sm:font-normal sm:text-[16px]">
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
