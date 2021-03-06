const createItemPagination = (hrefLink, textContent, active) => {
  const li = document.createElement('li');
  li.className = 'pagination__item';

  const a = document.createElement('a');
  a.className = 'pagination__link';
  a.textContent = textContent;
  a.href = hrefLink;

  if(active) {
    a.classList.add('pagination__link-active');
  }

  li.append(a);

  return li;
}



export const pagination = (wrapper, pages, page, count) => {
  wrapper.textContent = '';

  const paginationList = document.createElement('ul');
  paginationList.className = 'pagination__list';

  const isNotStart = page - Math.floor(count / 2) > 1;
  const isEnd = page + Math.floor(count / 2) > pages;

  if (count > pages) {
    count = pages;
  }

  for (let i = 0; i < count; i++) {
    let n = i + 1;

    if (isNotStart) {
      if(isEnd) {
        n = pages - count + i + 1;
      } else {
        n = page - count / 2 + i;
      }
    }

    const li = createItemPagination(`index.html?page=${n}`, n, page === n);

    paginationList.append(li);
  }

  const firstItem = document.createElement('a');
  firstItem.classList.add('pagination__arrow', 'pagination__arrow-start');
  firstItem.href = isNotStart ? 'index.html' : '';
  wrapper.append(paginationList);

  const lastItem = document.createElement('a');
  lastItem.classList.add('pagination__arrow', 'pagination__arrow-end');
  lastItem.href = isEnd ? '' : `index.html?page=${pages}`;


  wrapper.append(firstItem, paginationList, lastItem);
};