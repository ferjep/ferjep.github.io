import AboutIcon from '@/assets/icons/about.svg'
import ExperienceIcon from '@/assets/icons/experience.svg'
import RecommendationIcon from '@/assets/icons/recommendation.svg'

import AboutView from '../components/AboutView.vue'
import ExperienceView from '../components/ExperienceView.vue'
import RecommendationsView from '../components/RecommendatonsView.vue'

export default [
    {
        id: 'about',
        title: 'About me',
        icon: AboutIcon,
        view: AboutView
    },
    {
        id: 'experience',
        title: 'Experience',
        icon: ExperienceIcon,
        view: ExperienceView,
    },
    {
        id: 'recommendations',
        title: 'Recommendations',
        icon: RecommendationIcon,
        view: RecommendationsView
    },
]
