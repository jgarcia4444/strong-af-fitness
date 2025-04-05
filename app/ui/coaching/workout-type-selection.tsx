import clsx from "clsx";

const WorkoutTypeSelection = (props: {show: boolean}) => {

    const {show} = props;
    
    return (
        <div className={clsx(
            'w-full transition-all duration-300',
            {
                 'scale-0': show === false,
                 'scale-100 ': show === true,
            }
        )}>
            workout type selection
        </div>
    )
}

export default WorkoutTypeSelection;