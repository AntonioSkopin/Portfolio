// Loop through options with array of values

const InputSelect = (props) => {
    return (
        <input
            type="text"
            name={props.name}
            className="w-max px-6 py-4 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 ring-offset-2"
            placeholder={props.placeholder}
            autocomplete="off" />
    );
};

export default InputSelect;