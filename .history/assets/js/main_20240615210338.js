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
    call.href = `tel:${profileData.call}(11) 9 9023-5416`

    const mail = document.getElementById('profile.mail')
    mail.innerText = profileData.mail
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()