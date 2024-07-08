import React from 'react';

import {ButtonLg} from '../ButtonLg/ButtonLg';
import {Email} from '../Email/Email';

export const Journey = ({heading = 'Journey'}): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-x-hidden w-[431px] h-[782px]">
        <div className="relative w-[634px] h-[1164px] top-[-382px] left-[-202px]">
          <h1>{heading}</h1>
          <div className="absolute w-[406px] h-[765px] top-[391px] left-[215px]">
            <div className="relative w-[375px] h-[736px] top-3.5 left-4 bg-[url(/screen-wrap.png)] bg-[100%_100%]">
              <ButtonLg
                SHAREClassName="!left-[117px]"
                className="!absolute !left-8 !w-[310px] !top-[279px]"
                nextClassName="!left-[271px]"
                property1="button-lg"
                text="SIGN-UP"
              />
              <div className="absolute w-[311px] h-[59px] top-[189px] left-8">
                <Email
                  className="!absolute !left-0 !top-0"
                  property1="form-field-active"
                />
                <Email
                  className="!absolute !left-0 !top-0"
                  property1="form-field-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
