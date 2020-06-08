package com.liblogic.restfulbackend.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "LibLogic", "Learn To Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "LibLogic", "Learn About Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "LibLogic", "Learn About Angular", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo findById(long id) {
		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo updateById(String username, long id) {
	Todo todo = findById(id);
	todos.remove(todo);
	return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if (todo == null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

}
