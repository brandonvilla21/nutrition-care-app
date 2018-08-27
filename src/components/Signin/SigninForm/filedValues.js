/**
 * Do not alter the order of the objects due it depends in ./index.js
 */
export default [
    {
        name: 'name',
        label: 'Nombre',
        margin: 'normal',
        fullWidth: true,
        required: true
    },
    {
        name: 'lastName',
        label: 'Apellidos',
        margin: 'normal',
        fullWidth: true,
        required: true
    },
    {
        name: 'email',
        label: 'Correo electrónico',
        margin: 'normal',
        type: 'email',
        fullWidth: true,
        required: true
    },
    {
        name: 'password',
        label: 'Contraseña',
        margin: 'normal',
        type: 'password',
        fullWidth: true,
        required: true
    },
    {
        name: 'passwordConfirm',
        label: 'Confirmar password',
        margin: 'normal',
        type: 'password',
        fullWidth: true,
        required: true
    }
];