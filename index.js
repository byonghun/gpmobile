/** @format */
import {Navigation} from 'react-native-navigation';
import {registerComponents} from './src/config/register';
import {width} from './src/helpers/dimensions';

const bottomTabs = {
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

const sideMenu = {
  left: {
    component: {
      name: 'gp.prayer'
    }
  },
  center: {
    stack: {
      id: "CenterStack",
      children: [{
        bottomTabs
      }]
    }
  },
  right: {
    component: {
      name: 'gp.profile'
    }
  }
}

registerComponents()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: 'pink'
    },
    sideMenu: {
      right: {
        width: width * .85
      },
      left: {
        width: width * .85
      }
    }
  })
  Navigation.setRoot({
    root: {
      sideMenu
    }
  })
});