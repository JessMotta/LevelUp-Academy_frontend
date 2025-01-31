type ProgressBarProps = {
  currPoints: number;
  nextLevelPoints: number;
};

const ProgressBar = ({ currPoints, nextLevelPoints }: ProgressBarProps) => {
  const width = (currPoints / nextLevelPoints) * 100;
  return (
    <div className="w-full">
      {width}
      <div className="w-full h-[4px] mt-1 rounded-[3px] bg-grey">
        <div
          className={`h-[4px] rounded-[3px] bg-green-12`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
