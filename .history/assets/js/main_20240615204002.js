function updateProfileInfo(profileData) {
    const photo = document
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()