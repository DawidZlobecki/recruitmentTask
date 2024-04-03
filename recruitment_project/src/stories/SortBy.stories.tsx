import React from 'react';
import {Meta, StoryFn} from "@storybook/react";
import { withRedux } from './decorators';
import SortBy, { SortByProps } from '../components/SortBy';

export default {
    title: 'Components/SortBy',
    component: SortBy,
    decorators: [withRedux],
  } as Meta;

  const Template: StoryFn<SortByProps> = (args) => <SortBy {...args} />;

  const SortByPopularity = Template.bind({});
    SortByPopularity.args = {
      sortBy: 'popular'
    }

  const SortByName = Template.bind({});
    SortByName.args = {
      sortBy: 'name'
    }

  const SortByActivity = Template.bind({});
    SortByActivity.args = {
      sortBy: 'activity'
    }

  export { SortByPopularity, SortByName, SortByActivity }