package com.example.soundcar.repo;

import com.example.soundcar.models.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends CrudRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.type=:type")
    Iterable<Product> findAudioByType(@Param("type") String type);
}
