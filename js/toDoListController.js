angularToDoList.controller('ToDoListController', [function() {

  var self = this;

  self.taskList = [];

  self.counter = 0;

  self.addTask = function() {
    if (self.newTask) {
      self.taskList.push({ description: self.newTask, status: 'Active' });
      self.newTask = '';
      self.counter = self.taskList.length;
    }

  };

  self.deleteTask = function(index) {
    self.taskList.splice(index, 1);
    self.counter = self.taskList.length;
  };

  self.completeTask = function(index) {
    self.taskList[index].status = 'Completed'
  };

  self.deleteCompletedTasks = function() {
    for (i = 0; i < self.counter; i++) {
      if (self.taskList[i].status === 'Completed') {
        self.taskList.splice(i, 1);
      };
    };
  };

}]);