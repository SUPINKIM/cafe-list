import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { lazy } from 'react';

//import '@stackflow/plugin-basic-ui/index.css';

export const { Stack, useFlow, activities, actions } = stackflow({
  transitionDuration: 350,
  activities: {
    Home: lazy(() => import('@/activities/home')),
    Search: lazy(() => import('@/activities/search')),
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'Home',
});

export type StackflowActivities = typeof activities;