import Card from './UI/Faqs/Card';
import Title from './UI/Faqs/Title';

const cardItems = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet consectetur',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eveniet, vitae officia rem delectus amet. Ut aperiam velit exercitationem? Ipsam, inventore natus. Minima earum obcaecati dolorum veniam quia mollitia, ullam porro delectus iusto provident distinctio aliquam debitis vero, pariatur suscipit?',
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet consectetur',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eveniet, vitae officia rem delectus amet. Ut aperiam velit exercitationem? Ipsam, inventore natus. Minima earum obcaecati dolorum veniam quia mollitia, ullam porro delectus iusto provident distinctio aliquam debitis vero, pariatur suscipit?',
  },
];

const Faqs = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <Title />
        <Card cardItems={cardItems} />
      </div>
    </section>
  );
};

export default Faqs;
