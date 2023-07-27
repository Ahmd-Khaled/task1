import { useEffect, useState } from "react";
import { countriesList } from "../Countries/countriesList";
import styles from "./styles.module.css";

const Country = ({ id, name, editHandler, deleteHandler }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [renamedCountry, setRenamedCountry] = useState("-");
  
  const selectCountryHandler = (e) => {
    setRenamedCountry(e.target.value);
    editHandler(e.target.value);
    setIsEdit(false);
  }
  
  const editCountry = () => {
    setIsEdit(true);
    editHandler();
  };

  return (
    <div className={styles.country}>
      <div className={styles.name}>
        <span className={styles.number}>{id+1}</span>
        <h4 className={styles.title}>{name}</h4>
        {
          isEdit ? (
            <select className={styles.reSelect} onChange={selectCountryHandler}>
                <option className={styles.reSelectItem} defaultChecked>Choose Country</option>
                {
                  countriesList?.map((country, index) => (
                    <option className={styles.item} key={country.name} value={country.name}>{country.name}</option>
                  ))
              }
            </select>
          ) : null
        }
      </div>
      <div className={styles.btns}>
        <button className={styles.editBtn} onClick={editCountry}>Edit</button>
        <button className={styles.deleteBtn} onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  )
}

export default Country;