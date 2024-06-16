function updateProfileInfo(profileData) {
    const photo = document.querySelector('.prp')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()