const SubHeading = (props) => {
    return (
        <span className="flex items-center pb-6">
            <hr className="border-t-4 w-14 border-blue" />
            <p className="pl-4 font-semibold text-xl text-blue">
                {props.text}
            </p>
        </span>
    );
};

export default SubHeading;