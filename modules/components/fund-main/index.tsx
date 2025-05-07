import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/ui/pagination";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fundList } from "./fundlist.mock";

export default function FundMain() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const reversedBlogList = fundList.slice().reverse();
  const totalPages = Math.ceil(reversedBlogList.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = reversedBlogList.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      <div className="section !pt-[200px] max-md:!pt-[120px] min-h-[925px]  fundUpdatesBG">
        <h1 className="text-[80px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] uppercase text-anybody text-white font-extrabold text-center mb-[100px] max-md:mb-[50px]">
          <span className="gradText !uppercase">Fund </span>
          updates
        </h1>
      </div>
      <div className="-mt-[530px] fundUpdatesCardList ">
        <div className="container">
          <div className="flex flex-col gap-[24px]">
            {currentBlogs.map((item, index) => (
              <div
                className="flex relative z-[12] max-lg:flex-col gap-[95px] max-xl:gap-6 fundUpdateCard p-[30px] max-md:p-4 rounded-[40px] max-md:rounded-[20px] items-center"
                key={index}
              >
                <div className="flex flex-col py-[65px] pl-[55px] max-xl:pl-4 max-xl:py-0 max-md:pl-0">
                  <p className="text-[#2DC4EC] text-[18px] font-medium mb-[12px]">
                    {item.date}
                  </p>
                  <h3 className="text-white font-anybody font-semibold text-[36px] max-sm:text-[28px] mb-[16px]">
                    <Link
                      href={item.link}
                      className=" hover:text-[#2DC4EC]"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-[#DBDBDB] text-[18px] leading-[1.8] lineclamp mb-3">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-auto text-[18px] font-medium text-[#2DC4EC] hover:text-white"
                  >
                    Learn More
                  </Link>
                </div>
                <Link
                  href={item.link}
                  className="linkImage size-[556px] max-xl:size-[300px] max-md:w-full   max-md:rounded-[20px] flex-shrink-0 rounded-[40px] overflow-hidden relative"
                >
                  <Image
                    src={item.image}
                    width={1920}
                    height={556}
                    alt="fundImg"
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-[60px] flex items-center justify-center relative z-[99] ">
            <Pagination>
              <PaginationContent>
                {/* <PaginationItem>
                <PaginationPrevious
                  className="min-w-[110px]"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
              </PaginationItem> */}
                <PaginationItem>
                  <PaginationLink
                    isActive={currentPage === 1}
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {currentPage > 3 && totalPages > 4 && <PaginationEllipsis />}
                {[...Array(totalPages)]
                  .map((_, index) => index + 1)
                  .filter(
                    (page) =>
                      page !== 1 &&
                      page !== totalPages &&
                      Math.abs(page - currentPage) <= 1
                  )
                  .map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                {currentPage < totalPages - 2 && totalPages > 4 && (
                  <PaginationEllipsis />
                )}

                {totalPages > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      isActive={currentPage === totalPages}
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* <PaginationItem>
                <PaginationNext
                  className="min-w-[110px]"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem> */}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
