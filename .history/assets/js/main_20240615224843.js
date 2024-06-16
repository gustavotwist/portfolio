function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const person = document.getElementById('profile.person')
    person.innerText = profileData.person

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const call = document.getElementById('profile.call')
    call.innerText = profileData.call
    call.href = `tel:${profileData.call}`

    const mail = document.getElementById('profile.mail')
    mail.innerText = profileData.mail
    mail.href = `mailto:${profileData.mail}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>Projeto Clínica Donate</h3>
                <a href="https://gustavotwist.github.io/clinica-donate/" target="_blank">https://gustavotwist.github.io/clinica-donate/</a>
            </li>
            `
                
                  
        

    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
})()