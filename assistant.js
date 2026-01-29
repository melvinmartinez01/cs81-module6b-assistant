//PersonalAssistant constructor 
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mode = "nurturing";
  this.mood = "endearing";
  this.time = "8 AM"
  this.temperature = 79;
  this.traffic10Freeway = "heavy";
}

//Method: addTasks
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`Added to your agenda today: "${task}"`);
  console.log(`You now have ${this.tasks.length} task(s) left.`);
}

//Method: Removes task after being completed
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const completed = this.tasks.shift();
    console.log(`Task has been completed: "${completed}"`);

    this.reportTime();

    console.log(`You now have ${this.tasks.length} task(s) left.`);
  } else {
    console.log("No tasks left to complete.");
  }
};

/* Method: Report mode - Essentially a person would set the mode the night before so that when you wake up,
you would be greeted a nurturing and endearing way.*/
PersonalAssistant.prototype.reportMode = function() {
  console.log(`Current mode: ${this.mode}`);
};

//Method: This would accompany the mode, with this being endearing to set the tone.
PersonalAssistant.prototype.reportMood = function() {
  console.log(`Current mood: ${this.mood}`);
};

//Introduce personal assistant
PersonalAssistant.prototype.introduce = function() {
  console.log(`Hello sir. I am ${this.name}.`);
  console.log(`(${this.name} stands for: Heuristic Electronic Rsesearch and Business Intelligence Engine.)`);
};

//Reports time (used after completing each task)
PersonalAssistant.prototype.reportTime = function() {
  console.log(`Time check: ${this.time}.`);
};

//Reports temperature and traffic flow
PersonalAssistant.prototype.reportEnvironment = function() {
  console.log(`Temperature: ${this.temperature} farenheit.`);
  console.log(`10 freeway traffic level: ${this.traffic10Freeway}.`);
};

//Wind-down message
PersonalAssistant.prototype.windDown = function() {
  console.log("Sir, would you like me to silence your calls?");
  console.log("I'll ensure that the wife's calls and messages are of top priority.");
  console.log("Also, I've gone ahead and prepared the water and bubbles for a bath.");
  console.log("You have about 1 hour and 20 minutes before the family arrive.");
};

// Rest/Smoke break + mood change
PersonalAssistant.prototype.restSuggestion = function() {
  this.mood = "tired";
  this.reportMood();
  console.log("No further tasks detected. Would you like to rest, or should I set the mood for a quick smoke break?");
};

//Console.log to simulate the day
const herb = new PersonalAssistant("H.E.R.B.I.E");
//Intro
herb.introduce();

//Mood before
herb.reportMood();
//Environmental report
herb.reportTime();
herb.reportEnvironment();

//Add 3 tasks
herb.addTask("Take out the trash");
herb.addTask("Wash the dishes");
herb.addTask('Take Theo out for a walk');

//Complete tasks
herb.completeTask();
herb.completeTask();
herb.completeTask();

//Mood after
herb.mood = "accomplished";
herb.reportMood();

//After tasks are done, HERBIE asks about wind-down
herb.windDown();

//End message
herb.restSuggestion();
