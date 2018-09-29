package com.nantaaditya.frontend.dto;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
// @formatter:off
/**
  * Author : Pramuditya Ananta Nur
  * www.nantaaditya.com
  * personal@nantaaditya.com
  **/
// @formatter:on

@XmlAccessorType(value = XmlAccessType.NONE)
@XmlRootElement(name = "url")
public class XmlUrl {
  public enum Priority {
    HIGH("1.0"),
    MEDIUM("0.5");

    private String value;

    Priority(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }
  }

  @XmlElement
  private String loc;

  @XmlElement
  private String lastmod;

  @XmlElement
  private String changefreq = "daily";

  @XmlElement
  private String priority;

  public XmlUrl() {}

  public XmlUrl(String loc, Date lastMod, Priority priority) {
    this.loc = loc;
    this.lastmod = new SimpleDateFormat("yyyy-MM-dd").format(lastMod);
    this.priority = priority.getValue();
  }

  public String getLoc() {
    return loc;
  }

  public String getPriority() {
    return priority;
  }

  public String getChangefreq() {
    return changefreq;
  }

  public String getLastmod() {
    return lastmod;
  }
}
