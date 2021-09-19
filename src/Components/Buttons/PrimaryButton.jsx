const PrimaryButton = (props) => {
    return (
        <button className="bg-blue bounce-btn text-white font-semibold px-12 py-4 rounded-lg w-max">
            {props.text}
        </button>
    );
};

export default PrimaryButton;