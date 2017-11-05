const renderElement = elementType => className => textContent => {
	const node = document.createElement(elementType);

	node.className = className;
	node.textContent = textContent;

	document.body.appendChild(node);
};

export default {
	appendSpanOnBody: renderElement('span'),
};
