import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "button-lg";
  className: any;
  SHAREClassName: any;
  text: string;
  nextClassName: any;
}

export const ButtonLg = ({
  property1,
  className,
  SHAREClassName,
  text = "TAKE ME SOMEWHERE",
  nextClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[311px] h-[46px] shadow-drop-shadow-hard bg-[url(/rectangle-4.svg)] bg-[100%_100%] ${className}`}
    >
      <div
        className={`absolute top-[17px] left-[52px] font-primary-black font-[number:var(--primary-black-font-weight)] text-[#eef310] text-[length:var(--primary-black-font-size)] text-center tracking-[var(--primary-black-letter-spacing)] leading-[var(--primary-black-line-height)] whitespace-nowrap [font-style:var(--primary-black-font-style)] ${SHAREClassName}`}
      >
        {text}
      </div>
      <img className={`absolute w-[30px] h-[30px] top-2 left-[272px] ${nextClassName}`} alt="Next" src="next.png" />
    </div>
  );
};

ButtonLg.propTypes = {
  property1: PropTypes.oneOf(["button-lg"]),
  text: PropTypes.string,
};
