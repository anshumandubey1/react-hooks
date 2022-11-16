import React from 'react'
import logo from '../logo.svg';
import Page from './Page';

function HomePage() {
  return (
    <Page>
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    </Page>
  )
}

export default HomePage