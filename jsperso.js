

/*const agrandissementImagePodcast = document.querySelector("#affichePodcast")
agrandissementImagePodcast.addEventListener('click', imagePodcastFullScreen)

function imagePodcastFullScreen (){
    agrandissementImagePodcast.requestFullscreen()
}

const agrandissementInfographie = document.querySelector("#infographie")
agrandissementInfographie.addEventListener('click', infographieFullScreen)

function infographieFullScreen (){
    agrandissementInfographie.requestFullscreen()
}*/

const agrandissementImagePodcast = document.querySelector("#affichePodcast")
var requestFullScreen = agrandissementImagePodcast.requestFullscreen || agrandissementImagePodcast.msRequestFullscreen || agrandissementImagePodcast.mozRequestFullScreen || agrandissementImagePodcast.webkitRequestFullscreen;
agrandissementImagePodcast.addEventListener('click', imagePodcastFullScreen)

function imagePodcastFullScreen (){
    requestFullScreen.call(agrandissementImagePodcast)
}


const agrandissementInfographie = document.querySelector("#infographie")
var requestFullScreen2 = agrandissementInfographie.requestFullscreen || agrandissementInfographie.msRequestFullscreen || agrandissementInfographie.mozRequestFullScreen || agrandissementInfographie.webkitRequestFullscreen;
agrandissementInfographie.addEventListener('click', infographieFullScreen)

function infographieFullScreen (){
    requestFullScreen2.call(agrandissementInfographie)
}
