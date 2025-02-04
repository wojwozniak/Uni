import Section from '../../ui/Section'
import { TeamMembers } from '../../types/TeamMembers'
import TeamCard from '../../ui/TeamCard'
import './Team.scss'

const Team = ({ teamMembers }: { teamMembers: TeamMembers[] }) => {
  return (
    <Section name="team" headerText="Meet Our Team">
      <div className="team-members">
        {teamMembers.map((member) => <TeamCard member={member} key={member.id} />)}
      </div>
    </Section>
  )
}

export default Team