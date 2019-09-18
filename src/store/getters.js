const getters = {
  getCurrentDevice: state => state.globalConfig.device,
  getIsMobile: state => state.globalConfig.isMobile,
  getIsDesktop: state => state.globalConfig.isDesktop,
  getIsTablet: state => state.globalConfig.isTablet
}
export default getters
