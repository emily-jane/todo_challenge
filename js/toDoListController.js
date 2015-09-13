angularToDoList.controller('ToDoListController', [function() {

  var self = this;

  self.taskList = [];

  self.addTask = function() {
    if (self.newTask) {
      self.taskList.push({ description: self.newTask, status: 'Active' });
      self.newTask = '';
    }

  };

}]);