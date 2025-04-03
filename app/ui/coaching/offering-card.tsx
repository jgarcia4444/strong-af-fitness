
const OfferingCard = ({cardInfo}) => {

    const {level, workoutsPerWeek, includedFeatures} = cardInfo;

    return (
        <div className="flex flex-col w-64">
            <div className="w-full py-4 bg-slate-600 rounded-t-2xl">
                <p className="text-center text-4xl font-bold">{level}</p>
            </div>
        </div>
    )
}

export default OfferingCard;