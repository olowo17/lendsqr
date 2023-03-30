import React from 'react'
import "../styles/css/SideNav.css"
import {
    SwitchOraganization,
    Dashboard,
    CaretDown,
    Users,
    Guarantors,
    Loans,
    HandShake,
    PiggyBank,
    Hand,
    Whitelist,
    Karma,
    SavingsAndProduct,
    FeesAndPricing,
    Transactions,
    Services,
    ServiceAccount,
    Settlements,
    Reports,
    Prefrences,
    Fees,
    AuditLogs
} from '../asset/icons'
export const SideNav = () => {
    return (
        <nav className='side-nav'>
            <div className="nav-container">
                <h4>
                    <SwitchOraganization/>
                    Switch Organization
                    <CaretDown/>

                </h4>
                <h4 className='flex'>
                    <Dashboard/>
                    Dashboard
                </h4>
                <section>
                    <h3>CUSTOMERS</h3>
                    <ul>
                        <li>
                            <Users/>
                            Users
                        </li>

                        <li>
                            <Guarantors/>
                            Guarantors</li>
                        <li>
                            <Loans/>Loans
                        </li>

                        <li>
                            <HandShake/>
                            Decision Models</li>

                        <li><PiggyBank/>
                            Savings</li>

                        <li>
                            <Hand/>
                            Loan Request</li>

                        <li>
                            <Whitelist/>
                            Whitelist</li>

                        <li>
                            <Karma/>
                            Karma</li>

                    </ul>
                </section>

                <section>
                    <h3>BUSINESS</h3>
                    <ul>
                        <li>
                            <SwitchOraganization/>
                            Organization</li>

                        <li><Hand/>
                            Loan Products</li>

                        <li>
                            <SavingsAndProduct/>Savings Products</li>

                        <li><FeesAndPricing/>
                            Fees and Charges</li>

                        <li><Transactions/>
                            Transactions</li>

                        <li>
                            <Services/>Services</li>

                        <li><ServiceAccount/>
                            Service Account</li>

                        <li>
                            <Settlements/>Settlements</li>

                        <li>
                            <Reports/>Reports</li>

                    </ul>
                </section>
                <section>
                    <h3>
                        SETTINGS</h3>
                    <ul>
                        <li>
                            <Prefrences/>Prefrences</li>

                    </ul>
                    <ul>
                        <li>
                            <Fees/>
                            Fees and Pricing</li>

                    </ul>
                    <ul>
                        <li>
                            <AuditLogs/>
                            Audit Logs</li>

                    </ul>
                </section>

            </div>
        </nav>
    )
}
