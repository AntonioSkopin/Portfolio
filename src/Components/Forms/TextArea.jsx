const TextArea = (props) => {
    return (
        <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder={props.placeholder}
            className="border-b-2 border-white bg-transparent text-white focus:outline-none pb-2 my-6"
        ></textarea>
    );
};

export default TextArea;