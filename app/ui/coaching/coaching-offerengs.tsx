import OfferingCard from "./offering-card"

const CoachingOfferings = () => {

    const offeringCards = [
        {level: "Beginner", workoutsPerWeek: 3, includedFeatures: []},
        {level: "Intermediate", workoutsPerWeek: 4, includedfeatures: []},
        {level: "Advanced", workoutsPerWeek: 5, includedFeatures: []}
    ]

    const renderOffereingCards = () => {
        return offeringCards.map((card, i) => <OfferingCard key={`${i}-${card.level}`} cardInfo={card} />)
    }

    return (
        <div className="flex flex-row mt-24 justify-between">
            {renderOffereingCards()}
        </div>
    )
}

export default CoachingOfferings