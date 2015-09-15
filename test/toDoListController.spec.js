describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty task list and task bar', function() {
    expect(ctrl.taskList).toEqual([]);
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('when adding a new task', function() {

    it('adds task description', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      expect(ctrl.taskList[0].description).toEqual('testing');
    });

    it('sets status to active', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      expect(ctrl.taskList[0].status).toEqual('Active');
    });

    it('resets task bar', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      expect(ctrl.newTask).toEqual('');
    });
  });

  describe('when deleting a task', function() {
    it('deletes a task when button is pressed', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      ctrl.deleteTask();
      expect(ctrl.taskList).toEqual([]);
    })
  });

  describe('when completing a task', function() {
    xit('changes the status to completed when button is pressed', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      ctrl.completeTask();
      expect(ctrl.taskList[0].status).toEqual('Completed');
    });

    xit('deletes all completed tasks when top button is pressed', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      ctrl.completeTask();
      ctrl.deleteCompletedTasks();
      expect(ctrl.taskList).toEqual([]);
    });
  });

  describe('counting total tasks', function() {
    it('counts total tasks', function() {
      ctrl.newTask = 'testing';
      ctrl.addTask();
      ctrl.newTask = 'testing2';
      ctrl.addTask();
      expect(ctrl.counter).toEqual(2);
    });
  });

});