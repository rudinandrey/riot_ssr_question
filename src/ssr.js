import MyComponent from './my-component.riot';
import render from '@riotjs/ssr';

const html = render('my-component', MyComponent, {some:'test'});