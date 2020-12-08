import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="John Jonson"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              placeholder="123-45-67"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
