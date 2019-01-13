/** @format */
import {Navigation} from 'react-native-navigation';
import {registerComponents} from './src/config/register';

registerComponents()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: 'pink'
    }
  })
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'gp.about',
              options: {
                bottomTab: {
                  text: 'About'
                }
              }
            }
          },
          {
            component: {
              name: 'gp.sermons',
              options: {
                bottomTab: {
                  text: 'Sermons'
                }
              }
            }
          },
          {
            component: {
              name: 'gp.service',
              options: {
                bottomTab: {
                  text: 'Service'
                }
              }
            }
          },
          {
            component: {
              name: 'gp.bible',
              options: {
                bottomTab: {
                  text: 'Bible'
                }
              }
            }
          }
        ]
      }
    }
  })
});