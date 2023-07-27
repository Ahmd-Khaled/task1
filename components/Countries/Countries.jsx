"use client";

import { useState } from "react";
import Country from "../Country/Country";
import styles from "./styles.module.css";
import { countriesList } from "./countriesList";


const Countries = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const chooseCountryHandler = (e) => {
    setSelectedCountries([...selectedCountries, e.target.value]);
  }

  const editSelectedCountry = (renamedCountry, index) => {
    setIsEdit(true);
    
    selectedCountries.splice(index, 1, renamedCountry);
    setSelectedCountries([...selectedCountries]);
    
    // const selectedCountriesWithoutDuplication = removeDuplicates(selectedCountries);
    // setSelectedCountries([...selectedCountriesWithoutDuplication]);
  };
  
  const deleteSelectedCountry = (country) => {
    setSelectedCountries(selectedCountries.filter((cont) => cont !== country))
  };
  
  console.log("selectedCountries", selectedCountries);

  function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
  }

  return (
    <section className={styles.countries}>
      <a className={styles.github} href="https://github.com/Ahmd-Khaled/task1">
        <img src="/images/github.svg" alt="github" />
        <span>GitHub Link</span>
      </a>
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
          <div className={styles.countContainer}>
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