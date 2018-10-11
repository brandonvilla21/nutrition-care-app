import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, Button, TextField } from '@material-ui/core/';

import withWidth from '@material-ui/core/withWidth';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Link } from 'react-router-dom';

import ActionShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AvPlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import CheckCircle from '@material-ui/icons/CheckCircle';

import grey from '@material-ui/core/colors/grey';

import DietTotalsCard from './DietTotalsCard/DietTotalsCard';
import DietTableCalculator from './DietTableCalculator';
import SelectableTable from '../../shared/SelectableTable';
import TabContainer from '../../shared/TabContainer';
import SimpleExpandibleCard from '../../shared/SimpleExpandibleCard';

import classNames from 'classnames';

const grey700 = grey['700'];


class EditTabsDiet extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      tabIndex: 1,
      resetToggle: false,
      openModalElimination: false,
    };

    this.nextIndex = this.nextIndex.bind( this );
    this.prevIndex = this.prevIndex.bind( this );
    this.blockTapTabs = this.blockTapTabs.bind( this );
    this.resetIndex = this.resetIndex.bind( this );
    this.handleCloseEliminationModal = this.handleCloseEliminationModal.bind( this );
    this.handleOpenEliminationModal = this.handleOpenEliminationModal.bind( this );
    this.handleRemoveRow = this.handleRemoveRow.bind( this );
  }

  handleCloseEliminationModal() {
    this.setState({
      openModalElimination: false, 
      selectedFoodToEliminate: {},
    });
  }

  handleOpenEliminationModal( elementToEliminate ) {

    if( elementToEliminate.foodFromFoodsTable === true ) {
      
      this.setState(
        { selectedFoodToEliminate: elementToEliminate },
        () => this.handleRemoveRow()
      );
      
    } else {
      this.setState({
        openModalElimination: true,
        selectedFoodToEliminate: elementToEliminate,
      });
    }
  }

  handleRemoveRow() {
    this.props.removeFoodRow( this.state.selectedFoodToEliminate );
    this.setState({
      openModalElimination: false, 
      selectedFoodToEliminate: {},
    });
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
    this.setState({ tabIndex: 1, resetToggle: true }, 
                  () => this.setState({ resetToggle: false }) );
  }

  getTabsType() {
    const sizes = ['sm', 'xs'];
    const type = sizes.includes( this.props.width ) 
      ? { scrollable: true, scrollButtons: 'auto' } 
      : { centered: true };
    
    return type;
  }

  render () {

    const tabsType = this.getTabsType();

    const {
      tabIndex, 
    } = this.state;

    const {
      foods, selectedFoods, totalCalories, 
      totalCarbohydrates, totalFats, totalProteins,
      selectableFoodColumns, description, onChange, classes
    } = this.props;

    return (

      <React.Fragment>

        <AppBar position="static" color="default">
      
          <Tabs
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            value={tabIndex}
            {...tabsType}
          >

            <Tab 
              icon={<ActionShoppingBasket />} 
              label="Alimentos disponibles"
            ></Tab>
            
            <Tab 
              label="Alimentos seleccionados" 
              icon={<AvPlaylistAddCheck />}
            ></Tab>

            <Tab 
              icon={<CheckCircle />}
              label="Finalizar"
            ></Tab>

          </Tabs>

        </AppBar>

        <TabContainer 
          className={classNames({ 
            [classes.hideTab]: tabIndex !== 0 
          })}
        >
          <SimpleExpandibleCard cardStyle={styles.recomendationStyles}
          title={
            <strong className={classes.cardTitle}>Recomendaciones</strong>
          }
          >
            <ul>
              <li>
                Selecciona los alimentos que quieras incorporar en tu dieta.
              </li>
              <li>
                Puedes seleccionar todos los alimentos que quieras en la tabla de alimentos
                de abajo.
              </li>
            </ul>
          </SimpleExpandibleCard>
        
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
              manualRemovedFood={this.props.manualRemovedFood}
              clearManualRemovedFoodState={this.props.clearManualRemovedFoodState.bind( this )}
            />

          <div className={classes.firstTabButtonContainer}>
            <Button
              variant="contained"
              color="primary"
              disabled={this.disableCalculateDietButton()}
              onClick={this.nextIndex}>

              Calcular nutrientes

            </Button>
          </div>
        </TabContainer>

        <TabContainer className={classNames({ 
            [classes.hideTab]: tabIndex !== 1 
        })}>

          <SimpleExpandibleCard cardStyle={styles.recomendationStyles}
          title={
            <strong className={classes.cardTitle}>Recomendaciones</strong>
            }
          >
            <ul>
              <li>
                Elige los gramos o calorías que deseas agregar para cada alimento de la tabla.
              </li>
              <li>
                Ten en cuenta el valor total de cada uno de los macronutrientes de la tabla,
                así como también de las calorías totales.
              </li>
            </ul>
          </SimpleExpandibleCard>

          <DietTableCalculator
            selectedFoods={selectedFoods}
            onChangeTable={this.props.onChangeDataTableFields.bind( this )}
            handleOpenEliminationModal={this.handleOpenEliminationModal}
            onEdit
          />

          <Dialog
            aria-labelledby="remove-food-modal"
            disableBackdropClick
            open={this.state.openModalElimination}
            onClose={this.handleCloseEliminationModal}
          >

              <DialogTitle 
                data-testid="remove-food-modal"
                id="remove-food-modal">
                Dieta editada
              </DialogTitle>

              <DialogContent>
                Este alimento está relacionado con tu dieta directamente. Si la eliminas, NO lo podrás recuperar más adelante. 
                ¿Estás seguro de eliminar este alimento?
              </DialogContent>

              <DialogActions> 
                {[
                  <Button key={0} 
                    color="primary"
                    onClick={this.handleCloseEliminationModal.bind( this )}>
                      Cancelar
                  </Button>,

                  <Button key={1} 
                    color="primary"
                    onClick={this.handleRemoveRow.bind( this )}>
                      Eliminar
                  </Button>
                ]}
              </DialogActions>

          </Dialog>

          <div data-testid="total-card-calculator">
          <DietTotalsCard
            totalCalories={totalCalories}
            totalCarbohydrates={totalCarbohydrates}
            totalFats={totalFats}
            totalProteins={totalProteins}/>
          </div>

          <TextField className={classes.descriptionTextField} 
          name="description"
          id="description"
          InputLabelProps={{ htmlFor: 'description' }}
          label="Agrega la descripción de tu dieta"
          value={description}
          onChange={onChange}
          fullWidth
          />

          <div>
          
          </div>

          <div className={classes.generalTabButtonContainer}>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.disableCalculateDietButton()}
            onClick={this.prevIndex}>

            Seleccionar más alimentos

          </Button>

          <Button
            variant="contained"
            color="primary"
            disabled={this.disableSaveButton()}
            onClick={this.nextIndex}>

            Finalizar dieta

          </Button>
          </div>

        </TabContainer>

        <TabContainer className={classNames({ 
            [classes.hideTab]: tabIndex !== 2 
        })}>
            
            <DietTotalsCard
              totalCalories={totalCalories}
              totalCarbohydrates={totalCarbohydrates}
              totalFats={totalFats}
              totalProteins={totalProteins}/>

            <p style={{ textAlign: 'center' }}>
              Te pedimos que confirmes los datos antes de continuar. 
              Cuando estés listo, da clic en 
                <strong> Guardar</strong>
            </p>

            <div className={classes.generalTabButtonContainer}>
              <Button
                variant="contained"
                color="secondary"
                disabled={this.disableCalculateDietButton()}
                onClick={this.prevIndex}>

                Regresar

              </Button>

              <Button
                variant="contained"
                color="primary"
                disabled={this.disableCalculateDietButton()}
                onClick={this.props.onSubmitDiet.bind( this, this.resetIndex )}
                >

                Guardar dieta modificada

              </Button>
            </div>

          </TabContainer>

      </React.Fragment>
    );
  }
}


EditTabsDiet.propTypes = {
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
  removeFoodRow: PropTypes.func.isRequired,
  clearManualRemovedFoodState: PropTypes.func,
  manualRemovedFood: PropTypes.object,
};


const styles = {
  hideTab: {
    display: 'none',
  },
  iconStyles: {
    marginRight: 24,
  },
  firstTabButtonContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: '10px',
    marginBottom: '10px',
  },
  generalTabButtonContainer: {
    display: 'flex',
    flexDirection: 'space-between',
    marginTop: '10px',
    marginBottom: '10px',
    justifyContent: 'space-between',
  },
  recomendationStyles: {
    margin: '10px 0 10px 0',
  },
  floatingLabelStyle: {
    fontSize: 19,
  },
  cardTitle: {
    color: grey700,
  },
  descriptionTextField: {
    margin: '15px 0 15px 0',
  }
};

export default withStyles( styles )( EditTabsDiet );