import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import ImageGallerys from "./components/ImageGallery";
import "./App.css";
import GoogleTranslate from "./components/GoogleTranslate";

export class App extends Component {
  // state = {
  //   landingPageData: {},
  // };
  // getlandingPageData() {
  //   this.setState({ landingPageData: JsonData });
  // }

  // componentDidMount() {
  //   this.getlandingPageData();
  // }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <ImageGallerys />
        <Features data={this.state.landingPageData.Features} />
        {/* <Profile /> */}
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        {/* <Collage /> */}
        <GoogleTranslate />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    );
  }
}

export default App;
