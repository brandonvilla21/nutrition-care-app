/**
 * @param {string} type can take two values: either ADMINITRATOR or CUSTOMER
 */
const isAuthenticated = type => type.includes( localStorage.getItem( 'NC_type' ) );

export {
    isAuthenticated
};