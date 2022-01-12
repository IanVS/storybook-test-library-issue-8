import { Meta, StoryObj } from '@storybook/react';
import {within, userEvent} from '@storybook/testing-library';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;


/**
 * This play function should fail, since there is no button named "foo".
 */
export const Primary: StoryObj<React.ComponentPropsWithoutRef<typeof Button>> = {
  args: {
    primary: true,
    label: 'Button'
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('button', {name: 'foo'}));
  }
}
