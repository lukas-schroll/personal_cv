import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import PersonalData from "./components/PersonalData";
import AboutMe from "./components/AboutMe";
import Prismic from '@prismicio/client'
import TechnicalSkills from "./components/TechnicalSkills";
import SoftSkills from "./components/SoftSkills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const apiEndpoint = 'https://personal-cv.prismic.io/api/v2'
const accessToken = 'MC5ZWS1XRFJFQUFDQUFJaG9R.77-9DiBkOADvv73vv70rFwco77-977-9DjYRcO-_vSowVRvvv73vv71-77-9W--_ve-_ve-_ve-_vQ'
const client = Prismic.client(apiEndpoint, {accessToken})

function App() {

    const [technicalSkills, setTechnicalSkills] = useState([{title: "", technologies: []}])
    const [aboutMeText, setAboutMeText] = useState([""])
    const [softSkills, setSoftSkills] = useState([{textEnglish: "", textGerman: "", color: ""}])
    const [languages, setLanguages] = useState([{
        textEnglish: "",
        textGerman: "",
        proficiency: 0,
        proficiency_description_english: "",
        proficiency_description_german: "",
        country_symbol: ""
    }])
    const [experience, setExperience] = useState([{
        titleEnglish: "",
        titleGerman: "",
        institution: "",
        startDate: "",
        endDate: "",
        color: "",
        descriptionItemsGerman: [],
        descriptionItemsEnglish: []
    }])
    const [education, setEducation] = useState([{
        titleEnglish: "",
        titleGerman: "",
        institution: "",
        startDate: "",
        endDate: "",
        color: "",
        descriptionItemsGerman: [],
        descriptionItemsEnglish: []
    }])


    useEffect(() => {

        const getTechnicalSkills = async () => {
            const skills = await fetchTechnicalSkills()
            setTechnicalSkills(skills)
        }

        const getAboutMe = async () => {
            const aboutMeText = await fetchAboutMeText()
            setAboutMeText(aboutMeText)
        }

        const getSoftSkills = async () => {
            const softSkills = await fetchSoftSkills()
            setSoftSkills(softSkills)
        }

        const getLanguages = async () => {
            const languages = await fetchLanguages()
            setLanguages(languages)
        }

        const getExperience = async () => {
            const experiences = await fetchCvEntry('professional')
            setExperience(experiences)
        }

        const getEducation = async () => {
            const education = await fetchCvEntry('education')
            setEducation(education)

        }

        getTechnicalSkills()
        getAboutMe()
        getSoftSkills()
        getLanguages()
        getExperience()
        getEducation()

    }, [])

    const fetchTechnicalSkills = async () => {
        const response = await client.query(
            Prismic.Predicates.at('document.type', 'technical-skill')
        )

        let skillsFromApi = []
        response.results.map(result => {
            return skillsFromApi.push(createTechnicalSkill(result.data.title[0].text, result.data.technologies.map(e => e.text)))
        })
        return skillsFromApi
    }

    const fetchAboutMeText = async () => {
        const response = await client.query(Prismic.Predicates.at('document.type', 'about_me'))

        return (response.results[0].data.text1[0].text)

    }

    const fetchSoftSkills = async () => {
        const response = await client.query(Prismic.Predicates.at('document.type', 'soft-skill'))
        let softSkillsFromApi = response.results.map(result => {
            return createSoftSkill(
                result.data.text_english[0].text,
                result.data.text_german[0].text,
                result.data.background_color
            )
        })
        return softSkillsFromApi
    }

    const fetchLanguages = async () => {
        const response = await client.query(Prismic.Predicates.at('document.type', 'language'))
        let languagesFromApi = response.results.map(result => {
            return createLanguage(
                result.data.language_english[0].text,
                result.data.language_german[0].text,
                result.data.proficiency[0].text,
                result.data.proficiency_description_english[0].text,
                result.data.proficiency_description_german[0].text,
                result.data.country_symbol[0].text
            )
        })
        return languagesFromApi
    }

    const fetchCvEntry = async (type) => {
        let response = await client.query([Prismic.Predicates.at('document.type', 'experience'), Prismic.Predicates.at('document.tags', [type])],
            {orderings: '[my.experience.startdate desc]'})

        let cvEntries = response.results.map(result => {
            return createCvEntry(
                result.data.titleenglish[0].text,
                result.data.titlegerman[0].text,
                result.data.institution[0].text,
                result.data.startdate,
                result.data.enddate,
                result.data.descriptionitemsgerman.map(e => {
                    return e.text
                }),
                result.data.descriptionitemsenglish.map(e => {
                    return e.text
                }),
                result.data.color
            )
        })
        console.log(cvEntries)
        return cvEntries;
    }

    function createTechnicalSkill(title, technologies) {
        return {
            title: title,
            technologies: technologies
        }
    }

    function createSoftSkill(textEnglish, textGerman, color) {
        return {
            textEnglish: textEnglish,
            textGerman: textGerman,
            color: color
        }
    }

    function createLanguage(textEnglish, textGerman, proficiency, proficiency_description_english, proficiency_description_german, country_symbol) {
        return {
            textEnglish: textEnglish,
            textGerman: textGerman,
            proficiency: parseFloat(proficiency),
            proficiency_description_english: proficiency_description_english,
            proficiency_description_german: proficiency_description_german,
            country_symbol: country_symbol
        }
    }

    function createCvEntry(titleEnglish, titleGerman, institution, startDate, endDate, descriptionItemsGerman, descriptionItemsEnglish, color) {
        return {
            titleEnglish: titleEnglish,
            titleGerman: titleGerman,
            institution: institution,
            startDate: startDate,
            endDate: endDate,
            descriptionItemsGerman: descriptionItemsGerman,
            descriptionItemsEnglish: descriptionItemsEnglish,
            color: color
        }
    }

    return (
        <div className='appContainer'>
            <Header/>
            <PersonalData/>
            <AboutMe aboutMeText={aboutMeText}/>
            <TechnicalSkills technicalSkills={technicalSkills}/>
            <SoftSkills softSkills={softSkills}/>
            <Languages languages={languages}/>
            <Experience experience={experience} title='Experience'/>
            <Experience experience={education} title='Education' color='#1f1f1f'/>
            <Contact/>
            <Footer/>
        </div>
    );
}


export default App;