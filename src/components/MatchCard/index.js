// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
  const style = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li>
      <div className="card-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-logo"
        />
        <p className="match-card-heading">{competingTeam}</p>
        <p className="match-card-description">{result}</p>
        <p className={`${style}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
