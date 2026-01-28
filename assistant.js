//PersonalAssistant constructor 
function PersonalAssistant(Wurp) {
  this.name = Wurp;
  this.tasks = [];
  this.mode = "nurturing";
  this.mood = "endearing";
  this.isFullyActive = false;
  this.greetTimer = null;
}

//Method: "Wake Up" trigger
Personal.Assistant.prototype.startWakeRoutine = function () {
  console.log("Morning Melvin. I shall slowly open the blinds in your room.")
  this.greetTimer = setTimeout(() => {
      this.greetWhenGettingUp();
  }, 60000);
};

//Method: addTasks
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`Added to your agenda today: "${task}"`);
};

//Method: Removes task after being completed
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const completed = this.tasks.shift();
    console.log(`Task has been completed: "${completed}"`);
    console.log(`You have ${this.tasks.length} task(s) remaining.`);
  } else {
    console.log("No tasks for today. Want to rest up on the couch with the tv on or should I set the mood for a smoke break?");
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

