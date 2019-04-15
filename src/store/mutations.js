import * as TYPES from './mutation-types';

export default {
  [TYPES.NAME] (state, data) {
    if (!data) return;
    state.name = data;
  },
  [TYPES.AGE] (state, data) {
    if (!data) return;
    state.age = data;
  },
  [TYPES.ADDRESS] (state, data) {
    if (!data) return;
    state.address = data;
  },
  [TYPES.HODDY] (state, data) {
    if (!data) return;
    state.hoddy = data;
  },
  [TYPES.SPECIALTY] (state, data) {
    if (!data) return;
    state.specialty = data;
  }
}