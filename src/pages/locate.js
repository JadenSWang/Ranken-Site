import React from "react"
import { Row, Col, Card } from "react-materialize"
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps"
import { BrowserView, MobileView } from "react-device-detect"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const MapComponent = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={17}
//       defaultCenter={{ lat: 39.1223598, lng: -77.2344795 }}
//       defaultTilt={0}
//       mapTypeId="satellite"
//     >
//       <Marker position={{ lat: 39.1223598, lng: -77.2344795 }} />
//     </GoogleMap>
//   ))
// )

const browserView = (
  <BrowserView>
    <Row style={{ width: "80%", marginTop: "5%" }}>
      <Col s={12} m={4}>
        <Card
          header={<></>}
          actions={[
            <a href="https://goo.gl/maps/rjTTEGLesy8dazo87">Google Maps</a>,
            // <a href="https://goo.gl/maps/rjTTEGLesy8dazo87">Apple Maps</a>,
          ]}
        >
          <h5>Kentlands</h5>
          <p>
            133 Commerce Square Pl <br />
            Gaithersburg, MD 20878 <br />
            (240) 800-1077
          </p>
          <p>
            <br />
            Mon: 11:30 AM - 8:30 PM
            <br />
            Tue: Closed
            <br />
            Wed: 11:30 AM - 8:30 PM
            <br />
            Thr: 11:30 AM - 8:30 PM
            <br />
            Fri: 11:30 AM - 8:30 PM
            <br />
            Sat: 11:30 AM - 8:30 PM
            <br />
            Sun: 11:30 AM - 8:30 PM
            <br />
          </p>
        </Card>
      </Col>
      <Col s={12} m={8}>
        <Card>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.3070095447442!2d-77.2349845!3d39.1222447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b62d9f7dd8d1bb%3A0xb0eba10ab07cb5e9!2sRanKen%20Noodle!5e0!3m2!1sen!2sus!4v1644816335818!5m2!1sen!2sus" style={{ width: "100%", height: "50vh"}}></iframe>
          {/* <MapComponent
            isMarkerShown={true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7CAuPt-s6HiZoiu4QoMg2fCLlRpbUTqw&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
        </Card>
      </Col>
    </Row>
  </BrowserView>
)

const mobileView = (
  <MobileView>
    <Row style={{ width: "95%", marginTop: "5%" }}>
      <Col s={12}>
        <Card
          header={<></>}
          actions={[
            <a href="https://goo.gl/maps/rjTTEGLesy8dazo87">Google Maps</a>,
            // <a href="https://goo.gl/maps/rjTTEGLesy8dazo87">Apple Maps</a>,
          ]}
        >
          <h5>Kentlands</h5>
          <p>
            133 Commerce Square Pl <br />
            Gaithersburg, MD 20878 <br />
            (240) 543-5028
          </p>
        </Card>
      </Col>
      <Col s={12}>
        <Card>
          {/* <MapComponent
            isMarkerShown={true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7CAuPt-s6HiZoiu4QoMg2fCLlRpbUTqw&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
        </Card>
      </Col>
    </Row>
  </MobileView>
)

const LocatePage = () => {
  return (
    <Layout>
      <SEO title="Store Locator" />
      {browserView}
      {mobileView}
    </Layout>
  )
}

export default LocatePage
