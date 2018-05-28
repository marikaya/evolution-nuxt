export const state = () => ({
    boxState: false
});

export const mutations = {
    SET_BOX_DISPLAY: (state, boxState) => {
        if(state.boxState === boxState){
            state.boxState = false;
        }else {
            state.boxState = boxState;
        }
    }
};

export const actions = {
    boxToggle({commit}, boxState) {
        commit('SET_BOX_DISPLAY', boxState);
    }
};