import React from "react";

const isClassComponent = (component) => {
	return (
		(
			typeof component === 'function' &&
			!!component.prototype.isReactComponent
		) || typeof component === 'string'
	)
}

const r = (fullClass = '', ...props) => {
	const type = fullClass.split('.')[0] || 'div';
	const className = fullClass.slice(fullClass.indexOf('.'));
	const _props = { className };
	const children = props.filter(isClassComponent);
	const properties = props.filter(p => !isClassComponent(p));
	for (let property in properties) {
		Object.assign(_props, property)
	}

	return React.createElement(type, _props, children)
}
export default r