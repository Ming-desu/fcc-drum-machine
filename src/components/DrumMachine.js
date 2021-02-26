import React from 'react';

import DrumPad from './DrumPad';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClip: ''
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(clip) {
    this.setState({
      currentClip: clip
    })
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card" id="drum-machine">
            <div className="card-header">
              <span>Now Playing: </span>
              <strong id="display">{this.state.currentClip}</strong>
            </div>
            <div className="card-body">
              <div className="drum-pads row">
                {
                  bankOne.map((item, index) => {
                    return (
                      <div className={index < bankOne.length - 3 ? 'col-4 mb-4' : 'col-4'} key={index}>
                        <DrumPad id={item.id} keyCode={item.keyCode} keyTrigger={item.keyTrigger} clip={item.url} onClick={this.drumClick} updateDisplay={this.updateDisplay} /> 
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DrumMachine;