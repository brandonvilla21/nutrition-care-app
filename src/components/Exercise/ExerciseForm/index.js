import React, { Component } from 'react/';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import Card from '@material-ui/core/Card';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import originalAxios from 'axios';
import axios from '../../../axios';
import SelectableTable from '../../shared/SelectableTable';


const customAxiosConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
};

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


  /**
   * 
   * Generic method to handle the input events, mainly the
   * text input events.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param event - Native input text event
   */
  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  /**
   * 
   * Handle the image file manipulation for the file input.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param event - Native input file event to get the selected
   * image file.
   */
  handleImageSelectedHandler = event => {
    
    if ( event.target.files && event.target.files[0] ) {
      let reader = new FileReader();
      reader.readAsDataURL( event.target.files[0] );
      reader.onload = ( e ) => this.setState({ srcImage: e.target.result });
      this.setState({ selectedImage: event.target.files[0]  });
    }

  }

  
  /**
   * 
   * Handle the registration for the exercise while emitting to the
   * parent component if the submission was correct or not, in order
   * to show the proper modal
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param event - Native input file event to get the selected
   * image file.
   */
  handleSubmit = event => {
    event.preventDefault();
    this.submitExercise()
      .then( ({ exerciseId }) => {
        if ( exerciseId ) {
          this.props.onSubmit( true );
          this.setState({ ...initialState });
        } else {
          this.props.onSubmit( false );
        }
      })
      .catch( err => {
        console.log( 'err: ', err );
        this.props.onSubmit( false );
      });
  };


  /**
   * 
   * Get the current body areas on the API.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
  getBodyAreas = () => {

    const url = '/BodyAreas';

    axios.get( url )
      .then( response => response.data )
      .then( bodyAreas => this.setState({ bodyAreas }) )
      .catch( err =>  { throw err });

  }


  /**
   * 
   * Make the needed http post request to send the current
   * exercise to the API with the 'multipart/form-data' header.
   * It is required to set that header in order to send a file
   * in this manner.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
  submitExercise = () => {

    const accessToken = localStorage.getItem( 'NC_token' );

    const url = '/Exercises/fullExerciseRegistration';
    const formData = new FormData();
    formData.append( 'exercise', JSON.stringify({ name: this.state.name }) );
    formData.append( 'bodyAreaDetails', JSON.stringify( this.state.selectedTableElements ) );
    formData.append( 'fileImage', this.state.selectedImage );

    //This new instance was used instead of importing the
    //custom axios instance, because of this issue.
    // https://github.com/axios/axios/pull/1395
    //This is a workaround to avoid changes on the global
    //axios instance.
    const customAxios = originalAxios.create({
      ...customAxiosConfig,
      headers: {
        ...customAxiosConfig.headers,
        Authorization: accessToken,
      }
    });

    return customAxios.post( url, formData )
        .then( res => res.data ); 
  };


  /**
   * 
   * Handle the toggling for the selectable table that contains
   * the body areas.
   * @param original - The last selected item that was selected on the
   * selectable table.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
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
  
  
  /**
   * 
   * Set a reference for the input file element on the 
   * render method in order to be able to trigger a file selection
   * on the input file from another button.
   * @param inputFile the native reference for the input file.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
  setFileInputRef = inputFile => this.fileInput = inputFile;

  
  /**
   * 
   * Triggers a selection for the file input reference.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
  selectFile = () => this.fileInput.click();


  /**
   * 
   * Make simple validation to check if the user has filled and
   * selected all the proper data to create a new exercise
   * record.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   */
  isValidExercise() {

    const { selectedImage, selectedTableElements, name } = this.state;
    return selectedImage !== null && selectedTableElements.length > 0 && name.length > 0;

  }

  render() {

    const { classes } = this.props;

    let image = null;

    if( this.state.srcImage !== null )
      image = <Card className={classes.card}>
                <img className={classes.media} src={this.state.srcImage} alt="Exercise"/>
              </Card>;

    return (
      <form>

        <div className={classes.generalContainer}>

          <div className={classes.inputContainer}>

          <TextField
            name='name'
            label='Nombre del ejercicio'
            placeholder='Ingrese el nombre del ejercicio'
            margin='normal'
            value={this.state.name}
            onChange={this.handleInput}
            type="text"
            className={classes.textFieldName}            
          />

          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={this.selectFile}>
              { this.state.srcImage ? 'Cambiar imagen' : 'Selecciona una imagen'} 
              <AddAPhoto className={classes.rightIcon} />
          </Button>

          </div>

          {image}

        </div>
        

        <input 
          style={{ display: 'none' }}
          ref={this.setFileInputRef}
          type="file" 
          onChange={this.handleImageSelectedHandler} 
          accept="image/png, image/jpeg, image/jpg, image/gif"
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
            disabled={!this.isValidExercise()}
            onClick={this.handleSubmit}
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
