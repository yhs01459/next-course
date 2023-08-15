"use client";
import Button from "../ui/Button";
import { useRef } from "react";
import classes from './EventFilter.module.css';

const EventFilter = (props) => {
  const getYear = useRef();
  const getMonth = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const seletedYear = getYear.current.value;
    const selectdMonth = getMonth.current.value;

    props.onSearch(seletedYear, selectdMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">year</label>
          <select id="year" ref={getYear}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

      <div className={classes.control}>
        <label htmlFor="month">month</label>
        <select id="month" ref={getMonth}>
          <option value="04">4월</option>
          <option value="05">5월</option>
        </select>
      </div>
      </div>
      <Button>Filter Events</Button>
    </form>
  );
};

export default EventFilter;
