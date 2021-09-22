function keypress(event){
    console.log(event.key)
    if(event.key == 'a'){
        let audio_boom = document.getElementById("boom")
        audio_boom.play()
    }
    else if(event.key == 's'){
        let audio_clap = document.getElementById("clap")
        audio_clap.play()
    }
    else if(event.key == 'd'){
        let audio_hihat = document.getElementById('hihat')
        audio_hihat.play()
    }
    else if(event.key == 'f'){
        let audio_kick = document.getElementById('kick')
        audio_kick.play()
    }
    else if(event.key == 'g'){
        let audio_openhat = document.getElementById('openhat')
        audio_openhat.play()
    }
    else if(event.key == 'h'){
        let audio_ride = document.getElementById('ride')
        audio_ride.play()
    }
    else if(event.key == 'j'){
        let audio_snare = document.getElementById('snare')
        audio_snare.play()
    }
    else if(event.key == 'k'){
        let audio_tink = document.getElementById('tink')
        audio_tink.play()
    }
    else if(event.key == 'l'){
        let audio_tom = document.getElementById("tom")
        audio_tom.play()
    }
}