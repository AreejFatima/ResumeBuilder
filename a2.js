//function UPLOAD IMAGE{
document.getElementById("inp").onchange = function (e) {
  var img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
};
function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = this.width;
  canvas.height = this.height;
  ctx.drawImage(this, 0, 0);
}
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}

function show() {
  document.getElementById("popup").style.display = "block";
  // if (document.getElementById('inp_name').checked & document.getElementById('name').value != ""){
  //   document.getElementById('name').style.display="block";
  // }
  // if (document.getElementById('inp_age').checked & document.getElementById('age').value != ""){
  //   document.getElementById('age').style.display="block";
  // }
  // if (document.getElementById('inp_address').checked & document.getElementById('country').value != ""){
  //   document.getElementById('address').style.display="block";
  // }
  // if (document.getElementById('inp_phone').checked & document.getElementById('phone').value != ""){
  //   document.getElementById('address').style.display="block";
  // }
  // if (document.getElementById('inp_gender').checked & document.getElementById('gender').value != ""){
  //   document.getElementById('gender').style.display="block";
  // }
}
function hide() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("country").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("gender".value) = "";
}

function add() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var country = document.getElementById("country").value;
  var gender = document.getElementById("gender").value;
  var phone = document.getElementById("phone").value;

  if (name == "" || age == "" || country == "" || phone == "" || gender == "") {
    alert("Please fill all fields.");
  } else {
    document.getElementById("popup").style.display = "none";
    var newdiv = document.createElement("div");
    newdiv.className += "cont";
    newdiv.innerHTML =
      "Name: " +
      name +
      "<br>Age: " +
      age +
      "<br>Country: " +
      country +
      "<br>Gender: " +
      gender +
      "<br>Phone: " +
      phone;
    document.getElementById("results").replaceWith(newdiv);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("country").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender".value) = "";
  }
}

function AddBio() {
  var biography = document.createElement("textarea");
  biography.setAttribute("name", "user-biography");
  biography.className += "bioClass";
  biography.setAttribute("id", "user-biography");
  biography.setAttribute("cols", "55");
  biography.setAttribute("rows", "10");
  biography.setAttribute("placeholder", "your biography here");
  var saveButton = document.createElement("button");
  saveButton.setAttribute("id", "save");
  saveButton.innerHTML = "Save";
  saveButton.onclick = function () {
    AddBioDiv();
    saveButton.remove();
  };
  var element = document.querySelector("#biography-container");
  element.appendChild(biography, element.firstChild);
  element.appendChild(saveButton);
  document
    .querySelector("#biography-button")
    .classList.remove("biographyAddButton");
}
function HideBio() {
  var bio = document.getElementById("user-biography");
  if (bio.value != "") {
    var bioText = bio.value;
    bio.remove();
    console.log(bioText);
  } else {
    alert("Please fill bio");
  }
  return bioText;
}
var div2 = document.createElement("div");
document.getElementById("middlepane").appendChild(div2);
//div2.class += "bioDiv";
div2.setAttribute("id", "bioDiv");
function AddBioDiv() {
  var text = HideBio();
  div2.innerHTML = text;
  var toAdd = document.getElementById("biography-container");
  toAdd.append(div2);
}

function RemoveBio() {
  div2.innerHTML = "";
  div2.remove();
}

$(document).ready(function () {
  var maxDegree = 5;
  var degreeDiv = $(".degree");
  var degreeBtn = $(".addDegree");
  var count = 1;
  $(degreeBtn).click(function (e) {
    e.preventDefault();
    if (count < maxDegree) {
      count++;
      $(degreeDiv).append(
        '<div id="degree" contenteditable="true"><input type="text" name="degName[' +
          count +
          ']"/> <input type="date" name=degDate[' +
          count +
          ']"/> <select name="degInstitute' +
          count +
          ']"><option>Institute</option><option value="uni1"> Quaid-i-Azam University (QAU)</option><option value="uni2"> Air University Islamabad</option><option value="uni3"> University of Agriculture in Faisalabad </option><option value="uni4"> FAST-NUCES</option><option value="uni5"> University of Karachi </option></select> <button id="degreeRemove" class="degreeRemove">Remove</button></div><br>'
      );
    }
  });
  $(degreeDiv).on("click", ".degreeRemove", function (e) {
    e.preventDefault();
    $(this).parent("div").remove();
    count--;
  });
});

function validateSkills() {
  var formValue = document.getElementById("skillsForm");
  var sname = document.getElementById("skillNamez");
  var slevel = document.getElementById("skillLevel");
  if (sname.value == "" || slevel.value == "") {
    alert("Please fill all fields");
    return false;
  }

  addSkills(sname.value, slevel.value);
}
function addSkills(nameOfSkill, levelOfSkill) {
  var skillDiv = document.createElement("div");
  skillDiv.setAttribute("class", "skillName");
  skillDiv.setAttribute("id", "skillName");
  skillDiv.setAttribute("contenteditable", "true");
  var removeSkill = document.createElement("button");
  removeSkill.setAttribute("id", "delSKill");
  removeSkill.innerText = "x";
  removeSkill.setAttribute("type", "button");
  var skill1 = document.createElement("p");
  skill1.setAttribute("id", "skillNameStyle");
  skill1.innerText = nameOfSkill;
  var level = document.createElement("p");
  level.innerText = levelOfSkill;
  skillDiv.appendChild(document.createElement("br"));
  skillDiv.appendChild(skill1);
  skillDiv.appendChild(level);
  skillDiv.appendChild(removeSkill);
  var emptyDiv = document.getElementById("skill2");
  emptyDiv.appendChild(skillDiv);
  removeSkill.addEventListener("click", function () {
    this.parentNode.remove();
  });
  hideSkills();
}

function showSkills() {
  document.forms["skillsForm"].style.display = "block";
}
function hideSkills() {
  document.forms["skillsForm"].style.display = "none";
}

function addProjects() {
  var projDiv = document.createElement("div");
  projDiv.setAttribute("class", "newProject");
  projDiv.setAttribute("id", "newProject");
  projDiv.setAttribute("contenteditable", "true");
  var removeProj = document.createElement("button");
  removeProj.setAttribute("id", "delproj");
  removeProj.innerText = "x";
  removeProj.setAttribute("type", "button");
  var pName = document.createElement("p");
  pName.setAttribute("id", "pNameId");
  pName.innerText = "New Project";
  pName.setAttribute("contenteditable", "true");
  var parentP = document.getElementById("parentProject");
  projDiv.appendChild(removeProj);
  projDiv.appendChild(pName);
  parentP.appendChild(projDiv);
  removeProj.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
function validateCustom() {
  var formValue = document.getElementById("customForm");
  var cname = document.getElementById("customNamez");
  var cdesc = document.getElementById("customDescription");
  if (cname.value == "" || cdesc.value == "") {
    alert("Please fill all fields");
    return false;
  }
  var customDiv = document.createElement("div");
  customDiv.setAttribute("class", "customName");
  customDiv.setAttribute("id", "customName");
  customDiv.setAttribute("contenteditable", "true");
  var removeCustom = document.createElement("button");
  removeCustom.setAttribute("id", "delCustom");
  removeCustom.innerText = "x";
  removeCustom.setAttribute("type", "button");
  var custom1 = document.createElement("h2");
  custom1.setAttribute("id", "customStyle");
  custom1.innerText = cname.value;
  var dsp = document.createElement("p");
  dsp.innerText = cdesc.value;
  //customDiv.appendChild(document.createElement("br"));
  customDiv.appendChild(custom1);
  customDiv.appendChild(dsp);
  customDiv.appendChild(removeCustom);
  var emptyDiv = document.getElementById("custom2");
  emptyDiv.appendChild(customDiv);
  removeCustom.addEventListener("click", function () {
    this.parentNode.remove();
  });
  hideCustom();
}

function showCustom() {
  document.forms["customForm"].style.display = "block";
}
function hideCustom() {
  document.forms["customForm"].style.display = "none";
}

function generateView() {
  var add1 = document.getElementById("add");
  add1.style.display = "none";
  var add2 = document.getElementById("inp");
  add2.style.display = "none";
  var add3 = document.getElementById("add2");
  add3.style.display = "none";
  var add4 = document.getElementById("buttonToAddSkill");
  add4.style.display = "none";
  var add5 = document.getElementById("biography-button");
  add5.style.display = "none";
  var add6 = document.getElementById("biography-button2");
  add6.style.display = "none";
  var add7 = document.getElementById("buttonToAddCustom");
  add7.style.display = "none";
}

function editView() {
  var add1 = document.getElementById("add");
  add1.style.display = "initial";
  var add3 = document.getElementById("add2");
  add3.style.display = "initial";
  var add4 = document.getElementById("buttonToAddSkill");
  add4.style.display = "initial";
  var add5 = document.getElementById("biography-button");
  add5.style.display = "initial";
  var add6 = document.getElementById("biography-button2");
  add6.style.display = "initial";
  var add7 = document.getElementById("buttonToAddCustom");
  add7.style.display = "initial";
}
