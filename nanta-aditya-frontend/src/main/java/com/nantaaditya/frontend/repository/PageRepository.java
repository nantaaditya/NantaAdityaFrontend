package com.nantaaditya.frontend.repository;

import com.nantaaditya.frontend.entity.Page;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
// @formatter:off
/**
 * Author : Pramuditya Ananta Nur
  * www.nantaaditya.com
  * personal@nantaaditya.com
  **/
// @formatter:on

public interface PageRepository extends JpaRepository<Page, String> {

  List<Page> findByFlagDeleteFalse();
}
