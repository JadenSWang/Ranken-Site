import React from "react"
import { Row, Col, Card } from "react-materialize"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import { BrowserView, MobileView } from "react-device-detect"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 39.1223598, lng: -77.2344795 }}
      defaultTilt={0}
      mapTypeId="satellite"
    >
      <Marker position={{ lat: 39.1223598, lng: -77.2344795 }} />
    </GoogleMap>
  ))
)

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
          <MapComponent
            isMarkerShown={true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7CAuPt-s6HiZoiu4QoMg2fCLlRpbUTqw&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
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
          <MapComponent
            isMarkerShown={true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7CAuPt-s6HiZoiu4QoMg2fCLlRpbUTqw&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
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
