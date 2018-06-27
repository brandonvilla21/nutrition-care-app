import React, { Component } from 'react';
import PageBase from '../../../components/PageBase/PageBase';
import TabsRoutine from '../../../components/Routine/TabsRoutine/TabsRoutine';

class CreateRoutine extends Component {
    render() {
      return (
        <div>
          <PageBase>
            <div>
              <TabsRoutine />
            </div>
          </PageBase>
        </div>
      )
    }
}

export default CreateRoutine;