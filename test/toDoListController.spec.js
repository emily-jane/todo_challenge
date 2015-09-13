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

});