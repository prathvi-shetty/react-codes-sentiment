import React, { Component } from 'react';
import './login.scss';
import WhiteLogo from './white-logo.png';
import Google from './google.png';
import BBC from './bbc.png';
import FB from './fb.png';
import Twitter from './twitter.png';

import India from './india.png';
import France from './france.png';
import Germany from './ger.png';
import Aus from './aus.png';
import SouthAfrica from './sa.png';
import US from './us.png';
import China from './china.png';
import UK from './uk.png';

class Login extends Component {

  constructor(props) {
    super(props);
    this.googleAuth = null;
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      this.googleAuth = window.gapi.auth2.init({
        client_id: '800601198554-10bp13eftg9q2876ukpfgpjvac1sh5or.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      let isSignedIn = this.googleAuth.isSignedIn.get();
      if (isSignedIn) {
        console.log('already signed in');
      } else {
        console.log('Attaching element');
        this.attachGoogleSignin(document.getElementById('google-signin-button'));
      }
    });
  }

  attachGoogleSignin(element) {
    this.googleAuth.attachClickHandler(element, {},
      (googleUser) => {
        this.props.history.push('/');
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  render() {
    return (
      <div className='login'>
        <div className='logo'>
          <img src={WhiteLogo} alt="logo" />
        </div>
        <main>
          <div className="title">
            <div className="sub-caption">
              sentimental analyser
            </div>
            <div className="caption">
              A Powerful Engine to Analyse People's  Sentiments
            </div>
            <div className="meta">
              <div className="meta-info">
                <div className="key">Sources</div>
                <div className="value">
                  <img className='source-logo' src={Twitter} alt="twitter-logo" />
                  <img className='source-logo' src={FB} alt="facebook-logo" />
                  <img className='source-logo bbc-logo' src={BBC} alt="BBC-logo" />
                </div>
              </div>
              <div className="meta-info">
                <div className="key">8 Countries</div>
                <div className="value">
                  <img className='flag' src={US} alt="us-flag" />
                  <img className='flag' src={China} alt="china-flag" />
                  <img className='flag' src={SouthAfrica} alt="south-africa-flag" />
                  <img className='flag' src={India} alt="india-flag" />
                  <img className='flag' src={Germany} alt="germany-flag" />
                  <img className='flag' src={UK} alt="uk-flag" />
                  <img className='flag' src={France} alt="france-flag" />
                  <img className='flag' src={Aus} alt="australia-flag" />
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <div className="input-wrap">
              <div className="input-title">
                Sign In with
            </div>
              <div className="google-wrap" id="google-signin-button">
                <img src={Google} alt="google-logo" />
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

}

export default Login;
