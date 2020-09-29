import React from 'react'
// import { ExampleComponent, } from 'egov-ui-components'
import Body from './components/Body'
import TopBar from './components/TopBar'
import AppContainer from './components/AppContainer'
import Header from './components/Header'
import Label from './components/Label'
import BackButton from './components/BackButton'
import Card from './components/Card'
import CardLabel from './components/CardLabel'
import CardHeader from './components/CardHeader'
import CardText from './components/CardText'
import RadioButtons from './components/RadioButtons'
import Dropdown from './components/Dropdown'

import './index.css'

const radioOptions = [
  "Streetlights",
  "Garbage",
  "Drains",
  "Water and Sewage"
]

const dropdownOptions = [
  "Amritsar",
  "Delhi",
  "Chennai",
  "Lucknow",
  "Banglore"
]

const App = () => {
  return (
    <Body>
      <TopBar />
      <AppContainer>
        <Header>Quick Pay</Header>
        <Label>Property Tax</Label>
        <BackButton>Back</BackButton>
        <Card>
          <CardLabel>Garbage</CardLabel>
          <CardHeader>Choose Complaint Type</CardHeader>
          <CardText>Select otexttion related to your complaint from the list given below. If the complaint type you are looking for is not listed select others</CardText>

          <RadioButtons options={radioOptions} />

          <Dropdown label="City" isMandatory={true} option={dropdownOptions} />

        </Card>
      </AppContainer>
    </Body>
  )
}

export default App
