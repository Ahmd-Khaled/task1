"use client";

import { useState } from "react";
import Country from "../Country/Country";
import styles from "./styles.module.css";
import { countriesList } from "./countriesList";


const Countries = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const chooseCountryHandler = (e) => {
    setSelectedCountries([...selectedCountries, e.target.value])
  }

  const editSelectedCountry = (renamedCountry, index) => {
    setIsEdit(true);
    
    selectedCountries.splice(index, 1, renamedCountry);

    setSelectedCountries([...selectedCountries]);
  };
  
  const deleteSelectedCountry = (country) => {
    setSelectedCountries(selectedCountries.filter((cont) => cont !== country))
  };
  
  console.log("selectedCountries", selectedCountries);

  return (
    <section className={styles.countries}>
      <h1 className={styles.mainTitle}>Which country/countries you visit before?</h1>
      <select className={styles.select} onChange={chooseCountryHandler}>
          <option className={styles.item} defaultChecked>Choose Country</option>
        {
          countriesList?.map((country, index) => (
            <option className={styles.item} key={country.name} value={country.name}>{country.name}</option>
          ))
        }
      </select>
      {
        selectedCountries.length > 0 ? (
          <div className={styles.contContainer}>
            <h3 className={styles.title}>{selectedCountries.length} - {selectedCountries.length > 1 ? "Countries" : "Country"}</h3>
            {
              selectedCountries.map((item, index) => (
                <Country
                  key={index}
                  id={index}
                  name={item}
                  editHandler={(renamedCountry) => editSelectedCountry(renamedCountry, index)}
                  deleteHandler={() => deleteSelectedCountry(item)} 
                  isEdit={isEdit}
                />
              ))
            }
          </div>
        ) : null
      }
    </section>
  )
}

export default Countries;