function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsArray = memberSkills.value.split(",");
    var memberSkillsArrayLength = memberSkillsArray.length;
    var skillsArray = skills.split(",");
    var skillsArrayLength = skillsArray.length;
    var newSkills = "";
    var i = 0;
    var j = 0;
    var found = false;
    for (i = 0; i < skillsArrayLength; i++) {
        found = false;
        for (j = 0; j < memberSkillsArrayLength; j++) {
            if (skillsArray[i] == memberSkillsArray[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newSkills += skillsArray[i] + ",";
        }
    }
    memberSkills.value += newSkills;
}