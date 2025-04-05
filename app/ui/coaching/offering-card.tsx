interface CardInfoProps {
    level: string;
    workoutsPerWeek: number;
    includedFeatures: string[],
  }

// const OfferingCard: React.FC<CardInfoProps> = ({level, workoutsPerWeek, includedFeatures }) => {
const OfferingCard = (
    props: {cardInfo: CardInfoProps}
) => {

    const {cardInfo} = props;
    const {level, workoutsPerWeek, includedFeatures} = cardInfo;

    const renderFeatures = () => {
        console.log("Included Features:", includedFeatures);
        return includedFeatures.map((feature, i) => {
            return <div key={`${i}-${feature}`} className="font-bold">{feature}</div>
        })
    }

    return (
        <div className="flex flex-col w-64">
            <div className="w-full">
                <h4 className="text-center text-4xl font-bold bg-linear-to-b from-slate-900 to-slate-800 pt-6 pb-4 rounded-t-2xl">{level}</h4>
            </div>
            <div className="w-full flex flex-col rounded-b-2xl bg-linear-to-b from-slate-600 to-slate-900 h-40 p-4">
                <div className="">
                    Workouts Per Week: <span className="font-bold">{workoutsPerWeek}</span>
                </div>
                <div className="flex flex-col">
                    {renderFeatures()}
                </div>
            </div>
        </div>
    )
}

export default OfferingCard;