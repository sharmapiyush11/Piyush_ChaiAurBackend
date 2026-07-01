require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const GithubData = {
  "login": "sharmapiyush11",
  "id": 295976116,
  "node_id": "U_kgDOEaQ8tA",
  "avatar_url": "https://avatars.githubusercontent.com/u/295976116?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sharmapiyush11",
  "html_url": "https://github.com/sharmapiyush11",
  "followers_url": "https://api.github.com/users/sharmapiyush11/followers",
  "following_url": "https://api.github.com/users/sharmapiyush11/following{/other_user}",
  "gists_url": "https://api.github.com/users/sharmapiyush11/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sharmapiyush11/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sharmapiyush11/subscriptions",
  "organizations_url": "https://api.github.com/users/sharmapiyush11/orgs",
  "repos_url": "https://api.github.com/users/sharmapiyush11/repos",
  "events_url": "https://api.github.com/users/sharmapiyush11/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sharmapiyush11/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Piyush Sharma",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-06-22T21:03:40Z",
  "updated_at": "2026-06-27T18:43:42Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/github', (req, res) => {
    res.json(GithubData)
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});