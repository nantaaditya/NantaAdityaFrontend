package com.nantaaditya.frontend.service;
// @formatter:off
import com.nantaaditya.frontend.dto.XmlUrlSet;import com.nantaaditya.frontend.entity.Page;import java.util.List; /**
  * Author : Pramuditya Ananta Nur
  * www.nantaaditya.com
  * personal@nantaaditya.com
  **/
// @formatter:on

public interface PageService {
  XmlUrlSet generateSitemap();

  String generateRobots() throws Exception;
}
