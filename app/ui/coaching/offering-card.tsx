'use client'

import { useState } from "react";

import WorkoutTypeSelection from "./workout-type-selection";

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

    const [showWorkoutType, setShowWorkoutType] = useState(false);

    const renderFeatures = () => {
        console.log("Included Features:", includedFeatures);
        return includedFeatures.map((feature, i) => {
            return <div key={`${i}-${feature}`} className="font-bold">{feature}</div>
        })
    }
    const presentSelectionButton = () => {
        if (showWorkoutType === false) {
            return (
                <button onClick={() => setShowWorkoutType(true)} className="bg-linear-to-b from-slate-900 to-teal-600 w-full text-center pt-4 pb-2 rounded-b-2xl hover:to-teal-500 transition-all duration-500 font-sans text-xl font-black hover:cursor-pointer hover:scale-105 text-slate-900">Select</button>
            )
        } else {
            return (
                <div className="w-full flex flex-row justify-end mb-2">
                    <div onClick={() => setShowWorkoutType(false)} className="bg-red-400 rounded-full w-8 h-8 flex items-center justify-center font-bold hover:cursor-pointer transition-all duration-300 hover:scale-105">
                        X
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col w-64">
            <div className="w-full">
                <h4 className="text-center text-4xl font-bold bg-linear-to-b from-slate-900 to-slate-800 pt-6 pb-4 rounded-t-2xl">{level}</h4>
            </div>
            <div className="w-full flex flex-col bg-linear-to-b from-slate-600 to-slate-900 h-40 p-4">
                <div className="">
                    Workouts Per Week: <span className="font-bold">{workoutsPerWeek}</span>
                </div>
                <div className="flex flex-col">
                    {renderFeatures()}
                </div>
            </div>
            <div className="w-full mt-2 relative">
                {presentSelectionButton()}
                <WorkoutTypeSelection level={level} show={showWorkoutType} />
            </div>
        </div>
    )
}

export default OfferingCard;