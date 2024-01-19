package com.example.demo.HOLAMUNDO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundo {
	@GetMapping("/saludo/{name}") // localhost:8080/saludo [GET]
	public String holaMundo(@PathVariable String name) {
		return "Hola mundi, pruebo springboot Soy  " + name;
	}
}
