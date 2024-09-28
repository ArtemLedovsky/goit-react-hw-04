import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, options) => {
    if (!values.query) {
      return toast.error("Please enter your request in the search field!");
    }
    onSubmit(values.query);
    options.resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.btn} type="submit">
            <BsSearch className={s.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;

//  <header>
//       <form>
//         <input
// type="text"
// autocomplete="off"
// autofocus
// placeholder="Search images and photos"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </header>
