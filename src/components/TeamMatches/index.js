// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    TeamMatchDetails: {},
    LatestMatchDetails: {},
    RecentMatchDetails: [],
    bgColor: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = updatedData
    const updateLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
    }

    const updateRecentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeamLogo: eachMatch.competing_team_logo,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      TeamMatchDetails: updatedData,
      LatestMatchDetails: updateLatestMatchDetails,
      RecentMatchDetails: updateRecentMatches,
      bgColor: id,
      isLoading: false,
    })
  }

  render() {
    const {
      TeamMatchDetails,
      LatestMatchDetails,
      RecentMatchDetails,
      bgColor,
      isLoading,
    } = this.state
    const {teamBannerUrl} = TeamMatchDetails
    console.log(TeamMatchDetails)
    console.log(LatestMatchDetails)
    console.log(RecentMatchDetails)
    console.log(bgColor)

    return (
      <div className={`main-card-container ${bgColor}`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="sub-container">
            <div className="align">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="team-banner"
              />
              <p className="latest-match">Latest Matches</p>
            </div>
            <ul className="latest-match-list">
              <LatestMatch
                LatestMatchDetails={LatestMatchDetails}
                key={LatestMatchDetails.id}
              />
            </ul>
            <div>
              <ul className="match-card-container">
                {RecentMatchDetails.map(eachMatch => (
                  <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
