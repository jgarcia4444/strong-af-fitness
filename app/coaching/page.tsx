import CoachingOfferings from "../ui/coaching/coaching-offerengs";
import PageTitle from "../ui/page-title";

const Coaching = () => {

    let titleObject = {
        title: "Coaching",
        subTitle: "We All Started Somewhere!"
    }

    return (
        <div className="w-full h-screen py-24">
            <PageTitle titleObject={titleObject} />
            <CoachingOfferings />
        </div>
    )
}

export default Coaching;