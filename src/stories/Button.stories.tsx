// src/stories/Button.stories.tsx

import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button>Hello, Primary Button!</Button>;
