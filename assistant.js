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
PersonalAssistant.prototype.reportTime = functional() {
  console.log(`Time check: ${this.time}.`);
};

//Reports temperature and traffic flow
PersonalAssistant.prototype.reportEnvironment = function() {
  console.log(`Temperature: ${this.temperature} farenheit.`);
  console.log(`10 freeway traffic level: ${this.traffic10Freeway}.`);
};


