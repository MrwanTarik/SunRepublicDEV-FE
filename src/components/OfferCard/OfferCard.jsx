import classes from './styles.module.scss';
import classNames from 'classnames';
const OfferCard = ({ item: { image, title, area, price } }) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div
        className={classNames(
          classes.offerCard,
          'rounded-[30px] bg-[#343434] shadow-lg overflow-hidden'
        )}
      >
        <div className="h-[256px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full  object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"
          />
        </div>
        <div className="">
          <h2 className="text-white !text-[18px] leading-[14px] font-extrabold uppercase py-[20px] px-[20px] lg:px-[25px] ">
            {title}
          </h2>
          <hr className="bg-white opacity-[0.4] h-[1px]" />
          <div className="flex">
            <p className="text-[14px] border-r-[1px] border-[#D9D9D9] border-opacity-[0.4] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
              {area}
            </p>
            <p className="text-[14px] flex-1 leading-[14px] py-[20px] px-[20px] lg:px-[25px] text-white">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
