import {teamData} from  '../utils/TeamData'
import './TeamName.css'
const TeamName = (props)=>{
    const {selectedTeam,updateSelectedTeam } = props;
    const teamList = Object.keys(teamData).map((teamName,index)=>{
        return (
            <p 
                key={"team"+index}
                className={`team_name ${selectedTeam===teamName?'active':''}`}
                onClick={()=>updateSelectedTeam(teamName)}
            >
                {teamName}
            </p>
        );
    })
    return (
        <div className="team_name_list">
            {teamList}
        </div>
    );
}

export default TeamName;