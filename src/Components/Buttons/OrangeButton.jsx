// Styles
import "./Styles/button.css";

const OrangeButton = props => {
    return (
        <button className="my-12 learn-more" style={{ width: props.width }}>
            <span className="block">
                <span className="icon arrow"></span>
            </span>
            <span className={`button-text ${props.textColor}`}>
                {props.text}
            </span>
        </button>
    );
};

export default OrangeButton;