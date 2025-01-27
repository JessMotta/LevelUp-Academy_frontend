type ProgressBarProps = {
    percent: number;
}
const ProgressBar = (percent:ProgressBarProps) => {
    const progress = percent.percent;

    return(
        <div className="w-[205px]">
            <div className="w-100 h-[3px] mt-1 rounded-[3px] bg-grey">
                <div className="h-[3px] rounded-[3px] bg-green-12" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
}

export default ProgressBar;