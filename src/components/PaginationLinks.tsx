import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { navigate } from "gatsby"


const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? "/news" : "/post/" + (currentPage - 1).toString()
  const nextPage = "/post/" + (currentPage + 1).toString()
  return (
    <Pagination aria-label="Page navigation example">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous href="/news" />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink previous onClick={() => navigate(previousPage)} />
        </PaginationItem>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem active key={`page-number${i + 1}`}>
            <PaginationLink onClick={() => navigate(`/${i === 0 ? "news" : "post/" + (i + 1)}`)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`page-number${i + 1}`}>
            <PaginationLink onClick={() => navigate(`/${i === 0 ? "news" : "post/" + (i + 1)}`)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next onClick={() => navigate(nextPage)} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
