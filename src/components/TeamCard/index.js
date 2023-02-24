// Write your code here
// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="nav-link">
        <div className="team-card">
          <img src={teamImageUrl} alt={name} className="team-card-image" />
          <p className="team-card-title">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
