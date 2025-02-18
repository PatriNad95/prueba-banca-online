import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li>
          <Link
            to={appRoutes.transfer}
            className={
              pathname.startsWith(routesPrefixes.transfer)
                ? classes.selected
                : ""
            }
          >
            Transferencias
          </Link>
        </li>
      </ul>
    </nav>
  );
};
