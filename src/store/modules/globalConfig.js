import Vue from 'vue'
import { MOBILE, DESKTOP, TABLET } from '@/constants'
import currentDevice from '@/utils/detect-device'
const state = {
  lang: 'vi',
  device: null,
  isMobile: null,
  isDesktop: null,
  isTablet: null
}

const mutations = {
  UPDATE(state, config) {
    state.lang = config.lang || state.lang
  },
  UPDATE_LANG(state, lang) {
    state.lang = lang || state.lang
  },
  DETECT_DEVICE(state, device) {
    state.device = device || state.device
    state.isMobile = state.device === MOBILE
    state.isDesktop = state.device === DESKTOP
    state.isTablet = state.device === TABLET
  }
}

const actions = {
  detectDevice({ commit }) {
    Vue.config.device = currentDevice()
    commit('DETECT_DEVICE', Vue.config.device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
