var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://private-20665e-profile59.apiary-mock.com/questions', true)

// proses load
request.onload = function() {

    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(profile => {

            document.getElementById("data-1").innerHTML = profile.data[0].name;
            document.getElementById("data-2").innerHTML = profile.data[0].job;

            var skillsFrontend = document.getElementsByClassName("frontend");

            for (var i = 0; i < skillsFrontend.length; i++) {
                document.getElementsByClassName("profile-value")[i].innerHTML = profile.data[0].skill[0].frontend[i].percentage;
                document.getElementsByClassName("profile-param")[i].innerHTML = profile.data[0].skill[0].frontend[i].language;
            } 

            var skillsBackend = document.getElementsByClassName("backend");

            for (var i = 0; i < skillsBackend.length; i++) {
                document.getElementsByClassName("profile-value")[i+3].innerHTML = profile.data[0].skill[0].backend[i].percentage;
                document.getElementsByClassName("profile-param")[i+3].innerHTML = profile.data[0].skill[0].backend[i].language;                
            }
            
            var socials = document.getElementsByClassName("profile-social");
            for (var i = 0; i < socials.length; i++) {
                document.getElementsByClassName("profile-social")[i].href = profile.data[0].socials[i].link;
            }
        })
    } else {
        console.log('error')
    }
}

// Send request
request.send()