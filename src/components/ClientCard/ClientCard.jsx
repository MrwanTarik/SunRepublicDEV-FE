import classes from './styles.module.scss';
import classNames from 'classnames';
const ClientCard = ({ item: { image, title, content, num } }) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-[30px] border-[1px] border-solid border-white border-opacity-[0.4] bg-transparent relative text-[16px] leading-[23px] text-white">
      <div className="absolute top-[20px] right-[20px] ">{num}</div>
      <div className="container !pt-[32px] !pb-[40px]">
        <img className="mx-auto pb-[20px]" src={image} alt="title" />
        <h2 className="text-[#F26E21] text-center text-[20px] font-bold leading-[28px] pb-[20px]">
          {title}
        </h2>
        <p className="text-white mx-auto max-w-[250px] text-center text-[16px] font-normal leading-[23px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ClientCard;
