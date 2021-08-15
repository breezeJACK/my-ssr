
export const state = () => ({
    usrInfo: {}
})

export const mutations = {
    changUsrInfo(state, text) {
        state.usrInfo = text
    },
}