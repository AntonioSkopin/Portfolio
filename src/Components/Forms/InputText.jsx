const InputText = (props) => {
    return (
        <input
            type="text"
            name={props.name}
            className="border-b-2 border-white bg-transparent text-white focus:outline-none pb-2 my-6"
            placeholder={props.placeholder}
            autocomplete="off"
            required/>
    );
};

export default InputText;