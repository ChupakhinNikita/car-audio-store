package com.example.soundcar.controllers;

import com.example.soundcar.models.Global;
import com.example.soundcar.models.Product;
import com.example.soundcar.models.User;
import com.example.soundcar.repo.ProductRepository;
import com.example.soundcar.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/")
    public String greetings() {
        return "index";
    }

    @GetMapping("/reg")
    public String regPage() {
        return "reg";
    }

    @GetMapping("/first")
    public String firstPage(Model model) {
        Iterable<Product> products = productRepository.findAll();
        model.addAttribute("products", products);
        return "first";
    }

    @GetMapping("/login")
    public String loginPage() {
        Global.TempID = 0L;
        Global.TempUser = null;
        return "index";
    }

    @PostMapping("/register")
    public String signUp(@RequestParam String phone, @RequestParam String email,
                         @RequestParam String password, Model model) {
        User userCheck = userRepository.findByPhone(phone);
        if (userCheck != null) return "failed-register";
        User user = new User(phone, email, password);
        userRepository.save(user);
        return "/index";
    }

    @PostMapping("/login")
    public String login(@RequestParam String phone, @RequestParam String password, Model model) {
        User user = userRepository.findByPhone(phone);
        if (user != null) {
            if (!user.getPassword().equals(password)) return "failed-login";
            Global.TempID = user.getUserID();
            Global.TempUser = user;
            model.addAttribute("user", user);
            model.addAttribute("phone", user.getPhone());
        }
        else return "failed-login";

        Iterable<Product> products = productRepository.findAll();
        model.addAttribute("products", products);

        return "first";
    }
}