function updateProfileInfo(profileData) {
    const photo = document.querySelector('.profile.photo')
    console.log
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()