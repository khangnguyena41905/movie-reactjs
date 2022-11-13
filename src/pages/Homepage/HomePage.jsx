import React from "react";
import Header from "../../component/Header";
import Application from "./Application/Application";
import BookingTicketBar from "./BookingTicketBar/BookingTicketBar";
import Demo from "./demo/Demo";
import Footer from "./Footer/Footer";
import HomePageCarousel from "./HomePageCarousel/HomePageCarousel";
import MovieItem from "./MovieList/MovieItem";
import MovieList from "./MovieList/MovieList";
import MovieSlide from "./MovieList/MovieSlide";
import MovieTabs from "./MovieTabs/MovieTabs";

export default function HomePage() {
  return (
    <div className="bg-black">
      <Header></Header>
      <HomePageCarousel />
      <BookingTicketBar />
      <MovieSlide />
      <MovieTabs />
      <Application />
      <Footer />
    </div>
  );
}
