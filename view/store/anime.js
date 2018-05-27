export const state = () => ({
    episodes: [],
    episodeSize : 0,
    isMounted: false
});

export const mutations = {
    setEpisodes (state, data) {
        state.episodes = data;
        state.episodeSize = data.length;
        state.isMounted = true;
    }
};