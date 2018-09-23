package com.nantaaditya.frontend.service.impl;

import com.nantaaditya.frontend.dto.XmlUrl;
import com.nantaaditya.frontend.dto.XmlUrlSet;
import com.nantaaditya.frontend.entity.Page;
import com.nantaaditya.frontend.repository.PageRepository;
import com.nantaaditya.frontend.service.PageService;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.InputStreamReader;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
// @formatter:off
/**
 * Author : Pramuditya Ananta Nur
  * www.nantaaditya.com
  * personal@nantaaditya.com
  **/
// @formatter:on

@Service
@Slf4j
public class PageServiceImpl implements PageService {

  @Autowired
  private PageRepository pageRepository;

  @Override
  public XmlUrlSet generateSitemap() {
    XmlUrlSet xmlUrlSet = new XmlUrlSet();
    for (Page page : this.pageRepository.findByFlagDeleteFalse()) {
      xmlUrlSet.addUrl(new XmlUrl(page.getUrl(), page.getCreatedDate(), XmlUrl.Priority.HIGH));
    }
    return xmlUrlSet;
  }

  @Override
  public String generateRobots() throws Exception{
    File file = new ClassPathResource("/static/robots.txt").getFile();
    BufferedReader bufferedReader = new BufferedReader(new FileReader(file));

    String line;
    String result = "";
    while((line = bufferedReader.readLine()) != null){
      result += line;
      result += System.getProperty("line.separator");
    }
    return result;
  }
}
