<template>
  <div id="form">
    <form id="survey" class="boilerform">
      <fieldset class="c-form">
        <legend class="c-form__heading">Your job</legend>
        <SingleText
          label="What is your job title?"
          placeholder="Editor"
          uid="job-title"
        />
        <Paragraph
          label="Briefly describe your duties in your job."
          placeholder="Editing words"
          uid="job-desc"
        />
        <RadioGroup label="What type of news organization do you work for?">
          <RadioButton
            radioGroupName="news-org-type"
            uid="metro"
            label="Metro newspaper publisher"
          />
          <RadioButton
            radioGroupName="news-org-type"
            uid="weekly"
            label="Weekly newspaper"
          />
          <RadioButton
            radioGroupName="news-org-type"
            uid="magazine"
            label="Magazine"
          />
        </RadioGroup>
        <RadioGroup label="How old is your news organization?">
          <RadioButton
            radioGroupName="news-org-age"
            uid="baby"
            label="1-9 years"
          />
          <RadioButton
            radioGroupName="news-org-age"
            uid="teen"
            label="10-24 years"
          />
          <RadioButton
            radioGroupName="news-org-age"
            uid="young"
            label="25-49 years"
          />
          <RadioButton
            radioGroupName="news-org-age"
            uid="old"
            label="50+ years"
          />
        </RadioGroup>
      </fieldset>
      <fieldset class="c-form">
        <legend class="c-form__heading">
          Third-party software
        </legend>
        <ToolsSelector />
        <CheckboxGroup
          label="What tasks do you use this software for (check all that apply)?"
        >
          <Checkbox
            uid="information-gathering"
            label="Information Gathering"
          />
          <Checkbox
            uid="editing"
            label="Editing"
          />
          <Checkbox
            uid="writing-producing"
            label="Writing or producing"
          />
          <Checkbox
            uid="analysis"
            label="Analysis"
          />
        </CheckboxGroup>
        <RadioGroup label="How satisfied are you with this software?">
          <RadioButton
            radioGroupName="software-satisfied"
            uid="software-very-satisfied"
            label="Very satisfied"
          />
          <RadioButton
            radioGroupName="software-satisfied"
            uid="software-somewhat-satisfied"
            label="Somewhat satisfied"
          />
          <RadioButton
            radioGroupName="software-satisfied"
            uid="software-neither"
            label="Neither satisfied nor dissatisfied"
          />
          <RadioButton
            radioGroupName="software-satisfied"
            uid="software-somewhat-dissatisfied"
            label="Somewhat dissatisfied"
          />
          <RadioButton
            radioGroupName="software-satisfied"
            uid="software-very-dissatisfied"
            label="Very dissatisfied"
          />
        </RadioGroup>
        <RadioGroup
          label="How strongly would you recommend this software to someone else performing your job?"
        >
          <RadioButton
            radioGroupName="software-recommend"
            uid="recommend-very"
            label="Very enthusiastically"
          />
          <RadioButton
            radioGroupName="software-recommend"
            uid="recommend-somewhat"
            label="Somewhat enthusiastically"
          />
          <RadioButton
            radioGroupName="software-recommend"
            uid="recommend-neither"
            label="Neither enthusiastic nor unhappy"
          />
          <RadioButton
            radioGroupName="software-recommend"
            uid="recommend-no"
            label="I would not recommend this software"
          />
          <RadioButton
            radioGroupName="software-recommend"
            uid="recommend-idk"
            label="I'm not sure"
          />
        </RadioGroup>
        <Paragraph label="If not, why not?" uid="if-not-recommend" />
        <SingleText
          label="Is there any software you have recently stopped using?"
          uid="stopped-using"
          placeholder="name of software"
        />
        <Paragraph
          label="If so, why?"
          uid="if-stopped-using"
          placeholder="Why did you stop using the software?"
        />
      </fieldset>
      <fieldset class="c-form">
        <legend class="c-form__heading">Organizational needs</legend>
        <CheckboxGroup
          label="Whether you work directly with this technology or not, where do you think your organization struggles most technologically? Please pick no more than two."
        >
          <Checkbox
            uid="content-management"
            label="Content management"
          />
          <Checkbox
            uid="data-storage"
            label="Data storage"
          />
          <Checkbox
            uid="data-visualization"
            label="Data visualization"
          />
          <Checkbox
            uid="product-design"
            label="Product design"
          />
        </CheckboxGroup>
        <RadioGroup
          label="How well do you think your organization’s digital product compares to its regional competitors?"
        >
          <RadioButton
            radioGroupName="digital-comparison"
            uid="digital-very-favorably"
            label="Very favorably"
          />
          <RadioButton
            radioGroupName="digital-comparison"
            uid="digital-somewhat-favorably"
            label="Somewhat favorably"
          />
          <RadioButton
            radioGroupName="digital-comparison"
            uid="digital-neither"
            label="Neither favorably nor unfavorably"
          />
          <RadioButton
            radioGroupName="digital-comparison"
            uid="digital-somewhat-unfavorably"
            label="Somewhat unfavorably"
          />
          <RadioButton
            radioGroupName="digital-comparison"
            uid="digital-very-unfavorably"
            label="Very unfavorably"
          />
        </RadioGroup>
        <RadioGroup
          label="How well do you feel that leadership communicates your organization’s digital strategy to you?"
        >
          <RadioButton
            radioGroupName="communication"
            uid="communication-very-clearly"
            label="Very clearly"
          />
          <RadioButton
            radioGroupName="communication"
            uid="communication-somewhat-clearly"
            label="Somewhat clearly"
          />
          <RadioButton
            radioGroupName="communication"
            uid="communication-not-very-clearly"
            label="Not very clearly"
          />
          <RadioButton
            radioGroupName="communication"
            uid="communication-not-at-all-clearly"
            label="Not at all clearly"
          />
          <RadioButton
            radioGroupName="communication"
            uid="communication-idk"
            label="I don't know"
          />
        </RadioGroup>
        <RadioGroup
          label="How confident are you that your organization’s digital strategy is sustainable?"
        >
          <RadioButton
            radioGroupName="confidence"
            uid="very-confident"
            label="Very confident"
          />
          <RadioButton
            radioGroupName="confidence"
            uid="somewhat-confident"
            label="Somewhat confident"
          />
          <RadioButton
            radioGroupName="confidence"
            uid="neither-confident"
            label="Neither confident nor unconfident"
          />
          <RadioButton
            radioGroupName="confidence"
            uid="not-very-confident"
            label="Not very confident"
          />
          <RadioButton
            radioGroupName="confidence"
            uid="not-at-all-confident"
            label="Not at all confident"
          />
        </RadioGroup>
      </fieldset>
      <fieldset class="c-form">
        <legend class="c-form__heading">Wrapping up</legend>
        <RadioGroup
          label="Would you be willing to talk further with us about the software you use in your job?"
        >
          <RadioButton
            radioGroupName="talk-more"
            uid="talk-more-yes"
            label="Yes"
          />
          <RadioButton
            radioGroupName="talk-more"
            uid="talk-more-no"
            label="No"
          />
        </RadioGroup>
        <Email uid="email" label="If so, please enter your email" />
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Checkbox from './form-components/Checkbox.vue';
import CheckboxGroup from './form-components/CheckboxGroup.vue';
import Email from './form-components/Email.vue';
import Paragraph from './form-components/Paragraph.vue';
import RadioButton from './form-components/RadioButton.vue';
import RadioGroup from './form-components/RadioGroup.vue';
import SingleText from './form-components/SingleText.vue';
import ToolsSelector from './form-components/ToolsSelector.vue';

export default {
  name: 'Form',
  components: {
    Checkbox,
    CheckboxGroup,
    Email,
    Paragraph,
    RadioButton,
    RadioGroup,
    SingleText,
    ToolsSelector,
  },
};
</script>


<style lang="scss">
// Vars
$rhythm: 50px;

// Form component
.c-form {
  display: block;
  border: none;
  margin: #{ $rhythm * 2 } auto;
  max-width: 600px;

  &__heading {
    display: block;
    width: 100%;
    font-size: 3rem;
    line-height: 1.2;
    border-bottom: 1px solid #ccc;
    padding: 0 0 5px 0;
    margin: 0 0 10px 0;
  }

  .c-label {
    font-size: 1rem;
    margin-bottom: 10px;
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
}
</style>
