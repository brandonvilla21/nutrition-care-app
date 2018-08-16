import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

// import { RaisedButton } from 'material-ui';
// import { Card, CardHeader, CardText } from 'material-ui/Card';

// import ActionHelp from '@material-ui/icons/Help';
import ActionShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AvPlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import CheckCircle from '@material-ui/icons/CheckCircle';

// import TextField from '@material-ui/core/TextField';

import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

// import DietTotalsCard from './DietTotalsCard/DietTotalsCard';
// import DietTableCalculator from './DietTableCalculator';
import SelectableTable from '../../shared/SelectableTable';
import TabContainer from '../../shared/TabContainer';

const blue500 = blue['500'];
const grey700 = grey['700'];

class TabsDiet extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      tabIndex: 0,
      resetToggle: false
    };

    this.nextIndex = this.nextIndex.bind( this );
    this.prevIndex = this.prevIndex.bind( this );
    this.blockTapTabs = this.blockTapTabs.bind( this );
    this.resetIndex = this.resetIndex.bind( this );
    
  }


  nextIndex() {
    const { tabIndex } = this.state;
    this.setState({ tabIndex: tabIndex + 1 });
  }


  prevIndex() {
      const { tabIndex } = this.state;
      this.setState({ tabIndex: tabIndex - 1 });
  }


  blockTapTabs() {
    const { tabIndex } = this.state;
    this.setState({ tabIndex });
  }


  disableCalculateDietButton() {
    return this.props.selectedFoods.length < 1;
  }


  disableSaveButton() {
    return this.props.description === '';
  }


  resetIndex() {
    this.setState({ tabIndex: 0, resetToggle: true }, 
                  () => this.setState({ resetToggle: false }) );
  }

  getTabs({ tabIndex, foods, selectedFoods, selectableFoodColumns }) {

    switch( tabIndex ) {
      case 0: {
        return (
          <TabContainer>

            {/* <Card initiallyExpanded={true} style={styles.recomendationStyles}>
              <CardHeader 
                title="Aviso"
                subtitle="Recomendaciones"
                actAsExpander={true}
                showExpandableButton={true}
                avatar={<ActionHelp style={styles.actionHelpStyle}/>}
              />
              <CardText expandable={true} style={{ color: grey700, fontSize: 16 }}>
                <ul>
                  <li>
                    Selecciona los alimentos que quieras incorporar en tu dieta.
                  </li>
                  <li>
                    Puedes seleccionar todos los alimentos que quieras en la tabla de alimentos
                    de abajo.
                  </li>
                </ul>
              </CardText>
            </Card> */}
            
            <SelectableTable
              resetToggle={this.state.resetToggle} 
              elements={foods}
              selectedElements={selectedFoods}
              mainTableHeader="SELECCIONA LOS ALIMENTOS QUE DESEAS AGREGAR A TU DIETA :)"
              secondaryTableHeader="ALIMENTOS SELECCIONADOS"
              defaultPageSize={10}
              noDataTextMainTable="No hay datos actualmente :("
              noDataTextSecondaryTable="Selecciona un elemento de la otra tabla ;)"
              columns={selectableFoodColumns}
              onToggleRow={this.props.toggleRow.bind( this )}
              enableSecondaryTable={false}
            />

            {/* <RaisedButton
                    style={styles.raisedButtonNextStyle}
                    label="Siguiente"
                    primary={true}
                    disabled={this.disableCalculateDietButton()}
                    value={1}
                    onClick={this.nextIndex} /> */}
            
          </TabContainer>
        );
      }
      case 1: {
        return (
          <TabContainer>

            test text

            {/* <Card initiallyExpanded={true} style={styles.recomendationStyles}>
              <CardHeader 
                title="Aviso"
                subtitle="Recomendaciones"
                actAsExpander={true}
                showExpandableButton={true}
                avatar={<ActionHelp style={styles.actionHelpStyle}/>}
              />
              <CardText expandable={true} style={{ color: grey700, fontSize: 16 }}>
                <ul>
                  <li>
                    Elige los gramos o calorías que deseas agregar para cada alimento de la tabla.
                  </li>
                  <li>
                    Ten en cuenta el valor total de cada uno de los macronutrientes de la tabla,
                    así como también de las calorías totales.
                  </li>
                </ul>
              </CardText>
            </Card>

            <DietTableCalculator 
              selectedFoods={selectedFoods}
              onChangeTable={this.props.onChangeDataTableFields.bind( this )}
            />

            <DietTotalsCard
              totalCalories={totalCalories}
              totalCarbohydrates={totalCarbohydrates}
              totalFats={totalFats}
              totalProteins={totalProteins}
            /> */}

            <div>
              {/* <RaisedButton
                      style={styles.raisedButtonPrevStyle}
                      label="Regresar"
                      secondary={true}
                      disabled={this.disableCalculateDietButton()}
                      value={1}
                      onClick={this.prevIndex} />

              <RaisedButton
                      style={styles.raisedButtonNextStyle}
                      label="Siguiente"
                      primary={true}
                      disabled={this.disableCalculateDietButton()}
                      value={1}
                      onClick={this.nextIndex} /> */}
            </div>

          </TabContainer>
        );
      }
      case 2: {
        return (
          <TabContainer>
            
            {/* <TextField
              floatingLabelStyle={styles.floatingLabelStyle}
              name="description"
              floatingLabelText="Agrega una descripción para tu dieta"
              fullWidth={true}
              value={description}
              onChange={onChange}
            /> */}

            <div className="final-grid">

              {/* <DietTotalsCard className="totals-card"
                totalCalories={totalCalories}
                totalCarbohydrates={totalCarbohydrates}
                totalFats={totalFats}
                totalProteins={totalProteins}
              /> */}

              {/* <Card className="recommendation-card" initiallyExpanded={true}>
                <CardHeader 
                  title="Aviso"
                  subtitle="Recomendaciones"
                  actAsExpander={true}
                  showExpandableButton={true}
                  avatar={<ActionHelp style={styles.actionHelpStyle}/>}
                />
                <CardText expandable={true}>
                  <strong>AQUÍ VAN LAS RECOMENDACIONES</strong>
                </CardText>
              </Card> */}

                <div>
                  <p>
                    Te pedimos que confirmes los datos antes de continuar. 
                    Cuando estés listo, da clic en 
                      <strong> Guardar</strong>
                  </p>
                  {/* <RaisedButton
                    style={styles.raisedButtonPrevStyle}
                    label="Regresar"
                    secondary={true}
                    disabled={this.disableCalculateDietButton()}
                    value={1}
                    onClick={this.prevIndex} />

                  <RaisedButton
                    style={styles.raisedButtonNextStyle}
                    label="Guardar"
                    primary={true}
                    disabled={this.disableSaveButton()}
                    onClick={this.props.onSubmitDiet.bind( this, this.resetIndex )} /> */}
                </div> 

            </div>
          </TabContainer>
        );
      }

      default: return null;
    }

  }

  render () {

    const { 
      foods, selectedFoods, totalCalories, 
      totalCarbohydrates, totalFats, totalProteins,
      selectableFoodColumns, description, onChange
    } = this.props;

    const {
      tabIndex
    } = this.state;

    const currentTab = this.getTabs({
      tabIndex, 
      foods, 
      selectedFoods, 
      selectableFoodColumns,
    });

    return (
      <div>
        <AppBar position="static" color="default">
      
          <Tabs 
            value={tabIndex}
            // disabled={true}
            onChange={this.blockTapTabs}
            // initialSelectedIndex={0} 
            style={styles.tabs}
            >

            <Tab icon={<ActionShoppingBasket />} label="Alimentos disponibles"
              // style={styles.tab} 
            ></Tab>
            
            <Tab label="Alimentos seleccionados"
              // icon={<AvPlaylistAddCheck style={styles.iconStyles} color={blue500} />}
              // style={styles.tab}
            ></Tab>

            <Tab icon={<CheckCircle />}
                label="Finalizar"
                // value={2}
                // style={styles.tab}
              ></Tab>

          </Tabs>

        </AppBar>

        {currentTab}

      </div>
    );
  }
}


TabsDiet.propTypes = {
  foods: PropTypes.array.isRequired,
  selectedFoods: PropTypes.array.isRequired,
  selectableFoodColumns: PropTypes.array.isRequired,  
  totalCalories: PropTypes.number.isRequired,
  totalCarbohydrates: PropTypes.number.isRequired,
  totalProteins: PropTypes.number.isRequired,
  totalFats: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  toggleRow: PropTypes.func.isRequired,
  onChangeDataTableFields: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmitDiet: PropTypes.func.isRequired,

};


const styles = {
  tab: {
    backgroundColor: blue500,
    inkBarStyle: {
      backgroundColor: 'white'
    }
  },
  tabs: {
    borderRadius: '10px red',
    paddingTop: '18px'
  },
  iconStyles: {
    marginRight: 24,
  },
  raisedButtonNextStyle: {
    marginTop: 20,
    float: 'right'
  },
  raisedButtonPrevStyle: {
    marginTop: 20,
    float: 'left'
  },
  actionHelpStyle: {
    marginTop: 10, 
    color: grey700
  },
  recomendationStyles: {
    margin: '10px 0px 10px 0px'
  },
  floatingLabelStyle: {
    fontSize: 19,
  }
};

export default TabsDiet;