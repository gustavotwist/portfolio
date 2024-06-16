function updateProfileInfo(profileData) {

}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo
    console.log(profileData)
})()