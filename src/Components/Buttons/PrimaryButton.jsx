const PrimaryButton = (props) => {
    return (
        <button className="bg-blue bounce-btn text-white font-semibold px-12 py-4 rounded-xl">
            {props.text}
        </button>
    );
};

export default PrimaryButton;