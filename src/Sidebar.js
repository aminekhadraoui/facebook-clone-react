import { ExpandMoreOutlined} from '@mui/icons-material'
import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg" title="miral khadhraoui"/>
        <SidebarRow src={PeopleAltIcon.photoURL} title={PeopleAltIcon.displayName}  />
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={QuestionAnswerIcon} title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
        <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
    </div>
  )
}

export default Sidebar