/**
 * Prepare a custom config object compatible with an axios instance.
 * It takes all the pass params inside the 'params' argument and returns
 * a new object that is compatible with an axios intance.
 * Mainly create to be able to consume the Loopback API more easily.
 *
 * @author Marcos Barrera del Río <elyomarcos@gmail.com>
 * @param {Object} params - The params that are wanted into the request.
 * @returns {Object} The compatible custom axios instance with the needed
 * params.

 */
const sendLoopbackParams = ( params ) => {
  return { params: { filter: { ...params } } };
};

export default sendLoopbackParams;