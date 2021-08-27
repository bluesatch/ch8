// export const getData =()=> fetch('https://api.github.com/users/bluesatch')
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.error);

// export async function requestGithubUser(githubLogin) {
//     try {
//         const response = await fetch(
//             `http://api.github.com/users/${githubLogin}`
//         );
//         const userData = await response.json();
//         console.log(userData);

//     } catch (error) {
//         console.error(error);
//     }
// }

/* sending data with a request */
fetch('/create/user', {
    method: "POST",
    body: JSON.stringify({ username, password, bio })
});
/* sending data with a request */

/* uploading files with fetch */
const formData = new FormData();
formData.append('username', 'moontahoe');
formData.append('fullname', 'Alex Banks');
formData.append('avatar', imgFile);

fetch('create/user', {
    method: "POST",
    body: formData
})
/* uploading files with fetch */