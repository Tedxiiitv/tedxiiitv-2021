import { teamData } from "../utils/TeamData";
import "./TeamMember.css";

const TeamMember = (props) => {
  const { selectedTeam } = props;
  const curTeam = teamData[selectedTeam];
  const memberCard = curTeam.map((member) => {
    return (
      <div key={`teamMember ${member.id}`} className="team_member">
        <img alt={member.name} src={member.photo} />
        <p className="team_member_name">{member.name}</p>
        <p className="team_member_position">{member.position}</p>
      </div>
    );
  });
  return <div className="team_member_list">{memberCard}</div>;
};

export default TeamMember;
