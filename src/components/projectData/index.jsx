import React from "react";
import { projectDeatils } from "./projectdata";
import styles from "./ProjectData.module.css";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectData = () => {
  return (
    <div className={styles.card_wrapper}>
      {projectDeatils.map((data, index) => (
        <article
          key={data.id}
          className={`${styles.card_effect} page-animate`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <div className={styles.image_wrap}>
            <Image
              src={data?.img}
              alt={`${data?.title} project preview`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.info}>
            <div>
              <p className={styles.kicker}>Featured Project</p>
              <h2>{data?.title}</h2>
              <p>{data?.para}</p>
            </div>
            <div className={styles.tags}>
              {data.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className={styles.project_link} href={data.link} rel="noopener noreferrer" target="_blank">
              View project
              <OpenInNewIcon fontSize="small" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};
export default ProjectData;
