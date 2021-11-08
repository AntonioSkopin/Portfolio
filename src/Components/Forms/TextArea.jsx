const TextArea = (props) => {
    return (
        <textarea
            name={props.name}
            id=""
            cols="30"
            rows="4"
            placeholder={props.placeholder}
            className="border-b-2 border-white bg-transparent text-white focus:outline-none pb-2 my-6"
            required
        ></textarea>
    );
};

export default TextArea;