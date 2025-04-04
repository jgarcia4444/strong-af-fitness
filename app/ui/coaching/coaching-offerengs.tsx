import OfferingCard from "./offering-card"

const CoachingOfferings = () => {

    const offeringCards = [
        {level: "Beginner", workoutsPerWeek: 3, includedFeatures: ["General Nutrition"]},
        {level: "Intermediate", workoutsPerWeek: 4, includedFeatures: ["Protein Intake", "Diet Instructions"]},
        {level: "Advanced", workoutsPerWeek: 5, includedFeatures: ["Macro Nutrition Guidance", "Lifestyle Coaching"]}
    ]

    const renderOffereingCards = () => {
        return offeringCards.map((card, i) => {
            return <OfferingCard key={`${i}-${card.level}`} cardInfo={card} />
        })
    }

    return (
        <div className="flex flex-row mt-24 justify-between">
            {renderOffereingCards()}
        </div>
    )
}

export default CoachingOfferings