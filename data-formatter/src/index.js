import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const data = {value: 100000, currency: 'USD'};

let locale = 'en'

class DataFormatter extends Component {

    //state = { locale: 'en' }

    componentDidMount(){
        console.log("The Component is now mounted");
    }

    componentDidUpdate(){
        console.log("The component just updated");
    }

    render(){
        console.log(this.props)
        const { value, currency } = this.props.data;
        return (
            <div>
                <h1>Welcome to data formatter</h1>
                <p>Value: {value}</p>
                <p>Currency: {currency}</p>
                <p>Locale: {this.props.locale}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <DataFormatter data={data} locale={locale}/>, 
    document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
