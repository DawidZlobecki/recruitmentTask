import React from 'react';
import {Meta, StoryFn} from "@storybook/react";
import { withRedux } from './decorators';
import Pagination, { PaginationProps } from '../components/Pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    decorators: [withRedux],
  } as Meta;

  const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />

  const WithNextPageActive = Template.bind({});
    WithNextPageActive.args = {
        hasNextPage: true,
        isLoading: false,
        pageNumber: 5,
    }

  const WithoutNextPageActive = Template.bind({});
    WithoutNextPageActive.args = {
        hasNextPage: false,
        isLoading: false,
        pageNumber: 5,
    }
    
    const AsFirstItem = Template.bind({});
      AsFirstItem.args = {
          hasNextPage: true,
          isLoading: false,
          pageNumber: 1,
      }

  export {WithNextPageActive, WithoutNextPageActive, AsFirstItem}