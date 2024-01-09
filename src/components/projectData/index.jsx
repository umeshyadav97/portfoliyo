import React from "react";
import { projectDeatils } from "./projectdata";
import styles from "./ProjectData.module.css";
import Image from "next/image";

const ProjectData = () => {
  return (
    <div className={styles.card_wrapper}>
      {projectDeatils.map((data) => (
        <div key={data.id} className={styles.card_effect}>
          <Image
            src={
              data?.img
                ? data?.img
                : "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg"
            }
            alt="img"
          />
          <div className={styles.info}>
            <h1>{data?.title ? data?.title : ""}</h1>
            <p>{data?.para ? data?.para : ""}</p>
            <button>
              <a href={data.link} rel="noopener noreferrer" target="_blank">
                Know More
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectData;
