import Card from './UI/Reviews/Card';
import Title from './UI/Reviews/Title';

const Reviews = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <Title />
        <Card />
      </div>
    </section>
  );
};

export default Reviews;
