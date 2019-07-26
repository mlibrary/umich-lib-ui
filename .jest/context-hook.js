import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

/*
  Since Storyshot is running under Jest, we need to polyfill
  require.context() functionality to work with Jest.
  The easiest way is to integrate it to babel.

  https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
*/
registerRequireContextHook();