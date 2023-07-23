import AboutIcon from '@/assets/icons/about.svg'
import ExperienceIcon from '@/assets/icons/experience.svg'
import RecommendationIcon from '@/assets/icons/recommendation.svg'

const sectionsObj = {
    about: {
        id: 'about',
        title: 'About me',
        icon: AboutIcon
    },
    projects: {
        id: 'experience',
        title: 'Experience',
        icon: ExperienceIcon,
    },
    recommendations: {
        id: 'recommendations',
        title: 'Recommendations',
        icon: RecommendationIcon,
    },
}

const sectionsArr = Object.values(sectionsObj)

export {
    sectionsObj,
    sectionsArr
}
