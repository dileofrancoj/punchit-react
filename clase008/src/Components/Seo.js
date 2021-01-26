import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta description={description} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default Seo;
