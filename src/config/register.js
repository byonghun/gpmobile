import {Navigation} from 'react-native-navigation';
import {
  about,
  bible,
  sermons,
  service,
  prayer,
  profile,
  sermonAudio
} from './components.json';
import About from '../components/Tabs/About';
import Bible from '../components/Tabs/Bible';
import Sermons from '../components/Tabs/Sermons';
import Service from '../components/Tabs/Service';
import Profile from '../components/Drawers/Profile';
import Prayer from '../components/Drawers/Prayer';
import SermonAudio from '../components/Stacks/Audio/sermon';

const registerComponent = (name, Component) =>
  Navigation.registerComponent(name, () => Component)

export const registerComponents = () => {
  registerComponent(about, About);
  registerComponent(bible, Bible);
  registerComponent(sermons, Sermons);
  registerComponent(service, Service);
  registerComponent(profile, Profile);
  registerComponent(prayer, Prayer);
  registerComponent(sermonAudio, SermonAudio);
}