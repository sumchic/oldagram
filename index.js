const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "William Shakespeare",
        username: "william.shh",
        location: "Stratford-upon-Avon, England",
        avatar: "images/avatar-shakespeare.jpg",
        post: "images/post-shakespeare.png",
        comment: "hey y'all, I started writing a new book. anyone want to read some sketches or something?",
        likes: 45
    }
]

const contentPlace = document.getElementById("content-place")
    
function render() {
    for (let i=0; i < posts.length; i++) {
    contentPlace.innerHTML += `
    <div class="post">
        <div class="post-header">
            <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s avatar">
            <div class="post-header-info">
                <span class="bold clickable">${posts[i].name}</span>
                <br>
                <span>${posts[i].location}</span>
            </div>
        </div>
        <img class="post-img" src="${posts[i].post}" alt="${posts[i].name}'s post">
        <div class="post-bottom">
            <div>
                <img class="icons" src="images/icon-heart.png">
                <img class="icons" src="images/icon-comment.png">
                <img class="icons" src="images/icon-dm.png">
            </div>
            <span class="bold clickable">${posts[i].likes} likes</span>
            <p><span class="bold clickable">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>`
    }
}

window.onload = () => {
  render()
}