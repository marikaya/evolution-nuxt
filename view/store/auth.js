export const state = () => ({
    user: null,
    hasError: [],
    loginHasError: [],
    isLoading: false,
});

export const mutations = {
    SET_USER: function (state, user) {
        state.user = user;
    },
    SET_LOADING: function (state, toggle) {
        state.isLoading = toggle;
    },
    SET_ERRORS: function (state, errors) {
        state.hasError = errors;
    },
    SET_LOGIN_ERRORS: function (state, errors) {
        state.loginHasError = errors;
    },
};

export const actions = {
    login({commit}, {username, password, rememberme}) {
        commit('SET_LOADING', true);
        const request = this.$axios.post('user/login',
            {username, password, rememberme});
        request.then(response => {
            if (response.data.error) {
                commit('SET_LOGIN_ERRORS', response.data.errors);
            } else {
                commit('SET_LOGIN_ERRORS', []);
                commit('SET_USER', response.data);
                commit('SET_LOADING', false);
                commit('box/SET_BOX_DISPLAY', false, {root: true})
            }
        });
        request.catch(error => {
            commit('SET_LOGIN_ERRORS', 'Yanlış kullanıcı adı veya şifre.');
            commit('SET_LOADING', false);
        });
    },

    async logout({commit}) {
        commit('SET_LOADING', true);
        await this.$axios.get('/user/logout');
        commit('SET_USER', null);
    },

    async register({commit}, {username, email, password, passwordConfirm}) {
        commit('SET_LOADING', true);
        const {data} = await this.$axios.post('/user/register',
            {username, email, password, passwordConfirm});
        commit('SET_LOADING', false);
        if (data.error) {
            commit('SET_ERRORS', data.errors);
        } else {
            commit('SET_ERRORS', []);
            commit('SET_USER', data);
            commit('box/SET_BOX_DISPLAY', false, {root: true})
        }
    },
};