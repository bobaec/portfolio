import InfoCard from './components/InfoCard/InfoCard';
import Header from './components/Header/Header';
import './App.scss';
import cloudArmyLogo from './assets/logos/cloudarmy-logo.png';
import valostatsLogo from './assets/logos/valostats-logo.png';
import buzzitLogo from './assets/logos/buzzit-logo.png';
import { cloudArmyInfo, valostatsInfo, buzzItInfo, simonFraserInfo } from './assets/texts/Texts.js';

function App() {
  const headerDescription = 'I am a Front End Developer with a three year track record in creating engaging and user-friendly web interfaces. With a typing speed of 150 words per minute, I am efficient at turning my ideas into code.';
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
      </header>
      <Header title="Bobae Choi" description={headerDescription} socials={true} />
      <div className="info-cards-container">
        <InfoCard image={cloudArmyLogo} title="CloudArmy" duration="July 2021 - Oct 2023" jobTitle="Web Developer" description="description" links="links" info={cloudArmyInfo} />
        <InfoCard image={valostatsLogo} title="Valostats" duration="Oct 2020 - May 2021" jobTitle="Front End Developer" description="description" links="links" info={valostatsInfo} />
        <InfoCard image={buzzitLogo} title="title" duration="duration" description="description" links="links" info={buzzItInfo}/>
        <InfoCard image="image" title="title" duration="duration" description="description" links="links" info={simonFraserInfo} />
        {/* <InfoCard image="image" title="title" duration="duration" description="description" links="links" /> */}
      </div>
    </div>
  );
}

export default App;
