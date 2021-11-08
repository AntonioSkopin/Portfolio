// Styles
import "./Styles/button.css";

const OrangeButton = props => {
    return (
        <div>
            {
                props.type === "button" ? 
                <button type="submit" className="my-12 learn-more" style={{ width: props.width }}>
                    <span className="block">
                        <span className="icon arrow"></span>
                    </span>
                    <span className={`button-text ${props.textColor}`}>
                        {props.text}
                    </span>
                </button>
                :
                <a href={props.location} className="my-12 learn-more" style={{ width: props.width }}>
                    <span className="block">
                        <span className="icon arrow"></span>
                    </span>
                    <span className={`button-text ${props.textColor}`}>
                        {props.text}
                    </span>
                </a>
            }
        </div>
    );
};

export default OrangeButton;