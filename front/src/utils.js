import React from "react";

const isClassComponent = (component) => {
    return (
      typeof component === 'function' &&
      !!component.prototype.isReactComponent
    )
  }

const r = (fullClass='', ...props) => {
    const type = fullClass.split('.')[0] || 'div';
    const className = fullClass.slice(fullClass.indexOf('.'));
    const props = { className };
    const children = props.filter(isClassComponent);
    const properties = props.filter(p => !isClassComponent(p));
    for (property in properties) {
        Object.assign(props, property)
    }

    return React.createElement(type, props, children)
}
export default r