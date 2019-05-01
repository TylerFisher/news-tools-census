const REQUIRED_FIELDS = [
  'jobTitle',
  'jobDuties',
  'newsOrgType',
  'newsOrgAge',
  'tasksUsed',
  'toolSatisfaction',
  'toolRecommendation',
  'orgStruggles',
  'orgComparison',
  'orgCommunication',
  'orgSustainability',
  'talkMore',
];

export default (state) => {
  let validated = true;
  Object.keys(state).forEach((key) => {
    if (REQUIRED_FIELDS.indexOf(key) >= 0 && !state[key]) {
      console.log(key);
      validated = false;
    }
  });
  return validated;
};
