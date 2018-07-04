import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number,select } from '@storybook/addon-knobs';

import "../src/styles/main.css";
import Button from '../src/components/button/index';
import Input from '../src/components/form/Input/index';
import Toast from '../src/components/toast/index';
import CardBasic from '../src/components/cardBasic/index';
import CardInspection from '../src/components/cardInspection/index';
import CardLocation from '../src/components/cardLocation/index';
import CardPoll from '../src/components/cardPoll/index';
import CardTravelWarning from '../src/components/cardTravelWarning/index';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
  .add('Primary Button', () => (
    <Button
        customClass={select("Color", ["primary", "secondary", "warning","emergency","info","success", "disabled"], "primary")}
        disabled={boolean("Disabled", false)}
        onClick={action("clicked")}
        text={text("Label","Register")}>
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

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('Card - basic ', () => (
    <CardBasic
        status = {select("Upload Status",["uploading","upload-pending","upload-successful"],"")}  
        heading = {text("Title", "Call Sign")}
        caption = {text("Caption", "Daily Inspection")} 
        description ={text("Message", "February 05, 12:13:45")}
        alertType ={select("Alert Type",["safety-critical","opertational-critical"],"")}    
        />
)).add('Card - inspection ', () => (
  <CardInspection
      heading = {text("Title", "Daily Inspection")}
      caption ={text("Title", "This inspection is required before every trip.")} 
      description ={text("Message", "Toast message displayed here. It can span multiple lines.")}
      />
)).add('Card - location ', () => (
  <CardLocation
    heading = {text("Title", "Your Location")}
    caption ={text("Title", "Last Report Sent")} 
    description ={text("Message", "Toast message displayed here. It can span multiple lines.")}
      />
)).add('Card - travel warning ', () => (
  <CardTravelWarning
    heading = {text("Title", "Information")}
    description ={text("Message", "Toast message displayed here. It can span multiple lines.")}
/>)).add('Card - poll ', () => (
  <CardPoll
    heading = {text("Title", "Information")}
    description ={text("Message", "Toast message displayed here. It can span multiple lines.")}
/>)); 

storiesOf('Messaging', module)
.addDecorator(withKnobs)
.add('Toast - default ', () => (
  <Toast
      type = {select("Type",["warning","success","info","default"],"")}
      title = {text("Title", "Information")}
      message={text("Message", "Toast message displayed here. It can span multiple lines.")}
      />
));
