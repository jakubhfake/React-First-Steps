import {connect} from 'react-redux';
import Faq from './Faq.js';

const mapStateToProps = state => ({
  title: state.faq.title,
  image: state.faq.image,
  description: state.faq.description,
});

export default connect(mapStateToProps)(Faq);