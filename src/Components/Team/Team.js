import './Team.css';
import {teamData} from './utils/TeamData';
import TeamName from './TeamNames/TeamName'
import TeamMember from './TeamMembers/TeamMember'
import {useState} from 'react'

const Team = ()=>{
    const [selectedTeam,setSelectedTeam] = useState(Object.keys(teamData)[0])
    
    const updateSelectedTeam = (team)=>{
        setSelectedTeam(team)
    }

    return (
        <div className="team">
            <TeamName selectedTeam={selectedTeam} updateSelectedTeam={updateSelectedTeam}/>
            <TeamMember selectedTeam={selectedTeam}/>
            <div className="side-border"></div>
        </div>
    );
}

export default Team;