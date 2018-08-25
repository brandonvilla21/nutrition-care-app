/**
 * @param {string} type can take two values: ADMINITRATOR, REGULAR or PREMIUM
 */
const isAuthenticated = type => type.includes( localStorage.getItem( 'NC_type' ) );

export {
    isAuthenticated
};