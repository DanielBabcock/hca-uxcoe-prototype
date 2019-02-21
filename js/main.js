// "use strict";

// console.log("main.js");

$.ajax({
  url: "data/projects.json"
}).done(projectsLists)
.fail(function (error) {
  console.log("error", error);
}); 
function projectsLists(list) {
  let data = list.project;
  data.forEach(function (item) {
    document.getElementById("projects").innerHTML += 
    `<div class="card">
      <div class="row">
        <div class="card-body col-8">
          <h5 class="card-title">${item.title}</h5>
          <h6>${item.subTitle}</h6>
          <p class="card-text">${item.aboutShort}</p>
          <button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#projectList${item.id}">
            Read more!
          </button>
          <a href="${item.joinLink}" target="_blank">
            <button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#projectList${item.joinLink}">
              Join
            </button>
          </a>
        </div>
        <div class="col-4">
          <img class="sideImg" src="${item.img}" alt="Card image cap">
        </div>
      </div>
    </div>


    <div class="modal fade" id="projectList${item.id}" tabindex="-1" role="dialog" aria-labelledby="projectList${item.id}Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
       <h5 class="modal-title title-font" id="projectList${item.id}Label">${item.title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <center>
            <img src="${item.img}"/>
          </center>
          <br>
          ${item.aboutFull}
        </div>
       
        <div class="modal-footer">
            
            <p>
              <a href="${item.joinLink}" target="_blank">
                <button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#projectList${item.joinLink}">
                  Join
                </button>
              </a>
            </p>
            <p>
              <button type="button" data-dismiss="modal" class="btn btn-outline-primary title-font bottom" style="margin-top:20px" aria-label="Close">
                Back
              </button>
            </p>
        </button></p>
        </div>
      </div>
    </div>
  </div>`;

  });
};

//checks to see if url string is empty, if not, creates specified image
function createLink(urlString, img, mail) {
  let projectLink = urlString !== '' ? `<a href="${urlString}" target= "_blank"><img src="img/icon/${img}.png"></a>` : '<!-- -->';
  return projectLink
};

$.ajax({
  url: "data/techs.json"
}).done(techs)
.fail(function (error) {
  console.log("error", error);
});


