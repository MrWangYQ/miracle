export default {
  name (result) {
    result.commit('setName', 'action');
  },
  age (result) {
    result.commit('setAge', 'action');
  },
  address (result) {
    result.commit('setAddress', 'action');
  },
  hoddy (result) {
    result.commit('setHoddy', 'action');
  },
  specialty (result) {
    result.commit('setSpecialty', 'action');
  }
}