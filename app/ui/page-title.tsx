interface TitleObject {
    title: string,
    subTitle: string,
}

const PageTitle = (props: {titleObject: TitleObject}) => {

    const {title, subTitle} = props.titleObject; 

    return (
        <div className="w-full flex flex-col item-center gap-4">
            <h1 className="text-8xl font-serif">{title}</h1>
            <h3 className="text-2xl font-sans">{subTitle}</h3>
        </div>
    )
}

export default PageTitle;