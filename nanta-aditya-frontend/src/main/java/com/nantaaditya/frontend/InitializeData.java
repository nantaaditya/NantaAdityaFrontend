package com.nantaaditya.frontend;

import com.nantaaditya.frontend.entity.Page;
import com.nantaaditya.frontend.repository.PageRepository;
import java.util.Date;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

// @formatter:off
/**
 * Author : Pramuditya Ananta Nur
  * www.nantaaditya.com
  * personal@nantaaditya.com
  **/
// @formatter:on

@Component
public class InitializeData{

  @Autowired
  private PageRepository pageRepository;

  @PostConstruct
  public void constructData(){
    if(pageRepository.findAll().isEmpty()){
      this.pageRepository.saveAndFlush(constructHomePage());
      this.pageRepository.saveAndFlush(constructBlogPage());
      this.pageRepository.saveAndFlush(constructContactPage());
    }
  }

  private Page constructHomePage(){
    Page page = Page.builder()
        .url("https://www.nantaaditya.com")
        .titleId("home")
        .counter(0)
        .robots("index, follow")
        .keywords("Nanta Aditya, Nanta Aditya Web, Nanta Aditya Blog, Nanta Aditya Profile, Spring Boot Tutorial, Angular Tutorial, Vue Tutorial, Web Development Tutorial")
        .description("Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.")
        .build();
    page.setCreatedBy("ADMIN");
    page.setCreatedDate(new Date());
    page.setUpdatedBy("ADMIN");
    page.setUpdatedDate(new Date());
    page.setVersion(0L);
    return page;
  }

  private Page constructBlogPage(){
    Page page = Page.builder()
        .url("https://www.nantaaditya.com/blog")
        .titleId("blog")
        .counter(0)
        .robots("index, follow")
        .keywords("Nanta Aditya, Nanta Aditya Web, Nanta Aditya Blog, Nanta Aditya Profile, Spring Boot Tutorial, Angular Tutorial, Vue Tutorial, Web Development Tutorial")
        .description("Nanta Aditya\'s Blog | This is where you can read my post, especially about art, technology, and random things.")
        .build();
    page.setCreatedBy("ADMIN");
    page.setCreatedDate(new Date());
    page.setUpdatedBy("ADMIN");
    page.setUpdatedDate(new Date());
    page.setVersion(0L);
    return page;
  }

  private Page constructContactPage(){
    Page page = Page.builder()
        .url("https://www.nantaaditya.com/contact")
        .titleId("contact")
        .counter(0)
        .robots("index, follow")
        .keywords("Nanta Aditya, Nanta Aditya Web, Nanta Aditya Blog, Nanta Aditya Profile, Spring Boot Tutorial, Angular Tutorial, Vue Tutorial, Web Development Tutorial")
        .description("Nanta Aditya\\'s Contact | This is where you can reach me, feel free to talk to me.")
        .build();
    page.setCreatedBy("ADMIN");
    page.setCreatedDate(new Date());
    page.setUpdatedBy("ADMIN");
    page.setUpdatedDate(new Date());
    page.setVersion(0L);
    return page;
  }
}
