import { setProjectAnnotations } from '@storybook/react';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './.storybook/preview';

// This applies your global Storybook configuration (decorators, theme provider) 
// and loads the React renderer.
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);

