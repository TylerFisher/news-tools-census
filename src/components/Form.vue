<template>
  <div id="form">
    <div v-if="showValidationError" class="validation">
      Please fill out all required fields.
    </div>
    <div v-if="showThankYouScreen" class="thank-you">
      <p><strong>Thank you for completing this survey!</strong></p>
    </div>
    <form id="survey" class="boilerform" v-if="!showThankYouScreen">
      <fieldset class="c-form">
        <legend class="c-form__heading">Your job</legend>
        <SingleText
          label="What is your job title?"
          placeholder="Example: News Apps Developer"
          uid="job-title"
          :value="jobTitle"
          :changeMethod="updateJobTitle"
        />
        <Paragraph
          label="Briefly describe your duties in your job."
          placeholder="Example: As the news apps developer at my newspaper, I develop data-driven applications for investigative projects in our newsroom."
          uid="job-desc"
          :value="jobDuties"
          :changeMethod="updateJobDuties"
        />
        <RadioGroup
          question="What type of news organization do you work for?"
          groupName="newsOrgType"
          :storeValue="newsOrgType"
          :changeMethod="updateNewsOrgType"
          :options="newsOrgTypeOptions"
          :otherValue="newsOrgTypeOther"
          :otherChangeMethod="updateNewsOrgTypeOther"
        />
        <RadioGroup
          question="How old is your news organization?"
          groupName="newsOrgAge"
          :storeValue="newsOrgAge"
          :changeMethod="updateNewsOrgAge"
          :options="newsOrgAgeOptions"
        />
      </fieldset>
      <fieldset class="c-form">
        <legend class="c-form__heading">
          Third-party software
        </legend>
        <ToolsSelector />
        <p v-if="!mostImportantTool">Please answer the above questions to continue this section of the survey.</p>
        <div class="dependent" v-if="mostImportantTool">
          <CheckboxGroup
            question="What tasks do you use this software for (check all that apply)?"
            :storeValue="tasksUsed"
            :changeMethod="updateTasksUsed"
            :options="toolUseOptions"
            :otherValue="tasksUsedOther"
            :otherChangeMethod="updateTasksUsedOther"
          >
          </CheckboxGroup>
          <RadioGroup
            question="How satisfied are you with this software?"
            groupName="toolSatisfaction"
            :storeValue="toolSatisfaction"
            :changeMethod="updateToolSatisfaction"
            :options="toolSatisfactionOptions"
          />
          <RadioGroup
            question="How strongly would you recommend this software to someone else performing your job?"
            groupName="toolRecommendation"
            :storeValue="toolRecommendation"
            :changeMethod="updateToolRecommendation"
            :options="toolRecommendationOptions"
          >
          </RadioGroup>
          <Paragraph
            label="If not, why not? (optional)"
            uid="if-not-recommend"
            :value="toolRecommendationWhyNot"
            :changeMethod="updateToolRecommendationWhyNot"
          />
          <SingleText
            label="Is there any software you have recently stopped using? (optional)"
            uid="stopped-using"
            placeholder="name of software"
            :value="stoppedUsing"
            :changeMethod="updateStoppedUsing"
          />
          <Paragraph
            label="If so, why? (optional)"
            uid="if-stopped-using"
            placeholder="Why did you stop using the software?"
            :value="whyStoppedUsing"
            :changeMethod="updateWhyStoppedUsing"
          />
        </div>
      </fieldset>
      <fieldset class="c-form">
        <legend class="c-form__heading">Organizational needs</legend>
        <RadioGroup
          question="Whether you work directly with this technology or not, where do you think your organization struggles most technologically?"
          :storeValue="orgStruggles"
          :changeMethod="updateOrgStruggles"
          :options="struggleOptions"
          :otherValue="orgStrugglesOther"
          :otherChangeMethod="updateOrgStrugglesOther"
        />
        <RadioGroup
          question="How well do you think your organization’s digital product compares to its regional competitors?"
          groupName="orgComparison"
          :storeValue="orgComparison"
          :changeMethod="updateOrgComparison"
          :options="orgComparisonOptions"
        />
        <RadioGroup
          question="How well do you feel that leadership communicates your organization’s digital strategy to you?"
          groupName="orgCommunication"
          :storeValue="orgCommunication"
          :changeMethod="updateOrgCommunication"
          :options="orgCommunicationOptions"
        />
        <RadioGroup
          question="How confident are you that your organization’s digital strategy is sustainable?"
          groupName="orgSustainability"
          :storeValue="orgSustainability"
          :changeMethod="updateOrgSustainability"
          :options="orgSustainabilityOptions"
        />
      </fieldset>
      <fieldset class="c-form">
        <legend class="c-form__heading">Wrapping up</legend>
        <RadioGroup
          question="Would you be willing to talk further with us about the software you use in your job?"
          groupName="talkMore"
          :storeValue="talkMore"
          :changeMethod="updateTalkMore"
          :options="talkMoreOptions"
        />
        <Email
          uid="email"
          label="If so, please enter your email (optional)"
          :value="email"
          :changeMethod="updateEmail"
        />
        <div class="c-form__row">
          <a class="submit" href="#" v-on:click="onSubmit">Submit</a>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import postData from '../api/sheet';
import questions from '../api/questions';

import CheckboxGroup from './form-components/CheckboxGroup.vue';
import Email from './form-components/Email.vue';
import Paragraph from './form-components/Paragraph.vue';
import RadioGroup from './form-components/RadioGroup.vue';
import SingleText from './form-components/SingleText.vue';
import ToolsSelector from './form-components/ToolsSelector.vue';

export default {
  name: 'Form',
  components: {
    CheckboxGroup,
    Email,
    Paragraph,
    RadioGroup,
    SingleText,
    ToolsSelector,
  },
  data() {
    return {
      ...questions,
      showValidationError: false,
      showThankYouScreen: false,
    };
  },
  computed: mapState([
    'jobTitle',
    'jobDuties',
    'newsOrgType',
    'newsOrgTypeOther',
    'newsOrgAge',
    'tasksUsed',
    'tasksUsedOther',
    'toolSatisfaction',
    'toolRecommendation',
    'toolRecommendationWhyNot',
    'stoppedUsing',
    'whyStoppedUsing',
    'orgStruggles',
    'orgStrugglesOther',
    'orgComparison',
    'orgCommunication',
    'orgSustainability',
    'talkMore',
    'email',
    'mostImportantTool',
  ]),
  methods: {
    ...mapMutations([
      'updateJobTitle',
      'updateJobDuties',
      'updateNewsOrgType',
      'updateNewsOrgTypeOther',
      'updateNewsOrgAge',
      'updateTasksUsed',
      'updateTasksUsedOther',
      'updateToolSatisfaction',
      'updateToolRecommendation',
      'updateToolRecommendationWhyNot',
      'updateStoppedUsing',
      'updateWhyStoppedUsing',
      'updateOrgStruggles',
      'updateOrgStrugglesOther',
      'updateOrgComparison',
      'updateOrgCommunication',
      'updateOrgSustainability',
      'updateTalkMore',
      'updateEmail',
    ]),
    onSubmit() {
      const formPost = postData(this.$store.state);

      if (!formPost) {
        this.showValidationError = true;
      } else {
        this.showValidationError = false;
        this.showThankYouScreen = true;
      }
    },
  },
};
</script>


<style lang="scss">
// Vars
$rhythm: 50px;

.validation {
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  background-color: #D62828;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.thank-you {
  max-width: 600px;
  margin: 0 auto;
  p { font-size: 20px; }
}

.boilerform .c-label+[class*="field"] {
  margin-top: 5px;
}

.boilerform [class*="-field"] {
  font-family: 'Work Sans', sans-serif;

  &:focus {
    border-color: #D62828
  }
}

.boilerform .c-form__heading {
  border-color: #D62828;
}

.boilerform .c-check-field {
  align-items: center;
}

.boilerform .c-check-field__decor::after {
  background-color: #D62828;
}

// Form component
.c-form {
  display: block;
  border: none;
  margin: #{ $rhythm * 2 } auto;
  max-width: 600px;

  &__heading {
    display: block;
    width: 100%;
    font-size: 2rem;
    line-height: 1.5;
    border-bottom: 1px solid #ccc;
    padding: 0 0 5px 0;
    margin: 0 0 10px 0;
    font-family: 'Work Sans', sans-serif;
  }

  .c-label {
    font-size: 1.1rem;
    line-height: 1.5;
    font-family: 'Work Sans', sans-serif;
  }

  &__row {
    & + & {
      padding-top: $rhythm;
    }

    // Make any field fill at least 2/3
    [name] {
      min-width: percentage(2/3);
    }
  }

  .submit {
    background-color: #D62828;
    color: white;
    padding: 15px;
    font-family: 'Work Sans', sans-serif;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      background-color: darken(#D62828, 10%);
    }
  }
}
</style>
