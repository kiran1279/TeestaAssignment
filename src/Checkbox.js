import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Checked:'true',
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.Checked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            defaultChecked={this.state.Checked}
            onChange={this.toggleChange}
          />
        </label>
      );
    }
  }
  export default Checkbox;