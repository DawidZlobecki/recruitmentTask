import React from 'react';
import {Meta, StoryFn} from "@storybook/react";
import { withRedux } from './decorators';
import PageAmountSelect, { PageAmountSelectProps } from '../components/PageAmountSelect';

export default {
    title: 'Components/PageAmountSelect',
    component: PageAmountSelect,
    decorators: [withRedux],
  } as Meta;

  const Template: StoryFn<PageAmountSelectProps> = (args) => <PageAmountSelect {...args} />;

  const Example = Template.bind({});
    Example.args = {
      itemsOnPage: 10
    }

  export { Example }