import React, { Fragment, useEffect, useState } from "react";
import { MENUITEMS } from "./sideMenu";
import { NavLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { useLocation } from "react-router-dom";
let history = [];
const SideBar = () => {
  let location = useLocation();
  const [menuitems, setMenuitems] = useState(MENUITEMS);
  useEffect(() => {
    history.push(location.pathname);
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
      setSidemenu();
    }
    let mainContent = document.querySelector(".main-content");
    mainContent.addEventListener("click", mainContentClickFn);
    return () => {
      mainContent.removeEventListener("click", mainContentClickFn);
    };
  }, [location, mainContentClickFn, setSidemenu]);
  useEffect(() => {
    if (
      document.body.classList.contains("horizontalmenu") &&
      window.innerWidth >= 992
    ) {
      clearMenuActive();
    }
  }, []);
  let menuIcontype;
  if (document.querySelector("body").classList.contains("horizontalmenu")) {
    menuIcontype = "hor-icon";
  } else {
    menuIcontype = "sidemenu-icon";
  }
  //  In Horizontal When we click the body it should we Closed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function mainContentClickFn() {
    if (
      document.body.classList.contains("horizontalmenu") &&
      window.innerWidth >= 992
    ) {
      clearMenuActive();
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setSidemenu() {
    if (menuitems) {
      menuitems.filter((mainlevel) => {
        if (mainlevel.Items) {
          mainlevel.Items.filter((items) => {
            items.active = false;
            items.selected = false;
            if (
              location.pathname === "/spruha/preview/" ||
              location.pathname === "/spruha/preview"
            ) {
              location.pathname = "/spruha/preview/dashboard/";
            }
            if (location.pathname === items.path + "/") {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.filter((submenu) => {
                submenu.active = false;
                submenu.selected = false;
                if (location.pathname === submenu.path + "/") {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.children) {
                  submenu.children.filter((submenu1) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (location.pathname === submenu1.path + "/") {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  });
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuitems((arr) => [...arr]);
        return mainlevel;
      });
    }
  }
  function clearMenuActive() {
    MENUITEMS.filter((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.filter((sublevel) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.filter((sublevel1) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.filter((sublevel2) => {
                  sublevel2.active = false;
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    setMenuitems((arr) => [...arr]);
  }

  function Onhover() {
    if (document.querySelector(".main-body")) {
      if (
        document
          .querySelector(".main-body")
          .classList.contains("main-sidebar-hide")
      )
        document.querySelector(".main-body").classList.add("main-sidebar-open");
    }
  }
  function Outhover() {
    if (document.querySelector(".main-body")) {
      document
        .querySelector(".main-body")
        .classList.remove("main-sidebar-open");
    }
  }

  return (
    <Fragment>
      <div className="sticky " style={{ marginBottom: "-64px" }}>
        <div className="main-menu main-sidebar main-sidebar-sticky side-menu">
          <div className="main-container-1 active main-sidebar-header">
            <Scrollbars
              options={{ removeTrackXWhenNotUsed: true }}
              className="hor-scroll"
              style={{ position: "absolute" }}
            >
              {/* <div className="sidemenu-logo">
                <Link
                  className="main-logo"
                  to={`${process.env.REACT_APP_HOME_PAGE}dashboard/`}
                >
                  <img
                    src={require("../../../assets/img/brand/logo-light.png")}
                    className="header-brand-img desktop-logo"
                    alt={"logo1"}
                  />

                  <img
                    src={require("../../../assets/img/brand/icon-light.png")}
                    className="header-brand-img icon-logo"
                    alt={"logo-2"}
                  />
                </Link>
              </div> */}
              <div
                className="main-body-1 main-sidebar-body"
                onMouseOver={() => Onhover()}
                onMouseOut={() => Outhover()}
              >
                <ul
                  className="menu-nav nav"
                  style={{ marginLeft: "0px", display: "block" }}
                >
                  {menuitems.map((Item, itemi) => (
                    <Fragment key={itemi + Math.random() * 100}>
                      <li className="nav-header">
                        <span className="nav-label">{Item.menutitle}</span>
                      </li>
                      {Item.Items.map((menuItem, i) => (
                        <li
                          className={`nav-item ${
                            menuItem.selected ? "active" : ""
                          }`}
                          key={i}
                        >
                          {menuItem.type === "link" ? (
                            <NavLink
                              to={menuItem.path + "/"}
                              className={`nav-link ${
                                menuItem.selected ? "active" : ""
                              }`}
                            >
                              <span className="shape1"></span>
                              <span className="shape2"></span>
                              <i
                                className={`${menuItem.icon} ${menuIcontype} menu-icon`}
                              ></i>
                              <span className="sidemenu-label">
                                {menuItem.title}
                              </span>
                              {menuItem.badge ? (
                                <label className={menuItem.badge}>
                                  {menuItem.badgetxt}
                                </label>
                              ) : (
                                ""
                              )}
                            </NavLink>
                          ) : (
                            ""
                          )}
                        </li>
                      ))}
                    </Fragment>
                  ))}
                </ul>
                <div className="slide-right" id="slide-right">
                  <i className="fe fe-chevron-right"></i>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
      <div className="jumps-prevent" style={{ paddingTop: "64px" }}></div>
    </Fragment>
  );
};

export default SideBar;
