import './TeamDropdown.css';
import {teamData} from  '../utils/TeamData'
import down from '../../../Assests/images/down.png'
import {useState} from 'react'

const TeamDropdown = (props)=>{
    const {selectedTeam,updateSelectedTeam } = props;
    const [showDropDown,toggleDropDown] = useState(false);
    const teamList = Object.keys(teamData).map((teamName,index)=>{
        if(selectedTeam!==teamName){
            return (
                <li 
                    key={"team"+index}
                    onClick={()=>{
                        updateSelectedTeam(teamName);
                        toggleDropDown(!showDropDown);
                    }}
                >
                    <span className="team_name_in_dropdown">{teamName}</span>
                </li>
            );
        }else{
            return null;
        }
        
    })
    return (
        <div className="team-name-dropdown">
            <p className="team-heading">Team</p>
            <span 
                className="seleted-team" 
                onClick={()=>toggleDropDown(!showDropDown)}
            >
                {selectedTeam} 
                <img src={down} alt="dropdown" />
            </span>
            <ul className={(showDropDown?"show-dropdown":"") + " dropdown-item"}>
                {teamList}
            </ul>
        </div>
    );
}

export default TeamDropdown;