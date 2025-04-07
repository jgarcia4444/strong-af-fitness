import clsx from "clsx";
import Link from "next/link";

const WorkoutTypeSelection = (props: {show: boolean, level: string}) => {

    const {show, level} = props;

    const workoutTypes = [
        {type: "Gain Mass / Strength"},
        {type: "Lose Weight / Fat"}
    ]

    const renderWorkoutTypes = () => {
        return workoutTypes.map((workout, i) => {
            const {type} = workout;
            return (
                <Link className={clsx(
                    ' w-full p-2 hover:bg-teal-600 transition-all duration-300 hover:text-slate-900 font-bold',
                    {
                        "border-b-2 border-teal-600 rounded-t": i === 0,
                        "rounded-b": i === 1,
                    }
                )} href={`/subscription-payment?level=${level}&workoutType=${type}`} key={`${i}-${type}`} >{type}</Link>
            )
        })
    }
    
    return (
        <div className={clsx(
            'w-full transition-all duration-300',
            {
                 'scale-0': show === false,
                 'scale-100 ': show === true,
            }
        )}>
            <div className="border-2 border-teal-600 rounded-lg flex flex-col">
                {renderWorkoutTypes()}
            </div>
        </div>
    )
}

export default WorkoutTypeSelection;