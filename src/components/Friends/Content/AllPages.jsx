import React from "react";
import css from "../Friends.module.css";

export default function AllPages(
  totalUsersCount,
  pageSize,
  currentPage,
  setPage
) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={css.numbers}>
      {pages.map((p) => {
        return (
          <text
            className={
              currentPage === p ? `${css.item} ${css.activePage}` : css.item
            }
            onClick={() => {
              setPage(p);
            }}
          >
            {p}
          </text>
        );
      })}
    </div>
  );
}
