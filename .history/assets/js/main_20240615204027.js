function updateProfileInfo(profileData) {
    const photo = document.querySelector('.profile')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()