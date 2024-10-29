package com.example.soundcar.controllers;


import com.example.soundcar.models.Product;
import com.example.soundcar.repo.ProductRepository;
import com.example.soundcar.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CardController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/configurator-box")
    public String configuratorBox(Model model) {
        return "configurator-box";
    }

    @GetMapping("/configurator-card")
    public String configuratorCard(Model model) {
        Iterable<Product> products = productRepository.findAudioByType("speaker");
        model.addAttribute("products", products);
        return "configurator-card";
    }

    /*@PostMapping
    public Product addProd(@RequestParam("butNumber") Integer butNumber,
                           @RequestParam("firstAudio") Integer firstAudioID, @RequestParam("secondAudio") Integer secondAudioID, @RequestParam("thirdAudio") Integer thirdAudioID,
                           Model model) {
        if (butNumber == 1) {

        }
    }*/
}
