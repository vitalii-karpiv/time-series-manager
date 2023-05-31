import React from 'react';
import Header from "./components/header";
import TimeSeriesList from "./components/time-series-list";

function App() {
    return (
        <div className={"container"}>
            <Header></Header>
            <TimeSeriesList></TimeSeriesList>
        </div>
    );
}

export default App;
