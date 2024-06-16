function updateProfileInfo(profileData) {
    const photo = document.querySelector('.profile.photo')
    
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()