function todoCtrl($scope){
 


 $scope.todos =[
	
		{text:"learn angular js ",done:false},
		{text:"build an todo app",done:false}
	];

	
	$scope.getTotalTodos = function (){
		return $scope.todos.length;
	};
	
 
	
	$scope.addTodo = function(){
		$scope.todos.push(
			{text:$scope.formTodoText, done:false}
			);
			$scope.formTodoText="";
	};
	
	$scope.clearCompleted = function(){
		$scope.todos =_filter($scope.todos, function(todo){
			return !todo.done;
		})
	};


}
 
	
 