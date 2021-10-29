import hydrate from '@riotjs/hydrate';
import MyComponent from './my-component.riot';

const hydrateWithMyComponent = hydrate(MyComponent);

hydrateWithMyComponent(
	document.querySelector('#root'),
	window.__INITIAL_APPLICATION_PROPS__
)