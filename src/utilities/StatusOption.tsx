import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faEye} from "@fortawesome/free-solid-svg-icons";
import React, {useRef, useState, useEffect} from "react";
import "../styles/css/StatusOption.css"
import {Eye, Karma, Whitelist} from "../asset/icons";


interface StatusOptionProps {
    onActivate: () => void;
    onBlacklist: () => void;
    onView: () => void;

}

const StatusOption: React.FC < StatusOptionProps > = ({onActivate, onBlacklist, onView}) => {
    const [isCardVisible, setIsCardVisible] = useState(false);
    const containerRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
            if (containerRef.current && ! containerRef.current.contains(event.target as Node)) {
                setIsCardVisible(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return() => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [containerRef]);

    const handleButtonClick = () => {
        setIsCardVisible(!isCardVisible);
    };

    return (
        <div ref={containerRef}
            className="status-option">
            <button className="status-option-button"
                onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faEllipsisV}/>
            </button>
            {
            isCardVisible && (
                <div className="status-option-card">
                    <ul className="status-option-card-body">
                        <li className="status-option-card-option"
                            onClick={onView}>
                            <Eye/>
                            View Details
                        </li>
                        <li className="status-option-card-option"
                            onClick={onBlacklist}>
                            <Karma/>
                            Blacklist User
                        </li>
                        <li className="status-option-card-option"
                            onClick={onActivate}>
                            <Whitelist/>
                            Activate User
                        </li>
                    </ul>
                </div>
            )
        } </div>
    );
};

export default StatusOption;
