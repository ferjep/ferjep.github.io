import UserAvatarIcon from './assets/icons/user-avatar.svg'
import FolderIcon from './assets/icons/folder.svg'
import HeartIcon from './assets/icons/heart.svg'
import LinkedInIcon from './assets/icons/linkedin.svg'
import HandWavingIcon from './assets/icons/hand-waving.svg'

const sectionsObj = {
    home: {
        id: "home",
        title: 'Home',
        icon: HandWavingIcon,
    },
    about: {
        id: 'about',
        title: 'About Me',
        icon: UserAvatarIcon,
    },
    projects: {
        id: 'projects',
        title: 'Projects',
        icon: FolderIcon,
    },
    recommendations: {
        id: 'recommendations',
        title: 'Recommendations',
        icon: HeartIcon,
    },
    contact: {
        id: 'contact',
        title: 'Contact',
        icon: LinkedInIcon,
    }
}

const sectionsArr = Object.values(sectionsObj)

export {
    sectionsObj,
    sectionsArr
}
