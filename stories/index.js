import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number,select } from '@storybook/addon-knobs';

import "../src/styles/main.css";
import Button from '../src/components/Button/index';
import Input from '../src/components/Input/index';
import Toast from '../src/components/Toast/index';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
  .add('Primary Button', () => (
    <Button
        customClass={select("Color", ["warning", "secondary", "primary", "disabled", "transparent"], "primary")}
        disabled={boolean("Disabled", false)}
        onClick={action("clicked")}
        text="Hello Button">
      </Button>
  ));

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
  .add('Input Field', () => (
    <Input
        customClass = {select("Input theme",["error","active",""],"")}
        placeholder="Hello Button" 
        type="text"/>
  ));

storiesOf('Messaging', module)
.addDecorator(withKnobs)
.add('Toast - default ', () => (
  <Toast
      type = {select("Type",["warning","success","info","default"],"")}/>
));
