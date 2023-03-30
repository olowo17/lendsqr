import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../styles/css/Icons.css"
import {
    faBriefcase,
    faHouseChimney,
    faCaretDown,
    faUsers,
    faUserGroup,
    faSackDollar,
    faHandshake,
    faPiggyBank,
    faHandHoldingDollar,
    faUserXmark,
    faUserCheck,
    faCoins,
    faHouseChimneyWindow,
    faTablet,
    faFan,
    faUserGear,
    faScroll,
    faChartColumn,
    faSliders,
    faLandmark,
    faRectangleList,
    faCirclePlus,
    faEye,
    faCaretLeft,
    faCaretRight,
    faNairaSign
} from '@fortawesome/free-solid-svg-icons';

export const SwitchOraganization = () => {
    return <FontAwesomeIcon icon={faBriefcase}
        className="switchOrg icon"/>

};

export const Dashboard = () => {
    return <FontAwesomeIcon icon={faHouseChimney}
        className="dashboard icon"/>
}

export const CaretDown = () => {
    return <FontAwesomeIcon icon={faCaretDown}
        className="icon caretdown"/>
}

export const Guarantors = () => {
    return <FontAwesomeIcon icon={faUsers}
        className="icon users"/>
}

export const Users = () => {
    return <FontAwesomeIcon icon={faUserGroup}
        className="icon usergroup"/>
}
export const SavingsAndProduct = () => {
    return <FontAwesomeIcon icon={faLandmark}
        className="icon landmark"/>
}

export const Loans = () => {
    return <FontAwesomeIcon icon={faSackDollar}
        className="icon moneybag"/>
}

export const HandShake = () => {
    return <FontAwesomeIcon icon={faHandshake}
        className="icon handshake"/>
}

export const PiggyBank = () => {
    return <FontAwesomeIcon icon={faPiggyBank}
        className="icon piggy"/>
}

export const Hand = () => {
    return <FontAwesomeIcon icon={faHandHoldingDollar}
        className="icon hand"/>
}

export const Karma = () => {
    return <FontAwesomeIcon icon={faUserXmark}
        className="icon karma"/>
}

export const Whitelist = () => {
    return <FontAwesomeIcon icon={faUserCheck}
        className="icon check"/>
}

export const Fees = () => {
    return <FontAwesomeIcon icon={faCoins}
        className="icon database"/>
}
export const HouseLove = () => {
    return <FontAwesomeIcon icon={faHouseChimneyWindow}
        className="icon houseofLove"/>
}
export const Transactions = () => {
    return <FontAwesomeIcon icon={faTablet}
        className="icon tablet"/>
}
export const Services = () => {
    return <FontAwesomeIcon icon={faFan}
        className="icon service"/>
}
export const ServiceAccount = () => {
    return <FontAwesomeIcon icon={faUserGear}
        className="icon gear"/>
}
export const Settlements = () => {
    return <FontAwesomeIcon icon={faScroll}
        className="icon settlements"/>
}
export const Reports = () => {
    return <FontAwesomeIcon icon={faChartColumn}
        className="icon reports"/>
}

export const FeesAndPricing = () => {
    return <FontAwesomeIcon icon={faCirclePlus}
        className="icon fees"/>
}
export const Prefrences = () => {
    return <FontAwesomeIcon icon={faSliders}
        className="icon prefrences"/>
}
export const AuditLogs = () => {
    return <FontAwesomeIcon icon={faRectangleList}
        className="icon audit"/>
}
export const Eye = () => {
    return <FontAwesomeIcon icon={faEye}
        className="icon eye"/>
}
export const Left = () => {
    return <FontAwesomeIcon icon={faCaretLeft}
        className="direction"/>
}
export const Rigt = () => {
    return <FontAwesomeIcon icon={faCaretRight}
        className="direction"/>
}
export const Naira = () => {
    return <FontAwesomeIcon icon={faNairaSign}
        />
}
