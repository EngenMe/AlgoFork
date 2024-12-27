interface Props {
  index: number;
}

const ImageBackground = ({ index }: Props) => {
  if ((index + 1) % 2 === 0) {
    return (
      <>
        <div className="hidden lg:flex top-48 absolute w-full justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full z-0" />
        </div>
        <div className="hidden lg:flex bottom-48 left-36 absolute w-full justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full z-0" />
        </div>
        <div className="hidden lg:flex bottom-48 right-32 absolute w-full justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full z-0" />
        </div>
      </>
    );
  } else if ((index + 1) % 3 === 0) {
    return (
      <div className="hidden lg:flex top-48 absolute w-full justify-center">
        <div className="w-48 h-48 bg-gradient-to-r from-primary to-secondary rounded-full z-0" />
      </div>
    );
  } else {
    return (
      <div className="hidden lg:flex absolute w-full justify-center">
        <div className="w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full z-0" />
      </div>
    );
  }
};
export default ImageBackground;
