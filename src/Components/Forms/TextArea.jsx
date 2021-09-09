const TextArea = (props) => {
    return (
        <textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder={props.placeholder}
            className="w-max px-6 py-4 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 ring-offset-2"
        ></textarea>
    );
};

export default TextArea;