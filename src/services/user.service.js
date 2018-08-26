/**
 * @param {string} type can take two values: ADMINITRATOR, REGULAR or PREMIUM
 */
const isAuthenticated = type => type.includes( localStorage.getItem( 'NC_type' ) );

const logout = cb => {
    localStorage.clear();
    return cb();
};

export {
    isAuthenticated,
    logout
};