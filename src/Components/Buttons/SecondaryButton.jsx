const SecondaryButton = (props) => {
    return (
        <button className="bg-white bounce-btn text-blue font-semibold px-12 py-4 rounded-xl">
            {props.text}
        </button>
    );
};

export default SecondaryButton;