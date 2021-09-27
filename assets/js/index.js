function keypress(event){
    console.log(event.key)
    if(event.key == 'a'||event.key == 'A'){
        let audio_boom = document.getElementById("boom")
        audio_boom.play()
        audio_boom.currentTime=0;
    }
    else if(event.key == 's'||event.key == 'S'){
        let audio_clap = document.getElementById("clap")
        audio_clap.play()
        audio_clap.currentTime=0;
    }
    else if(event.key == 'd'||event.key == 'D'){
        let audio_hihat = document.getElementById('hihat')
        audio_hihat.play()
        audio_hihat.currentTime=0;
    }
    else if(event.key == 'f'||event.key == 'F'){
        let audio_kick = document.getElementById('kick')
        audio_kick.play()
        audio_kick.currentTime=0;
    }
    else if(event.key == 'g'||event.key == 'G'){
        let audio_openhat = document.getElementById('openhat')
        audio_openhat.play()
        audio_openhat.currentTime=0;
    }
    else if(event.key == 'h'||event.key == 'H'){
        let audio_ride = document.getElementById('ride')
        audio_ride.play()
        audio_ride.currentTime=0;
    }
    else if(event.key == 'j'||event.key == 'J'){
        let audio_snare = document.getElementById('snare')
        audio_snare.play()
        audio_snare.currentTime=0;
    }
    else if(event.key == 'k'||event.key == 'K'){
        let audio_tink = document.getElementById('tink')
        audio_tink.play()
        audio_tink.currentTime=0;
    }
    else if(event.key == 'l'||event.key == 'L'){
        let audio_tom = document.getElementById("tom")
        audio_tom.play()
        audio_tom.currentTime=0;
    }
}