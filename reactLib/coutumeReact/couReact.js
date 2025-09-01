function cusRender(reactEle, container) {
    const domEle = document.createElement(reactEle.type);
    domEle.innerHTML = reactEle.children;

    for (let prop in reactEle.props) {
        domEle.setAttribute(prop, reactEle.props[prop]);
    }

    container.appendChild(domEle);
}

const reactEle = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "yess! please click me🥺"
};

const mainCont = document.getElementById('root') ?? document.body;

cusRender(reactEle, mainCont);
