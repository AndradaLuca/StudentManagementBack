package com.StudentManagement.controller;

import com.StudentManagement.entities.Materie;
import com.StudentManagement.services.MaterieServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins ="http://localhost:3001")
@RequestMapping("/materie")
public class MaterieController {

    @Autowired
    MaterieServices materieServices;




    @PostMapping("/add")
    public Materie createUser(@Valid @RequestBody Materie materie) {
        return materieServices.saveOrUpdate(materie);
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> getAll(Materie materie) {
        Map<String, Object> map = new HashMap<String, Object>();

        List<Materie> list = materieServices.list();

        if (list != null) {
            map.put("status", "200");
            map.put("message", "Data found");
            map.put("data", list);
        } else {
            map.put("status", "404");
            map.put("message", "Data not found");

        }

        return map;
    }

    @PostMapping("/delete")
    public void deleteMaterie(@Valid @RequestBody Materie materie) {
        materieServices.delete(materie);
    }


}
