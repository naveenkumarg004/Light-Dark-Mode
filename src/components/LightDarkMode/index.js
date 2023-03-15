import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  changeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    const classMode = darkMode ? 'dark-mode' : 'light-mode'
    const buttonText = darkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg">
        <div className={`container ${classMode}`}>
          <h1 className="head">Click To Change Mode</h1>
          <button onClick={this.changeMode} type="button" className="btn">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
