var bio = {
	"name" : "Tom Austin",
	"role" : "Entrepreneur",
	"contacts" : {
		"mobile" : "207-240-9634",
		"email" : "taustin11@gmail.com",
		"twitter" : "@austinstom",
		"github" : "https://github.com/taustin26",
		"location" : "Philadelphia, PA"
	},
	"welcomeMsg" : "Thanks for checking out my resume",
	"skills": [
		"HTML", "CSS", "JavaScript", "Business Strategy", "Marketing", "Consumer Research", "Finance"
		],
	"photo" : "images/tom.jpg",
}





var education = {
		"schools" : [
	{
		"name" : "Duke",
		"location" : "Durham",
		"degree" : "B.S.",
		"major" : "Economics",
		"minor" : "Polictical Science",
		"graduationYear" : "2004 - 2008"
	},
	{
		"name" : "Wharton",
		"location" : "Philadelphia",
		"degree" : "MBA",
		"major" : "Entrepreneurship",
 		"graduationYear" : "2013 - 2015"
	}
	],
		"onlineCourses" : [
	{
		"name" : "Udacity",
		"location" : "Anywhere",
		"major" : "Front-End Web Development"
	}
	]
}

var work = {
		"jobs" : [
	{
		"employer" : "The New York Times",
		"location" : "New York",
		"title" : "MBA Summer Intern",
		"date" : "2014",
		"description" : "Conducted consumer research, advised on product strategy and studied internal organizational effectiveness."
	},
	{
		"employer" : "The Parthenon Group",
		"location" : "San Francisco",
		"title" : "Principal",
		"date" : "2012-2013",
		"description" : "Advised corporate and private-equity clients on strategic and due-diligence issues including growth opportunities, cost-reduction strategies, and competitive intelligence."
	},
	{
		"employer" : "Royal Bank of Canada",
		"location" : "New York",
		"title" : "Associate",
		"date" : "2010-2011",
		"description" : "Created and maintained of complex financial models."
	},	
	{
		"employer" : "Bank of America",
		"location" : "New York",
		"title" : "Analyst",
		"date" : "2008-2010",
		"description" : "Consulted corporate clients on a range of derivative based capital markets solutions."
	}	
	]
}

var projects = {
		"startUps" : [
	{
		"title" : "Bungalow Insurance",
		"description" : "I am the co-founder of a startup that is using data and design to improve the way insurance is purchased online.",
		"image" : "images/bungalow.png",
		"dates" : "2015 - Present"
	},

	]
	}




bio.display = function () {
	$("#header").append(HTMLskillsStart);
	
var formattedwelcomeMsg =
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").prepend(formattedwelcomeMsg);

var formattedbioPic =
	HTMLbioPic.replace("%data%", bio.photo);
	$("#header").prepend(formattedbioPic);

var formattedMobile =
	HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").prepend(formattedMobile);

var formattedEmail =
	HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").prepend(formattedEmail);
	$("#footerContacts").append(formattedEmail);

var formattedTwitter =
	HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#header").prepend(formattedTwitter);

var formattedGithub =
	HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header").prepend(formattedGithub);

var formattedLocation =
	HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").prepend(formattedLocation);

var formattedRole =
	HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

var formattedName =
	HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

for (skill in bio.skills){	
	var formattedSkill =
		HTMLskills.replace("%data%", bio.skills[skill])
		$("#skills").append(formattedSkill)
	};
}

bio.display();

work.display = function () {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = 
			HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle =
			HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerPlusTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(employerPlusTitle);

		var formattedDates = 
			HTMLworkDates.replace("%data%", work.jobs[job].date);
			$(".work-entry:last").append(formattedDates);

		var formattedCity = 
			HTMLworkLocation.replace("%data%", work.jobs[job].city);
			$(".work-entry:last").append(formattedCity);

		var formattedDescription = 
			HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);	
	}
}

work.display();


$("#main").append(internationalizeButton)

function inName (originalName) {
	var iName = bio.name;
	var splitName = bio.name.split(" ");
	splitName[1] = splitName[1].toUpperCase();

	iName = splitName.join(" ");

	return	iName;

}

projects.display = function() {
	for (project in projects.startUps) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle =
			HTMLprojectTitle.replace("%data%", projects.startUps[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates =
			HTMLprojectDates.replace("%data%", projects.startUps[project].dates);
			$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription =
			HTMLprojectDescription.replace("%data%", projects.startUps[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage =
			HTMLprojectImage.replace("%data%", projects.startUps[project].image);
			$(".project-entry:last").append(formattedProjectImage);	
	}
}

projects.display();

education.display = function () {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = 
			HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = 
			HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolLocation = 
			HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolDates = 
			HTMLschoolDates.replace("%data%", education.schools[school].graduationYear);
			$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolMajor = 
			HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);			
	}
}

education.display();

$("#mapDiv").append(googleMap);
