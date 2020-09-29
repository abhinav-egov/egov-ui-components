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
import Textinput from './components/Textinput'
import TextArea from './components/TextArea'
import Banner from './components/Banner'
import DescriptionText from './components/DescriptionText'
import SubmitBar from './components/SubmitBar'

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

          <Textinput placeholder={null} isMandatory={false} />
          <Textinput placeholder={null} isMandatory={true} />
          <TextArea />

          {/*skipping images upload for now  <UploadImages /> */}

          <Banner successful={true} complaintNumber="02/09/2020/051705" message="Complaint Submitted"/>
          <Banner successful={false} message="Complaint Not Submitted"/>

          <DescriptionText text="The notification along with complaint number is sent to your registered mobile number. You can track the complaint status using mobile or web app."/>

          <SubmitBar label="Next"/>


        </Card>
      </AppContainer>
    </Body>
  )
}

export default App
