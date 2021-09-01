var release = document.getElementById('release');
var rating = document.getElementById('rating');
var genre = document.getElementById('genre');
var country = document.getElementById('country');
var runningTime = document.getElementById('runningTime');
var grade = document.getElementById('grade');

var inception = {
    posterSrc : "./img/inception.jpg",
    release : "2010.07.21.",
    rating : "12-year-old spectator",
    genre : "Action, SF",
    country : "USA, UK",
    runningTime : "147min",
    grade : "9.60"
}
var shutterIsland = {
    posterSrc : "./img/shutterIsland.jpg",
    release : "2010.03.18.",
    rating : "15-year-old spectator",
    genre : "Mystery, Thriller",
    country : "USA",
    runningTime : "138min",
    grade : "8.39"
}
var lifeisBeautiful = {
    posterSrc : "./img/lifeisBeautiful.jpg",
    release : "1999.03.06.",
    rating : "All spectator",
    genre : "Drama, Comedy",
    country : "Italy",
    runningTime : "116min",
    grade : "9.54"
}

function getInformation(i) {
    document.getElementById('poster').style.display = "block";
    document.getElementById('grade').style.display = "block";
    document.getElementById('inform').style.display = "block";
    document.getElementById('mainImg').style.display = "none";

    switch(i) {
        case 0:
            document.getElementById('poster').style.display = "none";
            document.getElementById('grade').style.display = "none";
            document.getElementById('inform').style.display = "none";
            document.getElementById('mainImg').style.display = "block";
            break;
        case 1:
            document.getElementById('poster').src = inception.posterSrc;
            grade.innerHTML = "★" + inception.grade;
            release.innerHTML = "Release date : " + inception.release;
            rating.innerHTML = "Rating : " + inception.rating;
            genre.innerHTML = "Genre : " + inception.genre;
            country.innerHTML = "Country : " + inception.country;
            runningTime.innerHTML = "Running time : " + inception.runningTime;
            break;
        case 2:
            document.getElementById('poster').src = shutterIsland.posterSrc;
            grade.innerHTML = "★" + shutterIsland.grade;
            release.innerHTML = "Release date : " + shutterIsland.release;
            rating.innerHTML = "Rating : " + shutterIsland.rating;
            genre.innerHTML = "Genre : " + shutterIsland.genre;
            country.innerHTML = "Country : " + shutterIsland.country;
            runningTime.innerHTML = "Running time : " + shutterIsland.runningTime;
            break;
        case 3:
            document.getElementById('poster').src = lifeisBeautiful.posterSrc;
            grade.innerHTML = "★" + lifeisBeautiful.grade;
            release.innerHTML = "Release date : " + lifeisBeautiful.release;
            rating.innerHTML = "Rating : " + lifeisBeautiful.rating;
            genre.innerHTML = "Genre : " + lifeisBeautiful.genre;
            country.innerHTML = "Country : " + lifeisBeautiful.country;
            runningTime.innerHTML = "Running time : " + lifeisBeautiful.runningTime;
            break;
    }
}