import { teamData } from "../utils/TeamData";
import "./TeamMember.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TeamMember = (props) => {
  const { selectedTeam } = props;
  const curTeam = teamData[selectedTeam];
  const memberCard = curTeam.map((member) => {
    return (
      <div key={`teamMember ${member.id}`} className="team_member">
        <LazyLoadImage alt={member.name} effect="blur" src={member.img} />
        <p>{member.name}</p>
        <p>{member.role}</p>
      </div>
    );
  });
  return <div className="team_member_list">{memberCard}</div>;
};

export default TeamMember;
