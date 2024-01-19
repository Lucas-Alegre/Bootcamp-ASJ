package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Alumno;

@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
	Alumno alumno1 = new Alumno(1, "Bob", "Patiño", 9.5);
	Alumno alumno2 = new Alumno(2, "Lucas", "Alegre", 5);
	Alumno alumno3 = new Alumno(3, "Harry", "Potter", 9.9);
	Alumno alumno4 = new Alumno(4, "Maria", "Magdalena", 2.4);

	List<Alumno> alumnos = new ArrayList<Alumno>();

	/*
	 * @GetMapping("/alumnos") public List<Alumno> listPersonas() {
	 * 
	 * return alumnos; }
	 */

	/*
	 * @DeleteMapping("/alumnos/{id}") public String deleteAlumnoById(@PathVariable
	 * int id) {
	 * 
	 * return "Eliminando el a lumno " + id; }
	 */

	/*
	 * @RequestMapping(value = "/alumnos", method = RequestMethod.GET) public
	 * List<Alumno> listPersonas() { return alumnos; }
	 */

	/*
	 * @RequestMapping(value = "/agregarAlumno", method = RequestMethod.POST) public
	 * Alumno agregar(@RequestBody Alumno alumno) { alumnos.add(alumno); return
	 * alumno; }
	 */

	@GetMapping("")
	public List<Alumno> listPersonas() {
		return alumnos;
	}

	@GetMapping("/{id}")
	public Alumno getAlumnoById(@PathVariable int id) {
		for (Alumno alum : alumnos) {
			if (alum.getId() == id) {
				return alum;
			}
		}
		return null;
	}

	@PostMapping("")
	public Alumno agregar(@RequestBody Alumno alumno) {
		alumnos.add(alumno);
		return alumno;
	}

	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable int id) {
		for (Alumno alum : alumnos) {
			if (alum.getId() == id) {
				alumnos.remove(alum);
				return "Se elimno un Alumno";
			}
		}
		return "No de úede eliminar un Alumno";
	}

	@PutMapping("/{id}") 
	public Alumno updateAlumno(@PathVariable int id, @RequestBody Alumno alumno) { 
		for (Alumno alum : alumnos) { 
			if(alum.getId() == id) { 
				return alum; 
			} 
		} return null;
	}
	 
}
