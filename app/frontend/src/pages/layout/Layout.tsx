import { Outlet, NavLink, Link } from "react-router-dom";

import harmonia_logo from "../../assets/harmonia-logo.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Employee Handbook Chat App</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a
                                    href="https://harmoniaholdingsgroupllc.sharepoint.com/sites/HarmoniaTeamAccess/SiteAssets/Forms/AllItems.aspx?id=%2Fsites%2FHarmoniaTeamAccess%2FSiteAssets%2FSitePages%2FEmployee%2DHandbook%2Dand%2DBenefits%2DGuide%2F2024%2DHarmonia%2DEmployee%2DHandbook%2Epdf&parent=%2Fsites%2FHarmoniaTeamAccess%2FSiteAssets%2FSitePages%2FEmployee%2DHandbook%2Dand%2DBenefits%2DGuide"
                                    target={"_blank"}
                                    title="Link to Harmonia Employee Handbook"
                                >
                                    <img
                                        src={harmonia_logo}
                                        alt="Harmonia logo"
                                        aria-label="Link to Harmonia"
                                        width="20px"
                                        height="20px"
                                        className={styles.harmoniaLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + Azure AI Search</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
