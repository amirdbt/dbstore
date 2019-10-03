import React from "react"
import "./homepage.scss"
import Directory from "../../components/Directory/Directory"
import { HomePageContainer } from "./HomepageStyles"

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default HomePage
