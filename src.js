var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var blockOneStyle = {
    backgroundImage: 'url("images/loft.jpg")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '0',
    paddingBottom: '66.74%',
    margin: '0'
};
var titleStyle = {
    paddingTop: '40%',
    fontSize: '70px',
    paddingLeft: '25%',
    paddingRight: '25%',
    color: '#ffffff',
    textAlign: 'center'
};
var headerStyle = {
    display: 'inline-block',
    width: '60%',
    textAlign: 'center',
    wordSpacing: '30px'
};
var headerItemStyle = {
    fontFamily: '"Work Sans", Arial, sans-serif',
    textTransform: 'uppercase',
    fontSize: '20px',
    color: '#757474',
    textDecoration: 'none'
};
var brandStyle = {
    display: 'inline-block',
    width: '20%',
    fontSize: '30px',
    color: '#757474',
    textAlign: 'left',
    wordSpacing: '3px',
    fontFamily: '"Work Sans", Arial, sans-serif',
    textTransform: 'uppercase',
    paddingLeft: '10px'
};
var titleTwoStyle = {
    fontSize: '70px',
    color: '#000000',
    textAlign: 'left',
    paddingLeft: '25%',
    paddingRight: '25%',
    paddingTop: '20%',
    paddingBottom: '10%'
};
var contentTwoStyle = {
    fontSize: '17px',
    color: '#000000',
    textAlign: 'justify',
    paddingLeft: '25%',
    paddingRight: '25%',
    paddingBottom: '20%'
}
var blockThreeStyle = {
    backgroundImage: 'url("images/piano.jpg")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '0',
    paddingBottom: '64.795%',
    margin: '0'
};

class HeaderComponent extends React.Component {
    render () {
        return <div>
            <span style={brandStyle}>Lorem Ipsum</span>
            <span style={headerStyle}><a style={headerItemStyle} href="#">netus</a> <a style={headerItemStyle} href="#">augue</a> <a style={headerItemStyle} href="#">morbi</a> <a style={headerItemStyle} href="#">elit</a></span>
            </div>;
    }
}

class TitleComponent extends React.Component {
    render () {
        return <div style={titleStyle}>Lorem ipsum dolor sit amet</div>;
    }
}
class BlockOneComponent extends React.Component {
    render () {
        return <div style={blockOneStyle}>
            <HeaderComponent />
            <TitleComponent />
            </div>;
    }
}

class BlockTwoTitleComponent extends React.Component {
    render () {
        return <div style={titleTwoStyle}>Praesent efficitur vel augue molestie vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. </div>;
    }
}

class BlockTwoContentComponent extends React.Component {
    render () {
        return <div style={contentTwoStyle}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque rutrum nibh orci, pulvinar rutrum elit interdum eu. Ut nec sem eu sapien congue tempor. Sed volutpat sit amet nunc finibus convallis. Donec consequat eleifend elementum. Vestibulum metus justo, pulvinar ut aliquam a, volutpat id nisl. Nulla sit amet lorem lacus. Phasellus eget leo interdum, aliquam eros nec, elementum velit. Suspendisse sed odio maximus, ultricies diam vel, mattis sapien. Duis sit amet justo in lorem bibendum tincidunt. Sed sit amet massa lorem. Nunc eu consequat nunc, vel congue nibh. Nam ultricies porta mauris in gravida.</div>;
    }
}

class BlockTwoComponent extends React.Component {
    render () {
        return <div>
            <BlockTwoTitleComponent />
            <BlockTwoContentComponent />
            </div>;
    }
}

class BlockThreeComponent extends React.Component {
    render () {
        return <div style={blockThreeStyle}></div>;
    }
}

ReactDOM.render(<div>
                <BlockOneComponent />
                <BlockTwoComponent />
                <BlockThreeComponent />
                </div>, document.getElementById('display'));