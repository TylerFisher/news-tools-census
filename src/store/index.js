import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    jobTitle: null,
    jobDuties: null,
    newsOrgName: null,
    newsOrgType: null,
    newsOrgTypeOther: null,
    newsOrgAge: null,
    toolsUsed: [],
    mostImportantTool: null,
    tasksUsed: [],
    tasksUsedOther: null,
    toolSatisfaction: null,
    toolRecommendation: null,
    toolRecommendationWhyNot: null,
    stoppedUsing: null,
    whyStoppedUsing: null,
    orgStruggles: null,
    orgStrugglesOther: null,
    orgComparison: null,
    orgCommunication: null,
    orgSustainability: null,
    talkMore: false,
    email: null,
  },
  mutations: {
    updateJobTitle(state, value) {
      state.jobTitle = value;
    },
    updateJobDuties(state, value) {
      state.jobDuties = value;
    },
    updateNewsOrgName(state, value) {
      state.newsOrgName = value;
    },
    updateNewsOrgType(state, value) {
      state.newsOrgType = value;
    },
    updateNewsOrgTypeOther(state, value) {
      state.newsOrgTypeOther = value;
    },
    updateNewsOrgAge(state, value) {
      state.newsOrgAge = value;
    },
    updateToolsUsed(state, value) {
      state.toolsUsed = value;
    },
    updateMostImportantTool(state, value) {
      state.mostImportantTool = value;
    },
    updateTasksUsed(state, value) {
      state.tasksUsed = value;
    },
    updateTasksUsedOther(state, value) {
      state.tasksUsedOther = value;
    },
    updateToolSatisfaction(state, value) {
      state.toolSatisfaction = value;
    },
    updateToolRecommendation(state, value) {
      state.toolRecommendation = value;
    },
    updateToolRecommendationWhyNot(state, value) {
      state.toolRecommendationWhyNot = value;
    },
    updateStoppedUsing(state, value) {
      state.stoppedUsing = value;
    },
    updateWhyStoppedUsing(state, value) {
      state.whyStoppedUsing = value;
    },
    updateOrgStruggles(state, value) {
      state.orgStruggles = value;
    },
    updateOrgStrugglesOther(state, value) {
      state.orgStrugglesOther = value;
    },
    updateOrgComparison(state, value) {
      state.orgComparison = value;
    },
    updateOrgCommunication(state, value) {
      state.orgCommunication = value;
    },
    updateOrgSustainability(state, value) {
      state.orgSustainability = value;
    },
    updateTalkMore(state, value) {
      state.talkMore = value;
    },
    updateEmail(state, value) {
      state.email = value;
    },
  },
  strict: debug,
});
