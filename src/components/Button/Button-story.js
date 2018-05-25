import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from '../Button';

const storyProps = {
  onClick: action('onClick')
};

storiesOf('Buttons', module)
  .add('Primary buttons',
    withInfo(`
      Use buttons to move though a transaction. Aim to use only one primary button per page.

      Primary buttons should be used for the principle call to action
      on the page. Modify the behavior of the button by changing its event properties.

      The example below shows Primary Button component.
    `)(() =>
      <React.Fragment>
        <Button {...storyProps}>Primary button</Button>
        &nbsp;
        <Button {...storyProps} href="#">Primary link</Button>
      </React.Fragment>
    )
  )
  .add('Secondary buttons',
    withInfo(`
      Buttons are used to initialize an action, either in the background or foreground of an experience. Secondary buttons should be used for secondary actions on each page.

      Modify the behavior of the button by changing its property events. The example below shows a Secondary Button component.
    `)(() =>
      <React.Fragment>
        <Button {...storyProps} kind="secondary">Secondary button</Button>
        &nbsp;
        <Button {...storyProps} kind="secondary" href="#">Secondary link</Button>
      </React.Fragment>
    )
  )
  .add('Tertiary buttons',
    withInfo(`
      Tertiary buttons are best used for small UI interactions that don't require a strong presence on the page.
    `)(() =>
      <React.Fragment>
        <Button {...storyProps} kind="tertiary">Tertiary button</Button>
        &nbsp;
        <Button {...storyProps} kind="tertiary" href="#">Tertiary link</Button>
      </React.Fragment>
    )
  )
  .add('Small buttons',
    withInfo(`
      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most
      commonly found in tables. Small buttons should have three words or less.
    `)(() =>
      <React.Fragment>
        <Button {...storyProps} kind="primary" small="true">Primary button</Button>
        &nbsp;
        <Button {...storyProps} kind="secondary" small="true">Secondary link</Button>
        &nbsp;
        <Button {...storyProps} kind="tertiary" small="true">Tertiary link</Button>
      </React.Fragment>
    )
  )
  .add('Start buttons',
    withInfo(`
      Use buttons to move though a transaction. Aim to use only one primary button per page.

      Launch your service with a "Start now" button.
    `)(() =>
      <React.Fragment>
        <Button {...storyProps} kind="start">Start button</Button>
        &nbsp;
        <Button {...storyProps} kind="start" href="#">Start link</Button>
      </React.Fragment>
    )
  )
