// Write your code here
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {LatestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
    venue,
    result,
  } = LatestMatchDetails
  return (
    <li className="latest-match-container">
      <div>
        <p className="latest-match-heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="paragraph">{venue}</p>
        <p className="paragraph">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <div>
        <p className="headings">First Innings</p>
        <p className="paragraph">{firstInnings}</p>
        <p className="headings">Second Innings</p>
        <p className="paragraph">{secondInnings}</p>
        <p className="headings">Man Of The Match</p>
        <p className="paragraph">{manOfTheMatch}</p>
        <p className="headings">Umpires</p>
        <p className="paragraph">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
