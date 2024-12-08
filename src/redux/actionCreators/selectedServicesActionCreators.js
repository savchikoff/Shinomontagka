const addSelectedService = (service) => ({
    type: 'ADD_SELECTED_SERVICE',
    payload: service,
});

const removeSelectedService = (service) => ({
    type: 'REMOVE_SELECTED_SERVICE',
    payload: service
})

const clearSelectedServices = () => ({
    type: 'CLEAR_SELECTED_SERVICES'
});

export {
    addSelectedService,
    removeSelectedService,
    clearSelectedServices
}