import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

/**
 * Import Components
 */
import {Button, Welcome} from '@storybook/react/demo';
import CardTag from '../src/components/Card/CardTag';
import InputGroup from '../src/components/shared/Form/InputGroup';
import Form from '../src/components/shared/Form/FormExample';
import Tooltip from '../src/components/shared/Tooltip/index';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Card', module).add('Default', () => (
  <CardTag title="Baju Gue" price="Rp. 10.000" />
));

storiesOf('Form', module)
  .add('InputGroup', () => (
    <InputGroup
      value="Bakso Urat"
      onChange={() => void 0}
      field="Bakso"
      type="text"
      error="This field is required"
    />
  ))
  .add('Form', () => <Form />);

storiesOf('Tooltip2', module).add('Tooltip', () => (
  <div style={{textAlign: 'center', padding: '3rem 0'}}>
    <Tooltip message="Sukses menambahkan ke keranjang" position="top" opacity="1" />
  </div>
));
