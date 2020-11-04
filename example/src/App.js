import React from 'react'
// import { ExampleComponent, } from 'egov-ui-components'
import {
  AppContainer,
  Body,
  TopBar,
  Header,
  LinkLabel,
  BackButton,
  Card,
  CardCaption,
  CardHeader,
  CardText,
  CardLabel,
  CardLabelError,
  CardTextButton,
  RadioButtons,
  Dropdown,
  Textinput,
  TextArea,
  Banner,
  CardSubHeader,
  SubmitBar,
  StatusTable, Row, LastRow,
  DisplayPhotos,
  ConnectingCheckPoints, CheckPoint,
  Rating,
  CheckBox,
  OTPInput,
  LocationSearch,
  UploadImages
} from "egov-ui-components"

import garbageimage from "./img/garbage.webp";
import logo from './img/msevalogo.png'
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

const sampleTableObject = {
  "Complaint No": "02/09/2020/051705",
  "Complaint Status":"Filed",
  "Filed Date":"1-Aug-2020",
  "Address":"Back side Post Office Patiala Road Ajit Nagar Amritsar"
}

const imagesSourceArray = [
  garbageimage,
  garbageimage,
  garbageimage
]

const onFeedback = (e,ref) =>{
  console.log(e.target)
  console.log(ref)
}

function onUpload(){
  console.log("upload images function")
}

const thumbnailUrl = [
  garbageimage,
  garbageimage
]

function onDelete(e){
  console.log("delete button pressed on")
  console.log(e.target)
}

function onOTPInput(e){
  console.log(e.target)
}
const App = () => {
  return (
    <Body>
      <TopBar img={logo} />
      <AppContainer>
        <Header>Quick Pay</Header>
        <LinkLabel>Property Tax</LinkLabel>
        <BackButton>Back</BackButton>
        <Card>
          <CardCaption>Garbage</CardCaption>
          <CardHeader>Choose Complaint Type</CardHeader>
          <CardText>Select text related to your complaint from the list given below. If the complaint type you are looking for is not listed select others</CardText>
          <CardLabel>Moholla *</CardLabel>
          <RadioButtons options={radioOptions} />

          <CardLabel>City *</CardLabel>
          <CardLabelError>Enter City</CardLabelError>

          <Dropdown label="City" isMandatory={true} option={dropdownOptions} />

          <Textinput placeholder={null} isMandatory={false} />
          <Textinput placeholder={null} isMandatory={true} />
          <TextArea />

          <UploadImages onUpload={onUpload}/>
          <UploadImages onUpload={onUpload} thumbnails={thumbnailUrl} onDelete={onDelete}/>

          <Banner successful={true} complaintNumber="02/09/2020/051705" message="Complaint Submitted"/>
          <Banner successful={false} message="Complaint Not Submitted"/>

          <CardText>The notification along with complaint number is sent to your registered mobile number. You can track the complaint status using mobile or web app.</CardText>

          <SubmitBar label="Next"/>
        </Card>

        <Card>
          <CardSubHeader>
            Burning of Garbage
          </CardSubHeader>
            {/* hard coded table example  */}
            {/* <StatusTable>
              <Row label="Complaint No." text="02/09/2020/057105" />
              <Row label="Complaint Status" text="Filed"/>
              <Row label="Filed Date" text="1-Aug-2020"/>
              <LastRow label="Address" text="Back side Post Office Patiala Road Ajit Nagar Amritsar"/>
            </StatusTable> */}

            <StatusTable dataObject={sampleTableObject}></StatusTable>

            <DisplayPhotos srcs={imagesSourceArray}/>
        </Card>

        <Card>
          <CardSubHeader>Complaint Timeline</CardSubHeader>
          <ConnectingCheckPoints>
            <CheckPoint label="Pending for Assignment" isCompleted={true}/>
            <CheckPoint label="Complaint Filed" info="12/08/2020"/>
          </ConnectingCheckPoints>
        </Card>

        <Card>
          <CardLabel>How would you rate your experience with us?</CardLabel>
          
          <Rating maxRating={5} currentRating={2} onFeedback={onFeedback}/>

          <CardLabel>What was good?</CardLabel>

          <CheckBox label="Service" />      
        </Card>

        <Card>
          <CardText>Enter the OTP sent to +91 - 9876453444</CardText>

          <OTPInput onInput={onOTPInput} length={4}/>

          <CardText>
            Request another OTP in 25 seconds
          </CardText>
            <CardTextButton>Resend OTP</CardTextButton>
        </Card>
        <Card>
          <CardHeader>Pin Complaint Location</CardHeader>
          <CardText>Click and hold to drop the pin to complaint location. If you are not able to pin the location you can skip the continue for next step.</CardText>
          <LocationSearch />
        </Card>
        
      </AppContainer>
    </Body>
  )
}

export default App
