import React, { useState } from 'react'
import styles from './PaginationStyles.module.css';

import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons';

function Pagination({totalProjects, projectsPerPage, setCurrentPage, currentPage}) {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }


  return (
    <section id="pagination" className={styles.container}>
        <ul className={styles.pagination}>
            <li className={`${styles.item} ${currentPage === 1 ? styles.hidden : ''}`} onClick={() => setCurrentPage(currentPage-1)}><UilAngleLeft className={styles.icon} /></li>
            {pages.map((page) => {
                return (<li key={page} className={`${styles.item} ${page === currentPage ? styles.selected : ''}`} onClick={() => setCurrentPage(page)}><h6>{page}</h6></li>);
            })}
            <li className={`${styles.item} ${currentPage === totalPages ? styles.hidden : ''}`} onClick={() => setCurrentPage(currentPage+1)}><UilAngleRight className={styles.icon}d /></li>
        </ul>

    </section>
  )
}

export default Pagination