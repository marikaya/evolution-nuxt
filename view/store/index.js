export const state = () => ({
});

export const mutations = {
};

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        if (req.session && req.session.user) {
            commit('auth/SET_USER', req.session.user)
        }
    }
};