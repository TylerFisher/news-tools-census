import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    jobTitle: null,
    jobDuties: null,
    newsOrgType: null,
    newsOrgAge: null,
    toolsUsed: [],
    mostImportantTool: null,
    tasksUsed: [],
    toolSatisfaction: null,
    toolRecommendation: null,
    toolRecommendationWhyNot: null,
    stoppedUsing: null,
    whyStoppedUsing: null,
    orgStruggles: [],
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
    updateNewsOrgType(state, value) {
      state.newsOrgType = value;
    },
    updateNewsOrgAge(state, value) {
      state.newOrgAge = value;
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
    updateOrgComparison(state, value) {
      state.orgComparision = value;
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
