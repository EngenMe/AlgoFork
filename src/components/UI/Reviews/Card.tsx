import Body from './Body';
import Buttons from './Buttons';
import PersonPic from './PersonPic';

const Card = () => {
  return (
    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
      <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        <PersonPic />
        <Body />
        <Buttons />
      </div>
    </main>
  );
};

export default Card;
