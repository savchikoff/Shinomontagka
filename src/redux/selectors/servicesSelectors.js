const selectAllServices = (state) => state.services.data;
const selectAllServicesNames = (state) => state.services.data.map(service => Object.values(service)[1]);
const selectServiceById = (state, id) => state.services.data[id];

const selectSelectedServices = (state) => state.selectedServices.selectedServices;

export {
    selectAllServices,
    selectServiceById,
    selectSelectedServices
}
