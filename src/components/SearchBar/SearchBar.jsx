import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

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
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
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
