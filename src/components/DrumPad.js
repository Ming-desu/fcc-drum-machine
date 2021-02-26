import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();

    this.props.updateDisplay(this.props.id.replace('-', ' '));
  }

  handleKeyDown(e) {
    if (e.key.toUpperCase() === this.props.keyTrigger) {
      this.playSound();
    }
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playSound}>
        <button className="btn btn-lg d-block w-100 py-5 btn-secondary">{this.props.keyTrigger}</button>
        <audio className="clip" id={this.props.keyTrigger} src={this.props.clip}></audio>
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

export default DrumPad;