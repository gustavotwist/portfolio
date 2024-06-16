function updateProfileInfo(profileData) {
    const photo = document.quer('.profile.photo')
    console.log(photo)
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()