// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            //console.log(json);

            const container = document.getElementById("container");
            const counter = document.getElementById("counter");

            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });

            for (let index = 0; index < json.length; index++) {
                
                container.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[index].hoursInSpace}</li>
                                <li id="${json[index].active === true?'green':''}">Active: ${json[index].active}</li>
                                <li>Skills: ${json[index].skills}</li>
                            </ul>
                    </div>
                        <img class="avatar" src="${json[index].picture}">
                    </div>
                 `;

                counter.innerHTML = `Astronaut count is ${json.length}`;

            }
        });
    });
});