import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../services/api";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchImages(query, page);
        console.log(response);
        setImages((prev) => [...prev, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (e) {
        setIsError(true);
        console.log("Error! MY GOD", e);
      } finally {
        setIsLoading(false);
        console.log("finally");
      }
    };
    getData();
  }, [query, page]);

  const handleSearchSubmit = (searchValue) => {
    setImages([]);
    setPage(1);
    setQuery(searchValue);
  };
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  // const handleOpenModal = () => {
  //   setModalIsOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setModalIsOpen(false);
  // };
  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
