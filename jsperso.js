

const agrandissementImagePodcast = document.querySelector("#affichePodcast")
agrandissementImagePodcast.addEventListener('click', imagePodcastFullScreen)

function imagePodcastFullScreen (){
    agrandissementImagePodcast.requestFullscreen()
}

const agrandissementInfographie = document.querySelector("#infographie")
agrandissementInfographie.addEventListener('click', infographieFullScreen)

function infographieFullScreen (){
    agrandissementInfographie.requestFullscreen()
}
