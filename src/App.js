import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Input from 'react-toolbox/lib/input/Input';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';

class App extends Component {
  state = { "phone": '', "message": ''}

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  clear_input() {
    this.setState(
      { "phone": '', "message": ''}
    )
  }

  send_message() {
    window.open(`whatsapp://send?text=${this.state.message}&phone=${this.state.phone.replace(/\D/g,'')}`);    
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Panel>
            <Layout>
              <Panel>
                <AppBar>Send WA Message to a Number Directly [Unofficial]</AppBar>
                <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
                <Input type='text' label='Message' name='message' multiline={true} icon='message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} />
                <Button icon='clear' accent onClick={() => this.clear_input()} >Discard</Button>
                <Button icon='send' onClick={() => this.send_message()} raised primary >Send</Button>

              </Panel>
            </Layout>
          </Panel>
        </Layout>
      </div>
    );
  }
}

export default App;
