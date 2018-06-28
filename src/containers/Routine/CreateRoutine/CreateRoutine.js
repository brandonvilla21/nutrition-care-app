import React, { Component } from 'react';
import PageBase from '../../../components/PageBase/PageBase';
import TabsRoutine from '../../../components/Routine/TabsRoutine/TabsRoutine';

class CreateRoutine extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput( event ) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        [name]: value
    });
  }
  render() {
    const { description } = this.state;
    
    return (
      <div>
        <PageBase>
          <div>
            <TabsRoutine
              description={description}
              handleInput={this.handleInput}
            />
          </div>
        </PageBase>
      </div>
    )
  }
}

export default CreateRoutine;