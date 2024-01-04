import InfoCard from './components/InfoCard/InfoCard';
import Header from './components/Header/Header';
import './App.scss';
import { personalDescription, cloudArmyInfo, valostatsInfo, buzzItInfo, sfuInfo, glanceInfo, stonksInfo, sfuSSEPInfo, mutationAnalysisInfo, studywitmeInfo } from './assets/texts/Texts.js';

function App() {
  return (
    <div className="portfolio-container">
      <Header title="BOBAE CHOI" description={personalDescription} socials={true} />
      <div className="info-cards-container">
        {/* <InfoCard info={glanceInfo} /> */}
        <InfoCard info={cloudArmyInfo} />
        <InfoCard info={valostatsInfo} />
        <InfoCard info={buzzItInfo}/>
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
