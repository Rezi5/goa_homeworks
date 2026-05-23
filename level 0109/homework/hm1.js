// Homework1
class YoutubeChannel{
    UploadVid(){
        this.#Check()
        this.#Title()
        this.#Publish()
    }

    #Check(){
        console.log("Checking")
    }

    #Title(){
        console.log("Adding Title")
    }

    #Publish(){
        console.log("Video uploaded successfully")
}
}
let usr = new YoutubeChannel()
usr.UploadVid()

// Homework2
class Tiktok{
    Internet(){
        this.#Select()
        this.#Addmusic()
        this.#Upload()
    }

    #Select(){
        console.log("Selecting")
    }

    #Addmusic(){
        console.log("Adding music")
    }

    #Upload(){
        console.log("Video  selected  music added video Uploadded")
    }
}
let usr2 = new Tiktok()
usr2.Internet()

// Homework 3
class TV{
    Smart(){
        this.#Connect()
        this.#Youtube()
        this.#Play()
    }

    #Connect(){
        console.log("connceting")
    }

    #Youtube(){
        console.log("Connected")
    }

    #Play(){
        console.log("Youtube video started")
    }
}

let usr3 = new TV()
usr3.Smart()

// Homework4
class Laptop{
    Off(){
        this.#Close()
        this.#Files()
        this.#Down()
    }
    
    #Close(){
        console.log("turning")
    }

    #Files(){
        console.log("off")
    }

    #Down(){
        console.log("Laptop turned off")
    }
}

let usr4 = new Laptop()
usr4.Off()

// Homework5 
class OnlineGame {
    startMatch() {
        this.#checkPlayers()
        this.#loadMap()
        this.#startGame()

        console.log("Match started")
    }

    #checkPlayers() {
        console.log("Checking players")
    }

    #loadMap() {
        console.log("Loading map")
    }

    #startGame() {
        console.log("Starting game")
    }
}

let game = new OnlineGame()
game.startMatch()

// level 109:
// 1) შექმენი კლასი YouTubeChannel, რომელსაც ექნება public მეთოდი uploadVideo().
// ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
// #checkVideo()
// #addTitle()
// #publishVideo()
// საბოლოოდ კონსოლში უნდა გამოიტანოს:
// "Video uploaded successfully"

// 2) შექმენი კლასი TikTokAccount, რომელსაც ექნება public მეთოდი postVideo().
// ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
// #selectVideo()
// #addMusic()
// #upload()


// 3) შექმენი კლასი SmartTV, რომელსაც ექნება public მეთოდი watchYouTube().
// ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
// #connectInternet()
// #openYouTube()
// #playVideo()
// საბოლოოდ კონსოლში უნდა გამოიტანოს:
// "YouTube video started"

// 4) შექმენი კლასი Laptop, რომელსაც ექნება public მეთოდი turnOff().
// ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
// #closePrograms()
// #saveFiles()
// #shutdown()
// საბოლოოდ კონსოლში უნდა გამოიტანოს:
// "Laptop turned off"

// 5) შექმენი კლასი OnlineGame, რომელსაც ექნება public მეთოდი startMatch().
// ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
// #checkPlayers()
// #loadMap()
// #startGame()
// საბოლოოდ კონსოლში უნდა გამოიტანოს:
// "Match started"
