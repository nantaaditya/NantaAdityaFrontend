package com.nantaaditya.frontend.controller;

import com.nantaaditya.frontend.dto.XmlUrlSet;
import com.nantaaditya.frontend.service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
// @formatter:off
/**
 * Author : Pramuditya Ananta Nur
  * www.nantaaditya.com
  * personal@nantaaditya.com
  **/
// @formatter:on

@RestController
public class PageController {
  @Autowired
  private PageService pageService;

  @GetMapping(value = "/sitemap.xml")
  public @ResponseBody XmlUrlSet sitemap() throws Exception {
    return pageService.generateSitemap();
  }

  @GetMapping(value = "/robots.txt")
  public @ResponseBody String robots() throws Exception {
    return pageService.generateRobots();
  }
}
