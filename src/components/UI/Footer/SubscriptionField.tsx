import Input from './Input';
import SubscribeBtn from './SubscribeBtn';

const SubscriptionField = () => {
  return (
    <div className="flex flex-col justify-center mt-6 space-y-3 md:space-y-0 md:flex-row">
      <Input />
      <SubscribeBtn />
    </div>
  );
};

export default SubscriptionField;
