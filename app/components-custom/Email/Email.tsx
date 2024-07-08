import PropTypes from 'prop-types';

interface Props {
  property1: 'form-field-active' | 'form-field-default';
  className: any;
}

export const Email = ({property1, className}: Props): JSX.Element => {
  return (
    <div className={`w-[311px] h-[59px] ${className}`}>
      <div className="border border-solid border-black w-[313px] -left-px -top-px shadow-drop-shadow-soft h-[61px] rounded-[9px] bg-white relative">
        {property1 === 'form-field-default' && (
          <img
            className="absolute w-0.5 h-[22px] top-[18px] left-24"
            alt="Line"
            src="line-4.svg"
          />
        )}

        <div
          className={`[font-family:'Hind-Light',Helvetica] left-[55px] tracking-[0] text-sm text-[#201f2280] font-light whitespace-nowrap absolute ${
            property1 === 'form-field-active' ? 'top-[9px]' : 'top-[18px]'
          } ${
            property1 === 'form-field-active'
              ? 'leading-[normal]'
              : 'leading-[22px]'
          }`}
        >
          EMAIL
        </div>
        <img
          className="w-[18px] left-[18px] top-5 h-[18px] absolute"
          alt="Icon at"
          src={property1 === 'form-field-default' ? 'icon-at.png' : 'image.png'}
        />
      </div>
    </div>
  );
};

Email.propTypes = {
  property1: PropTypes.oneOf(['form-field-active', 'form-field-default']),
};
