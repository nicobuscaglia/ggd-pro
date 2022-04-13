const GIF_PATH =
  "https://ggd-static-resource-bucket-dev.s3.us-east-2.amazonaws.com/images/animatedG.gif";

const GGDLoader = ({ width = 100, height = 100 }) => {
  return (
    <>
      <img src={GIF_PATH} width={width} height={height} alt="Loading" />
    </>
  );
};

export { GGDLoader };
