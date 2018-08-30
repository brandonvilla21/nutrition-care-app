/**
 * 
 * @param {object} parameters An object with all the parameters
 * A parameter can be "filter" and it can be used like that:
 * (Suppose you want to fetch all Exercises and want to fetch
 * its "bodyAreaExerciseDetails" and "exerciseRoutineDetails" relations
 * and the nested "exercise" relation )
    filter: {
        include: [
            { 
                relation: 'bodyAreaExerciseDetails' ,
                scope: {
                    include: {
                        relation: 'exercise'
                    }
                }
            },
            { relation: 'exerciseRoutineDetails' }
        ]
    }
 */
const setParams = parameters => ({
    params: {
        ...parameters
    }
});

export {
    setParams
};