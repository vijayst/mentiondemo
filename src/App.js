import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './less/index.less';
import { Mention } from 'antd';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />            
        </AppContainer>,
        document.getElementById('react')
    );
};

render(Mention);

