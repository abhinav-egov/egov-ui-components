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
import {StatusTable, Row, LastRow} from './components/StatusTable'
import DisplayPhotos from './components/DisplayPhotos'
import {ConnectingCheckPoints, CheckPoint} from './components/ConnectingCheckPoints'
import Rating from './components/Rating'
import CheckBox from './components/CheckBox'
import OTPInput from './components/OTPInput'
import LocationSearch from './components/LocationSearch'
import UploadImages from './components/UploadImages'
import garbageimage from "./img/garbage.webp"
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

          <UploadImages onUpload={onUpload}/>
          <UploadImages onUpload={onUpload} thumbnails={thumbnailUrl} onDelete={onDelete}/>

          <Banner successful={true} complaintNumber="02/09/2020/051705" message="Complaint Submitted"/>
          <Banner successful={false} message="Complaint Not Submitted"/>

          <DescriptionText text="The notification along with complaint number is sent to your registered mobile number. You can track the complaint status using mobile or web app."/>

          <SubmitBar label="Next"/>
        </Card>

        <div className="complaint-sum-card">
            <header>Burning of Garbage</header>
            
            {/* hard coded table example  */}
            {/* <StatusTable>
              <Row label="Complaint No." text="02/09/2020/057105" />
              <Row label="Complaint Status" text="Filed"/>
              <Row label="Filed Date" text="1-Aug-2020"/>
              <LastRow label="Address" text="Back side Post Office Patiala Road Ajit Nagar Amritsar"/>
            </StatusTable> */}

            <StatusTable dataObject={sampleTableObject}></StatusTable>

            <DisplayPhotos srcs={imagesSourceArray}/>
          </div>

        <div className="checkpoint-wrap">
          <h1>Complaint Timeline</h1>
          <ConnectingCheckPoints>
            <CheckPoint label="Pending for Assignment" isCompleted={true}/>
            <CheckPoint label="Complaint Filed"/>
          </ConnectingCheckPoints>
        </div>

        <div className="card-feedback-form-wrap">
          <p className="card-text">How would you rate your experience with us?</p>
          
          <Rating maxRating={5} currentRating={2} onFeedback={onFeedback}/>

          <CheckBox label="Service" />      

        </div>

        <div className="card">
          <div className="input-otp-label-wrap">
            <p className="input-otp-label">Enter the OTP sent to 
              <span className="input-otp-label-mob">
                +91 - 9876453444
              </span>
            </p>
          </div>

          <OTPInput length={4}/>

          <div className="input-otp-desc-wrap">
            <p className="input-otp-desc">
              Request another OTP in{" "}
              <span className="input-otp-desc-time">
                25
              </span> seconds
            </p>
          </div>
          <div className="input-otp-resend-wrap">
            <p className="input-otp-resend">Resend OTP</p>
          </div>
          
          <p className="card-text">Click and hold to drop the pin to complaint location. If you are not able to pin the location you can skip the continue for next step.</p>
          <LocationSearch />
        </div>
        
      </AppContainer>
    </Body>
  )
}

export default App
