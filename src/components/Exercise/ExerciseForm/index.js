import React, { Component } from 'react/';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import Card from '@material-ui/core/Card';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import axios from '../../../axios';
import SelectableTable from '../../shared/SelectableTable';

const initialState = {
  name: '',
  bodyAreas: [],
  selectedTableElements: [],
  selectedImage: null,
  srcImage: null
};

class ExerciseForm extends Component {
 
  state = initialState;

  componentDidMount() {
    this.getBodyAreas();
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageSelectedHandler = event => {
    
    if ( event.target.files && event.target.files[0] ) {
      let reader = new FileReader();
      reader.readAsDataURL( event.target.files[0] );
      reader.onload = ( e ) => this.setState({ srcImage: e.target.result });
      this.setState({ selectedImage: event.target.files[0] });
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    this.submitExercise( this.state )
      .then( exercise => {
        if ( exercise.id ) {
          this.props.onSubmit( true );
          this.setState({ ...initialState });
        } else {
          this.props.onSubmit( false );
        }
      })
      .catch( err => this.props.onSubmit( false ) );
  };

  getBodyAreas = () => {

    const url = '/BodyAreas';

    axios.get( url )
      .then( response => response.data )
      .then( bodyAreas => this.setState({ bodyAreas }) )
      .catch( err =>  {
        throw err;
      });
  }

  submitExercise = exercise => {
    // return axios.post( '/Exercises', exercise )
    //     .then( res => res.data ); 
  };

  toggleRow( original ) {
      
    let selectedTableElements = [
      ...this.state.selectedTableElements
    ];
    const elementIndex = selectedTableElements.findIndex( element => element.id == original.id );
    // check to see if the key exists
    if ( elementIndex >= 0 ) {
      // it does exist so we will remove it using destructing
      selectedTableElements = [
        ...selectedTableElements.slice( 0, elementIndex ),
        ...selectedTableElements.slice( elementIndex + 1 )
      ];

    } else {
      // it does not exist so add it
      selectedTableElements.push( original );
    }
    // update the state
    this.setState({ selectedTableElements });

  }
  
  setFileInputRef = inputFile => this.fileInput = inputFile;

  selectFile = () => this.fileInput.click()


  render() {

    const { classes } = this.props;

    let image = null;

    if( this.state.srcImage !== null )
      image = <Card className={classes.card}>
                <img className={classes.media} src={this.state.srcImage} alt="Exercise"/>
              </Card>;

    return (
      <form onSubmit={this.handleSubmit}>

        <TextField
          name='name'
          label='Nombre del ejercicio'
          placeholder='Ingrese el nombre del ejercicio'
          margin='normal'
          value={this.state.name}
          onChange={this.handleInput}
          type="text"
        />

        {image}

        <Button 
          variant="contained" 
          color="default" 
          className={classes.button}
          onClick={this.selectFile}>
            Selecciona una imagen
            <AddAPhoto className={classes.rightIcon} />
        </Button>

        <input 
          style={{ display: 'none' }}
          ref={this.setFileInputRef}
          type="file" 
          onChange={this.handleImageSelectedHandler} 
          accept="image/png, image/jpeg"
        />

        <SelectableTable
          elements={this.state.bodyAreas}
          selectedElements={this.state.selectedTableElements}
          mainTableHeader="SELECCIONA LAS PARTES DEL CUERPO RELACIONADAS A ESTE EJECICIO"
          defaultPageSize={5}
          noDataTextMainTable="No hay datos actualmente :("
          columns={reactTablecolumns}
          onToggleRow={this.toggleRow.bind( this )}
          enableSecondaryTable={false}
        />

        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            className={classes.button}
            color="primary"
            variant="contained"
            disabled
            onClick={this.handleClick}
          >
            Registrar ejercicio
          </Button>
        </div>
      </form>
    );
  }
}

const reactTablecolumns = [
  {
    Header: 'ID',
    accessor: 'id',
    maxWidth: 100
  },
  {
    Header: 'Descripción',
    accessor: 'description'
  }
];

export default withStyles( styles, { withTheme: true })( ExerciseForm );
