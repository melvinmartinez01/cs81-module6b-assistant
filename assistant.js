function PersonalAssistant(Wurp) {
  this.name = Wurp;
  this.tasks = [];
  this.mode = "nurturing";
  this.mood = "endearing";
}

PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`Added to your agenda today: "${task}"`);
};

PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const completed = this.tasks.shift();
    console.log(`Task has been completed: "${completed}"`);
    console.log(`You have ${this.tasks.length} task(s) remaining.`);
  } else {
    console.log("No tasks for today. Want to rest up on the couch with the tv on or should I set the mood for a smoke break?");
  }
};

PersonalAssistant.prototype.reportMode = function() {
  console.log(`Current mode: ${this.mode}`);
};

PersonalAssistant.prototype.reportMood = function() {
  console.log(`Current mood: ${this.mood}`);
};
