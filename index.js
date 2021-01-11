const concreteControl = (concrete) => {
    const operations = concrete.split('/')[0].toUpperCase().split(""); // get all the operations in the concrete
    const type = concrete.split('/')[1];  // get the type of concrete operations

    return {type, operations}; // return an object with type and all operations in the concrete
};

const effectiveControl = (effective) => {
    const timeOperations = effective.split(':')[0].split('/')[0].toUpperCase().split(""); // get all the operations in the time
    const userOperations = effective.split(':')[1].split('/')[0].toUpperCase().split(""); // get all the operations in the users

    return {Time: timeOperations, Users: userOperations}
};

const validationOperations = operations => {
    const operationsType =  ["G", "U","P", "D", "H", "O"] // array of allowed types of operations

    return operationsType.map(operation => operations.includes(operation)).some(include => include) // return whether the values have passed validation
}

const acl_concrete_dominated = (concrete, effective) => {
    const typeConcrete =  concreteControl(concrete).type
    const operationsConcrete = concreteControl(concrete).operations
    const operationsEffective = effectiveControl(effective)[typeConcrete]

    if(!validationOperations(operationsConcrete) || !validationOperations(operationsEffective)) return 'error operations' // validation  operations


    return operationsConcrete.map(operation => operationsEffective.includes(operation)).some(include => include) // function return true in the affirmative case, false in the negative and to throw on error of operations not valid
}






