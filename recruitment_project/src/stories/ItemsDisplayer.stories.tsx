import React from 'react';
import {Meta, StoryFn} from "@storybook/react";
import ItemsDisplayer, { ItemsDisplayerProps } from '../components/ItemsDisplayer';
import { withRedux } from './decorators';

export default {
    title: 'Components/ItemsDisplayer',
    component: ItemsDisplayer,
    decorators: [withRedux],
  } as Meta;

  const Template: StoryFn<ItemsDisplayerProps> = (args) => <ItemsDisplayer {...args} />;

  const Loading = Template.bind({});
    Loading.args = {
        itemsOnPage: 10,
        order: 'asc',
        tags: [],
        isLoading: true,
    };

  const Loaded = Template.bind({});
    Loaded.args = {
        itemsOnPage: 10,
        order: 'asc',
        tags: [
            { name: 'Tag 1', count: 10 },
            { name: 'Tag 2', count: 20 },
            { name: 'Tag 3', count: 30 },
            { name: 'Tag 4', count: 40 },
            { name: 'Tag 5', count: 50 },
            { name: 'Tag 6', count: 60 },
            { name: 'Tag 7', count: 70 },
            { name: 'Tag 8', count: 80 },
            { name: 'Tag 9', count: 90 },
            { name: 'Tag 10', count: 100 },
        ],
        isLoading: false,
    };

    export { Loading, Loaded };
