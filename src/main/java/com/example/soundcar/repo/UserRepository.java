package com.example.soundcar.repo;

import com.example.soundcar.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Long> {
    @Query("Select u from User u WHERE u.phone=:phone")
    User findByPhone(@Param("phone") String phone);
}

