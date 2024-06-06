import React, { FC, useEffect, useState } from 'react';
import { RepoData } from '../../../app/types/types';
import ReactPaginate from 'react-paginate';
import ReposList from './reposList';
import style from '../userRepositories.module.css';

type PaginationPropsType = {
  items: RepoData[];
  itemsPerPage: number;
};

const Pagination: FC<PaginationPropsType> = ({ items, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState<Array<RepoData>>(items);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={style.paginationWrapper}>
      <ReposList items={currentItems} />
      <div className={style.pagination}>
        <p>
          {itemOffset + 1}-
          {itemOffset + itemsPerPage > items.length
            ? items.length
            : itemOffset + itemsPerPage}{' '}
          of {items.length} items
        </p>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          pageClassName={style.pageItem}
          previousClassName={style.pageNav}
          nextClassName={style.pageNav}
          breakClassName={style.pageItem}
          activeClassName={style.activePage}
          marginPagesDisplayed={1}
        />
      </div>
    </div>
  );
};

export default Pagination;
