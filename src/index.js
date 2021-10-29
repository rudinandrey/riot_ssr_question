import MyComponent from './my-component.riot';
import * as riot from 'riot';

const mountApp = riot.component(MyComponent);
const app = mountApp(document.querySelector('#root'), {name:'Riot'});