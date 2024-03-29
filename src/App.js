import InfoCard from "./components/InfoCard/InfoCard";
import Header from "./components/Header/Header";
import "./App.scss";
import {
    personalDescription,
    cloudArmyInfo,
    valostatsInfo,
    buzzItInfo,
    sfuInfo,
    stonksInfo,
    sfuSSEPInfo,
    mutationAnalysisInfo,
    studywitmeInfo,
    portfolioInfo,
    stickyWallInfo,
    reciperInfo,
} from "./assets/texts/Texts.js";

function App() {
    return (
        <div className="portfolio-container">
            <Header
                title="bobae choi"
                description={personalDescription}
                socials={true}
            />
            <div className="info-cards-container">
                <InfoCard info={reciperInfo} />
                <InfoCard info={stickyWallInfo} />
                <InfoCard info={cloudArmyInfo} />
                <InfoCard info={portfolioInfo} />
                <InfoCard info={valostatsInfo} />
                <InfoCard info={buzzItInfo} />
                <InfoCard info={sfuInfo} />
                <InfoCard info={stonksInfo} />
                <InfoCard info={mutationAnalysisInfo} />
                <InfoCard info={sfuSSEPInfo} />
                <InfoCard info={studywitmeInfo} />
            </div>
        </div>
    );
}

export default App;
